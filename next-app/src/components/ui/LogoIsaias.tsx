'use client';

import React from 'react';
import Image from 'next/image';

interface LogoIsaiasProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const LogoIsaias: React.FC<LogoIsaiasProps> = ({ className = '', size = 'md' }) => {
  const isLg = size === 'lg';
  const isSm = size === 'sm';

  const containerSize = isLg
    ? 'w-56 h-36 sm:w-72 sm:h-44'
    : isSm
    ? 'w-10 h-10'
    : 'w-44 h-28 sm:w-56 sm:h-36';

  return (
    <div className={`flex flex-col items-center justify-center text-center ${className}`}>
      {/* Standalone Logo ISAIAS 3 PNG */}
      <div className={`relative ${containerSize} flex items-center justify-center`}>
        <Image
          src="/assets/logo-isaias-3.png"
          alt="Variedades Isaías Logo"
          fill
          priority
          className="object-contain drop-shadow-[0_4px_24px_rgba(0,0,0,0.5)]"
        />
      </div>
    </div>
  );
};
