'use client';

import React from 'react';
import { CATEGORIES } from '@/data/categories';
import { TECHNIQUES } from '@/data/techniques';

export interface CatalogFilterBarProps {
  activeCategory: string;
  onCategoryChange: (catSlug: string) => void;
  activeTechnique: string;
  onTechniqueChange: (techId: string) => void;
  searchQuery: string;
  onSearchQueryChange: (query: string) => void;
  totalResults: number;
}

export const CatalogFilterBar: React.FC<CatalogFilterBarProps> = ({
  activeCategory,
  onCategoryChange,
  activeTechnique,
  onTechniqueChange,
  searchQuery,
  onSearchQueryChange,
  totalResults,
}) => {
  const isFiltered = activeCategory !== 'todos' || activeTechnique !== 'todos' || searchQuery.trim() !== '';

  const handleReset = () => {
    onCategoryChange('todos');
    onTechniqueChange('todos');
    onSearchQueryChange('');
  };

  return (
    <div className="flex flex-col gap-6 bg-[#0e0e11] border border-white/10 rounded-sm p-6 mb-10 shadow-xl">
      
      {/* Top row: Search input & Active count */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 border-b border-white/10">
        <div className="relative flex-1 max-w-md">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchQueryChange(e.target.value)}
            placeholder="Buscar por prenda, tela o técnica (ej. durazno, polo, reflectivo)..."
            className="w-full bg-[#141419] border border-white/15 focus:border-[#C8A96E] text-[#F4F1EA] pl-10 pr-4 py-2.5 font-sans text-xs rounded-xs outline-none transition-colors placeholder:text-[#A0A0A5]/60"
          />
          <svg
            className="w-4 h-4 text-[#A0A0A5] absolute left-3.5 top-1/2 -translate-y-1/2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          {searchQuery && (
            <button
              onClick={() => onSearchQueryChange('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#A0A0A5] hover:text-[#F4F1EA] text-xs font-mono"
            >
              ✕
            </button>
          )}
        </div>

        <div className="flex items-center gap-4 font-mono text-xs text-[#A0A0A5]">
          {isFiltered && (
            <button
              onClick={handleReset}
              className="text-[#C8A96E] hover:underline cursor-pointer font-semibold"
            >
              Reiniciar filtros ↺
            </button>
          )}
          <span className="bg-[#141419] px-3.5 py-2 border border-white/10 rounded-xs">
            MOSTRANDO <strong className="text-[#C8A96E]">{totalResults}</strong> PRODUCTOS
          </span>
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex flex-col gap-2">
        <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#A0A0A5] font-semibold">
          CATEGORÍA:
        </span>
        <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filtro de categorías">
          <button
            type="button"
            role="tab"
            aria-selected={activeCategory === 'todos'}
            onClick={() => onCategoryChange('todos')}
            className={`font-mono text-xs uppercase tracking-wider px-4 py-2 rounded-xs border transition-all ${
              activeCategory === 'todos'
                ? 'bg-[#F4F1EA] text-[#070708] font-bold border-[#F4F1EA]'
                : 'bg-[#141419] text-[#D0CFC9] border-white/10 hover:border-white/30 hover:text-[#F4F1EA]'
            }`}
          >
            Todos
          </button>
          {CATEGORIES.map((cat) => {
            const isSelected = activeCategory === cat.slug;
            return (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={isSelected}
                onClick={() => onCategoryChange(cat.slug)}
                className={`font-mono text-xs uppercase tracking-wider px-4 py-2 rounded-xs border transition-all ${
                  isSelected
                    ? 'bg-[#C8A96E] text-[#070708] font-bold border-[#C8A96E]'
                    : 'bg-[#141419] text-[#D0CFC9] border-white/10 hover:border-white/30 hover:text-[#F4F1EA]'
                }`}
              >
                {cat.name}
              </button>
            );
          })}
        </div>
      </div>

      {/* Technique Filter Pills */}
      <div className="flex flex-col gap-2 pt-2 border-t border-white/5">
        <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#A0A0A5] font-semibold">
          TÉCNICA DE ESTAMPACIÓN / BORDADO:
        </span>
        <div className="flex flex-wrap gap-2" role="radiogroup" aria-label="Filtro de técnicas">
          <button
            type="button"
            onClick={() => onTechniqueChange('todos')}
            className={`font-mono text-[11px] uppercase tracking-wider px-3 py-1.5 rounded-xs border transition-all ${
              activeTechnique === 'todos'
                ? 'bg-white/20 text-[#F4F1EA] border-white/40 font-bold'
                : 'bg-transparent text-[#A0A0A5] border-white/10 hover:border-white/25 hover:text-[#F4F1EA]'
            }`}
          >
            Todas las técnicas
          </button>
          {TECHNIQUES.map((tech) => {
            const isSelected = activeTechnique === tech.id || activeTechnique === tech.slug;
            return (
              <button
                key={tech.id}
                type="button"
                onClick={() => onTechniqueChange(tech.id)}
                className={`font-mono text-[11px] uppercase tracking-wider px-3 py-1.5 rounded-xs border transition-all flex items-center gap-1.5 ${
                  isSelected
                    ? 'bg-[#C8A96E]/20 text-[#C8A96E] border-[#C8A96E] font-bold'
                    : 'bg-transparent text-[#A0A0A5] border-white/10 hover:border-white/25 hover:text-[#F4F1EA]'
                }`}
              >
                <span>{tech.name}</span>
                {tech.curingTemperature && (
                  <span className="text-[9px] opacity-70">({tech.curingTemperature})</span>
                )}
              </button>
            );
          })}
        </div>
      </div>

    </div>
  );
};
