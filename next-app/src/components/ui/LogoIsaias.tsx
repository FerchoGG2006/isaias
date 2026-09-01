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
    ? 'w-72 h-48 sm:w-[480px] sm:h-[260px]'
    : isSm
    ? 'w-10 h-10'
    : 'w-48 h-32 sm:w-64 sm:h-40';

  return (
    <div className={`flex flex-col items-center justify-center text-center ${className}`}>
      {/* Standalone Logo ISAIAS 3 PNG */}
      <div className={`relative ${containerSize} flex items-center justify-center`}>
        <Image
          src="/assets/logo-isaias-3.png"
          alt="Variedades Isaías Logo"
          fill
          priority
          className="object-contain drop-shadow-[0_0_30px_rgba(0,210,255,0.3)]"
        />
      </div>
    </div>
  );
};
