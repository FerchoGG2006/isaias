import React from 'react';
import { TECHNIQUES } from '@/data/content';

export const TechniquesSection: React.FC = () => {
  return (
    <section id="tecnicas" className="wrap">
      <div className="section-head">
        <span className="eyebrow">Nuestras Especialidades</span>
        <h2>Técnicas de Estampado</h2>
        <p>
          Elegimos la mejor técnica según la prenda y el diseño para garantizar la mayor durabilidad y vibridez de color.
        </p>
      </div>

      <div className="tech-grid">
        {TECHNIQUES.map((tech) => (
          <div key={tech.id} className="tech-card">
            <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d={tech.iconSvg} />
            </svg>
            <h3>{tech.title}</h3>
            <p>{tech.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
