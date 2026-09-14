'use client';

import React from 'react';
import Link from 'next/link';
import { generateBreadcrumbsSchema } from '@/lib/seo/schema';

export interface BreadcrumbStep {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbStep[];
  className?: string;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, className = '' }) => {
  // Prep schema items (including Home as first item if not already present)
  const fullSteps: BreadcrumbStep[] = items[0]?.href === '/'
    ? items
    : [{ label: 'Inicio', href: '/' }, ...items];

  const schemaData = generateBreadcrumbsSchema(
    fullSteps.map((step) => ({
      name: step.label,
      url: step.href || '/',
    }))
  );

  return (
    <nav
      aria-label="Migas de pan"
      className={`flex items-center flex-wrap gap-1.5 font-mono text-[11px] text-[#8A8A92] ${className}`}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      {fullSteps.map((step, index) => {
        const isLast = index === fullSteps.length - 1;

        return (
          <React.Fragment key={`${step.label}-${index}`}>
            {index > 0 && <span className="text-white/20 select-none">/</span>}
            {isLast || !step.href ? (
              <span className="text-[#C8A96E] font-medium" aria-current="page">
                {step.label}
              </span>
            ) : (
              <Link
                href={step.href}
                className="hover:text-[#F4F1EA] transition-colors"
              >
                {step.label}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};
