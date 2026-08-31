'use client';

import React, { useRef, useState } from 'react';

interface DesignUploaderProps {
  onFileSelect: (fileName: string | undefined, fileUrl: string | undefined) => void;
  selectedFileName?: string;
}

export const DesignUploader: React.FC<DesignUploaderProps> = ({
  onFileSelect,
  selectedFileName,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [dragActive, setDragActive] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleFile = (file: File | undefined) => {
    if (!file) {
      setPreviewUrl(null);
      onFileSelect(undefined, undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(file);
    setPreviewUrl(file.type.startsWith('image/') ? objectUrl : null);
    onFileSelect(file.name, objectUrl);
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  return (
    <div className="rounded-xl border border-neutral-800 bg-neutral-900/60 p-4 backdrop-blur-sm">
      <h4 className="text-sm font-semibold uppercase tracking-wider text-neutral-200 mb-1">
        Adjuntar Arte / Logotipo (Opcional)
      </h4>
      <p className="text-xs text-neutral-400 mb-3">
        Archivos soportados: PNG, JPG, SVG, PDF (hasta 25MB). Se adjuntará en tu cotización.
      </p>

      {selectedFileName ? (
        <div className="flex items-center justify-between rounded-lg border border-amber-500/40 bg-amber-950/20 p-3">
          <div className="flex items-center space-x-3 truncate">
            {previewUrl ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={previewUrl}
                alt="Vista previa"
                className="h-10 w-10 object-cover rounded border border-neutral-700"
              />
            ) : (
              <div className="flex h-10 w-10 items-center justify-center rounded bg-amber-900/40 text-amber-400 font-bold text-xs">
                DOC
              </div>
            )}
            <div className="truncate">
              <p className="text-xs font-semibold text-amber-200 truncate">
                {selectedFileName}
              </p>
              <p className="text-[10px] text-amber-400/80">Listo para enviar por WhatsApp</p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => handleFile(undefined)}
            className="text-xs text-neutral-400 hover:text-red-400 px-2 py-1 transition"
          >
            Quitar
          </button>
        </div>
      ) : (
        <div
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
          className={`flex cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed p-6 transition ${
            dragActive
              ? 'border-amber-500 bg-amber-950/20'
              : 'border-neutral-800 hover:border-neutral-700 bg-neutral-950/40'
          }`}
        >
          <svg
            className="mb-2 h-8 w-8 text-neutral-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M7 16a4 4 0 01-.88-7.903A5 5 0 0115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
            />
          </svg>
          <p className="text-xs font-medium text-neutral-300">
            Haz clic o arrastra tu archivo aquí
          </p>
          <p className="text-[10px] text-neutral-500 mt-1">PNG transparente recomendado</p>
          <input
            ref={fileInputRef}
            type="file"
            accept=".png,.jpg,.jpeg,.svg,.pdf"
            onChange={(e) => handleFile(e.target.files?.[0])}
            className="hidden"
          />
        </div>
      )}
    </div>
  );
};
