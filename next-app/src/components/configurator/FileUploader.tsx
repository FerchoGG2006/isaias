'use client';

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { DesignFileAttachment } from '@/domain';

export interface FileUploaderProps {
  attachment?: DesignFileAttachment;
  onAttachmentChange: (attachment?: DesignFileAttachment) => void;
  allowedFormats?: string[];
  maxSizeMb?: number;
}

export const FileUploader: React.FC<FileUploaderProps> = ({
  attachment,
  onAttachmentChange,
  allowedFormats = ['PNG', 'JPG', 'JPEG', 'PDF', 'SVG'],
  maxSizeMb = 25,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const processFile = (file: File) => {
    setError(null);

    // Validar tamaño
    const fileSizeMb = file.size / (1024 * 1024);
    if (fileSizeMb > maxSizeMb) {
      setError(`El archivo supera el límite de ${maxSizeMb} MB (${fileSizeMb.toFixed(1)} MB).`);
      return;
    }

    // Validar formato
    const ext = file.name.split('.').pop()?.toUpperCase() || '';
    if (!allowedFormats.includes(ext) && !allowedFormats.includes(file.type)) {
      setError(`Formato no soportado (.${ext}). Usa ${allowedFormats.join(', ')}.`);
      return;
    }

    let previewUrl: string | undefined = undefined;
    if (file.type.startsWith('image/')) {
      previewUrl = URL.createObjectURL(file);
    }

    onAttachmentChange({
      name: file.name,
      size: file.size,
      type: file.type || ext,
      previewUrl,
    });
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      processFile(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      processFile(e.target.files[0]);
    }
  };

  const handleRemove = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (attachment?.previewUrl) {
      URL.revokeObjectURL(attachment.previewUrl);
    }
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
    onAttachmentChange(undefined);
    setError(null);
  };

  return (
    <div className="flex flex-col gap-2">
      <input
        ref={fileInputRef}
        type="file"
        accept=".png,.jpg,.jpeg,.pdf,.svg"
        onChange={handleChange}
        className="hidden"
        id="design-file-input"
      />

      {attachment ? (
        <div className="flex items-center justify-between p-3.5 bg-[#141419] border border-[#C8A96E]/50 rounded-xs">
          <div className="flex items-center gap-3 overflow-hidden">
            {attachment.previewUrl ? (
              <div className="relative w-12 h-12 bg-black/50 border border-white/10 rounded-xs overflow-hidden shrink-0">
                <Image
                  src={attachment.previewUrl}
                  alt={attachment.name}
                  fill
                  className="object-contain"
                />
              </div>
            ) : (
              <div className="w-12 h-12 bg-black/50 border border-white/10 rounded-xs flex items-center justify-center shrink-0 text-[#C8A96E]">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
            )}

            <div className="flex flex-col min-w-0">
              <span className="font-mono text-xs text-[#F4F1EA] font-semibold truncate">
                {attachment.name}
              </span>
              <span className="font-mono text-[11px] text-[#C8A96E]">
                {(attachment.size / 1024).toFixed(1)} KB · Listo para cotización
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={handleRemove}
            className="text-[#A0A0A5] hover:text-red-400 p-2 hover:bg-white/5 rounded-xs transition-colors shrink-0"
            title="Quitar archivo"
            aria-label="Quitar archivo de diseño"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </button>
        </div>
      ) : (
        <div
          onClick={() => fileInputRef.current?.click()}
          onDragOver={(e) => {
            e.preventDefault();
            setIsDragging(true);
          }}
          onDragLeave={() => setIsDragging(false)}
          onDrop={handleDrop}
          className={`flex flex-col items-center justify-center p-6 border-2 border-dashed rounded-xs cursor-pointer transition-all duration-300 ${
            isDragging
              ? 'border-[#C8A96E] bg-[#C8A96E]/5'
              : 'border-white/15 hover:border-[#C8A96E]/60 bg-[#0b0b0e] hover:bg-[#121216]'
          }`}
        >
          <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[#C8A96E] mb-2">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
            </svg>
          </div>

          <span className="font-mono text-xs font-bold text-[#F4F1EA] mb-1 text-center">
            Haz clic o arrastra tu archivo de diseño
          </span>

          <span className="font-mono text-[11px] text-[#A0A0A5] text-center">
            {allowedFormats.join(', ')} (hasta {maxSizeMb} MB)
          </span>

          <span className="text-[10px] text-[#A0A0A5]/70 mt-2 text-center">
            * Se adjuntará como referencia en el resumen de tu cotización.
          </span>
        </div>
      )}

      {error && (
        <span className="font-mono text-xs text-red-400 bg-red-950/40 border border-red-800/40 p-2 rounded-xs">
          {error}
        </span>
      )}
    </div>
  );
};
