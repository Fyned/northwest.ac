import React from 'react';
import { Container } from './Container';
import { twMerge } from 'tailwind-merge';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  bg?: 'white' | 'gray' | 'navy' | 'pattern';
  id?: string;
}

export const Section: React.FC<SectionProps> = ({ children, className, bg = 'white', id }) => {
  
  const bgStyles = {
    white: 'bg-white',
    gray: 'bg-neutral-50',
    navy: 'bg-primary-900 text-white',
    pattern: 'bg-primary-900 text-white bg-[url("https://www.transparenttextures.com/patterns/cubes.png")]' // Hafif doku örneği
  };

  return (
    <section id={id} className={twMerge(`py-16 md:py-24 ${bgStyles[bg]}`, className)}>
      <Container>
        {children}
      </Container>
    </section>
  );
};

export const SectionTitle: React.FC<{ children: React.ReactNode; subtitle?: string; align?: 'left' | 'center' }> = ({ children, subtitle, align = 'center' }) => (
  <div className={`mb-12 max-w-3xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
    {subtitle && (
      <span className="block text-secondary-500 font-bold tracking-widest uppercase text-sm mb-3">
        {subtitle}
      </span>
    )}
    <h2 className="text-3xl md:text-4xl font-serif font-bold leading-tight mb-4">
      {children}
    </h2>
    <div className={`h-1 w-20 bg-secondary-500 rounded-full ${align === 'center' ? 'mx-auto' : ''}`} />
  </div>
);