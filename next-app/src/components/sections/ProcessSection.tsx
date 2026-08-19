'use client';

import React from 'react';
import { PROCESS_STEPS } from '@/data/content';

export const ProcessSection: React.FC = () => {
  return (
    <section className="process">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Paso a Paso</span>
          <h2>¿Cómo Trabajamos?</h2>
          <p>Un proceso sencillo y directo para asegurar que tu prenda quede exactamente como la soñaste.</p>
        </div>
        <div className="proc-grid">
          {PROCESS_STEPS.map((step) => (
            <div key={step.num} className="proc-step">
              <span className="num">{step.num}</span>
              <h4>{step.title}</h4>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
