'use client';

import React, { useEffect, useState, useRef } from 'react';

interface TextScrambleProps {
  text: string;
  className?: string;
  delay?: number;
  speed?: number;
  as?: keyof React.JSX.IntrinsicElements;
}

const CHARS = '░▒▓█▀▄■□●○◆◇★☆ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

export const TextScramble: React.FC<TextScrambleProps> = ({
  text,
  className = '',
  delay = 0,
  speed = 40,
  as: Tag = 'span',
}) => {
  const [displayed, setDisplayed] = useState('');
  const [started, setStarted] = useState(false);
  const frameRef = useRef<number>(0);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;

    const timer = setTimeout(() => {
      let iteration = 0;
      const totalChars = text.length;
      const maxIterations = totalChars * 3;

      const interval = setInterval(() => {
        const progress = iteration / maxIterations;
        const resolvedCount = Math.floor(progress * totalChars);

        let result = '';
        for (let i = 0; i < totalChars; i++) {
          if (text[i] === ' ') {
            result += ' ';
          } else if (i < resolvedCount) {
            result += text[i];
          } else {
            result += CHARS[Math.floor(Math.random() * CHARS.length)];
          }
        }

        setDisplayed(result);
        iteration++;

        if (iteration > maxIterations) {
          clearInterval(interval);
          setDisplayed(text);
        }
      }, speed);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timer);
  }, [started, text, delay, speed]);

  return React.createElement(
    Tag as string,
    { ref, className, 'aria-label': text },
    displayed || '\u00A0'
  );
};
