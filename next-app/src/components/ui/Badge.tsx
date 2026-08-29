import React from 'react';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'gold' | 'cyan' | 'neutral' | 'outline' | 'success';
  size?: 'sm' | 'md';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'gold',
  size = 'sm',
  className = '',
}) => {
  const sizeClasses = {
    sm: 'text-[10px] px-2.5 py-1 tracking-wider',
    md: 'text-xs px-3.5 py-1.5 tracking-widest',
  }[size];

  const variantClasses = {
    gold: 'bg-[#C8A96E]/10 text-[#C8A96E] border border-[#C8A96E]/30',
    cyan: 'bg-[#00AEEB]/10 text-[#00AEEB] border border-[#00AEEB]/30',
    neutral: 'bg-[#141416] text-[#D0CFC9] border border-white/10',
    outline: 'bg-transparent text-[#A0A0A5] border border-white/20',
    success: 'bg-emerald-950/40 text-emerald-300 border border-emerald-800/40',
  }[variant];

  return (
    <span
      className={`inline-flex items-center font-mono uppercase font-semibold rounded-xs backdrop-blur-md ${sizeClasses} ${variantClasses} ${className}`}
    >
      {children}
    </span>
  );
};
