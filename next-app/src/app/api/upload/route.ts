import { NextRequest, NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
import path from 'path';

// Max file size: 15MB
const MAX_FILE_SIZE = 15 * 1024 * 1024;

const ALLOWED_MIME_TYPES = [
  'image/png',
  'image/jpeg',
  'image/jpg',
  'image/webp',
  'image/svg+xml',
  'application/pdf',
  'application/postscript', // .ai, .eps
  'application/illustrator',
  'application/x-photoshop',
  'image/vnd.adobe.photoshop',
  'application/octet-stream', // Fallback for specialized design files (.cdr, .ai)
];

const SAFE_EXTENSIONS = new Set([
  '.png',
  '.jpg',
  '.jpeg',
  '.webp',
  '.pdf',
  '.ai',
  '.eps',
  '.psd',
  '.cdr',
  '.svg',
]);

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get('file') as File | null;

    if (!file) {
      return NextResponse.json(
        { error: 'No se ha adjuntado ningún archivo.' },
        { status: 400 }
      );
    }

    if (file.size > MAX_FILE_SIZE) {
      return NextResponse.json(
        { error: 'El archivo excede el tamaño máximo permitido de 15MB.' },
        { status: 400 }
      );
    }

    const originalName = file.name || 'archivo-diseno';
    const ext = path.extname(originalName).toLowerCase();

    // 1. Validar extensión permitida
    if (!SAFE_EXTENSIONS.has(ext)) {
      return NextResponse.json(
        { error: `Tipo de archivo no permitido (${ext || 'desconocido'}). Formatos admitidos: PNG, JPG, WEBP, PDF, SVG, AI, EPS, PSD, CDR.` },
        { status: 400 }
      );
    }

    // 2. Validar tipo MIME
    const mime = (file.type || '').toLowerCase();
    const isAllowedMime = ALLOWED_MIME_TYPES.some((allowed) => mime === allowed || mime === '');
    if (!isAllowedMime && !['.ai', '.eps', '.psd', '.cdr'].includes(ext)) {
      return NextResponse.json(
        { error: `Formato MIME no válido (${mime}).` },
        { status: 400 }
      );
    }

    // 3. Inspección de seguridad para SVG contra Stored XSS
    if (ext === '.svg' || mime === 'image/svg+xml') {
      const text = await file.text();
      const dangerousPatterns = [
        /<script/i,
        /javascript:/i,
        /onload\s*=/i,
        /onerror\s*=/i,
        /onclick\s*=/i,
        /<iframe/i,
        /<object/i,
        /<embed/i,
      ];
      const hasDangerousContent = dangerousPatterns.some((pattern) => pattern.test(text));
      if (hasDangerousContent) {
        return NextResponse.json(
          { error: 'El archivo SVG contiene scripts o elementos no permitidos por seguridad.' },
          { status: 400 }
        );
      }
    }

    // Sanitize and create unique filename
    const cleanBase = path
      .basename(originalName, ext)
      .toLowerCase()
      .replace(/[^a-z0-9_-]/g, '-')
      .replace(/-+/g, '-')
      .slice(0, 30) || 'diseno';

    const timestamp = Date.now();
    const randomSuffix = Math.random().toString(36).substring(2, 7);
    const uniqueFilename = `${cleanBase}-${timestamp}-${randomSuffix}${ext}`;

    const uploadDir = path.join(process.cwd(), 'public', 'uploads', 'designs');
    await mkdir(uploadDir, { recursive: true });

    const filePath = path.join(uploadDir, uniqueFilename);
    const buffer = Buffer.from(await file.arrayBuffer());
    await writeFile(filePath, buffer);

    // Compute origin or relative URL
    const relativeUrl = `/uploads/designs/${uniqueFilename}`;

    // Get origin from request to construct absolute URL for WhatsApp
    const host = req.headers.get('host') || 'localhost:3000';
    const protocol = req.headers.get('x-forwarded-proto') || (host.startsWith('localhost') ? 'http' : 'https');
    const absoluteUrl = `${protocol}://${host}${relativeUrl}`;

    return NextResponse.json({
      success: true,
      url: absoluteUrl,
      relativeUrl,
      filename: uniqueFilename,
      originalName,
      size: file.size,
      type: file.type || 'application/octet-stream',
    });
  } catch (error) {
    console.error('Error al subir archivo de diseño:', error);
    return NextResponse.json(
      { error: 'Ocurrió un error al procesar la subida del archivo.' },
      { status: 500 }
    );
  }
}
