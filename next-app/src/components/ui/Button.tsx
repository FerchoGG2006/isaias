'use client';

import React from 'react';
import Link from 'next/link';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'gold' | 'wa' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  target?: string;
  rel?: string;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  href,
  target,
  rel,
  isLoading = false,
  leftIcon,
  rightIcon,
  className = '',
  disabled,
  children,
  ...props
}) => {
  const baseClasses =
    'inline-flex items-center justify-center font-mono font-bold tracking-wider uppercase transition-all duration-300 select-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none rounded-xs';

  const sizeClasses = {
    sm: 'text-[11px] px-3.5 py-2 gap-1.5',
    md: 'text-xs px-5 py-3 gap-2',
    lg: 'text-xs md:text-sm px-7 py-4 gap-2.5',
  }[size];

  const variantClasses = {
    primary:
      'bg-[#F4F1EA] text-[#070708] hover:bg-[#C8A96E] hover:text-[#070708] shadow-md hover:shadow-xl hover:shadow-[#C8A96E]/15 active:translate-y-0.5',
    gold:
      'bg-[#C8A96E] text-[#070708] hover:bg-[#d8b87a] shadow-lg shadow-[#C8A96E]/20 hover:shadow-[#C8A96E]/30 active:translate-y-0.5',
    secondary:
      'bg-[#141416] text-[#F4F1EA] border border-white/15 hover:border-white/40 hover:bg-[#1c1c20] active:translate-y-0.5',
    outline:
      'bg-transparent text-[#F4F1EA] border border-white/20 hover:border-[#C8A96E] hover:text-[#C8A96E] active:translate-y-0.5',
    wa:
      'bg-[#25D366] text-[#042a0b] hover:bg-[#20ba5a] shadow-lg shadow-[#25D366]/25 hover:shadow-[#25D366]/35 active:translate-y-0.5',
    ghost:
      'bg-transparent text-[#A0A0A5] hover:text-[#F4F1EA] hover:bg-white/5',
    danger:
      'bg-red-950/40 text-red-300 border border-red-800/40 hover:bg-red-900/60 hover:border-red-600',
  }[variant];

  const combinedClasses = `${baseClasses} ${sizeClasses} ${variantClasses} ${className}`;

  const content = (
    <>
      {isLoading && (
        <svg
          className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}
      {!isLoading && leftIcon}
      <span>{children}</span>
      {!isLoading && rightIcon}
    </>
  );

  if (href) {
    return (
      <Link href={href} target={target} rel={rel} className={combinedClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} disabled={disabled || isLoading} {...props}>
      {content}
    </button>
  );
};
