import React from 'react';
import { MARQUEE_ITEMS } from '@/data/content';

export const MarqueeSection: React.FC = () => {
  return (
    <div className="marquee-band">
      <div className="marquee-track">
        {MARQUEE_ITEMS.concat(MARQUEE_ITEMS).map((item, idx) => (
          <span key={idx}>{item}</span>
        ))}
      </div>
    </div>
  );
};
