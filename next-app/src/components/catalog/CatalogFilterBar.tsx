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
    <div className="flex flex-col gap-6 bg-[#181D26]/90 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-8 mb-10 shadow-2xl">
      
      {/* Top row: Search input & Active count */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 border-b border-white/10">
        <div className="relative flex-1 max-w-md">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchQueryChange(e.target.value)}
            placeholder="Buscar por prenda, tela o técnica (ej. durazno, polo, reflectivo)..."
            className="w-full bg-[#12151C] border border-white/15 focus:border-[#3B82F6] text-[#FFFFFF] pl-10 pr-4 py-2.5 text-xs rounded-full outline-none transition-colors placeholder:text-[#94A3B8]/60"
          />
          <svg
            className="w-4 h-4 text-[#94A3B8] absolute left-3.5 top-1/2 -translate-y-1/2"
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
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#94A3B8] hover:text-[#FFFFFF] text-xs"
            >
              ✕
            </button>
          )}
        </div>

        <div className="flex items-center gap-4 text-xs text-[#94A3B8]">
          {isFiltered && (
            <button
              onClick={handleReset}
              className="text-[#3B82F6] hover:underline cursor-pointer font-semibold"
            >
              Reiniciar filtros ↺
            </button>
          )}
          <span className="bg-[#12151C] px-4 py-2 border border-white/10 rounded-full text-xs">
            Mostrando <strong className="text-[#E5A910]">{totalResults}</strong> prendas
          </span>
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex flex-col gap-2">
        <span className="text-xs uppercase tracking-wider text-[#94A3B8] font-semibold">
          Categoría:
        </span>
        <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filtro de categorías">
          <button
            type="button"
            role="tab"
            aria-selected={activeCategory === 'todos'}
            onClick={() => onCategoryChange('todos')}
            className={`text-xs font-semibold px-4 py-2 rounded-full border transition-all cursor-pointer ${
              activeCategory === 'todos'
                ? 'bg-[#3B82F6] text-[#FFFFFF] border-[#3B82F6] shadow-sm'
                : 'bg-[#12151C] text-[#94A3B8] border-white/10 hover:border-white/30 hover:text-[#FFFFFF]'
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
                className={`text-xs font-medium px-4 py-2 rounded-full border transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#3B82F6] text-[#FFFFFF] font-semibold border-[#3B82F6] shadow-sm'
                    : 'bg-[#12151C] text-[#94A3B8] border-white/10 hover:border-white/30 hover:text-[#FFFFFF]'
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
        <span className="text-xs uppercase tracking-wider text-[#94A3B8] font-semibold">
          Técnica de Personalización:
        </span>
        <div className="flex flex-wrap gap-2" role="radiogroup" aria-label="Filtro de técnicas">
          <button
            type="button"
            onClick={() => onTechniqueChange('todos')}
            className={`text-xs px-3.5 py-1.5 rounded-full border transition-all cursor-pointer ${
              activeTechnique === 'todos'
                ? 'bg-white/20 text-[#FFFFFF] border-white/40 font-semibold'
                : 'bg-transparent text-[#94A3B8] border-white/10 hover:border-white/25 hover:text-[#FFFFFF]'
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
                className={`text-xs px-3.5 py-1.5 rounded-full border transition-all flex items-center gap-1.5 cursor-pointer ${
                  isSelected
                    ? 'bg-[#E5A910]/20 text-[#E5A910] border-[#E5A910] font-semibold'
                    : 'bg-transparent text-[#94A3B8] border-white/10 hover:border-white/25 hover:text-[#FFFFFF]'
                }`}
              >
                <span>{tech.name}</span>
                {tech.curingTemperature && (
                  <span className="text-[10px] opacity-70">({tech.curingTemperature})</span>
                )}
              </button>
            );
          })}
        </div>
      </div>

    </div>
  );
};
