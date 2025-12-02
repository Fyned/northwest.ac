import React from 'react';
import { SmartImage } from './SmartImage';
import { twMerge } from 'tailwind-merge';

interface CardProps {
  imageSrc?: string;
  imageAlt?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
  badges?: string[];
}

export const Card: React.FC<CardProps> = ({ 
  imageSrc, 
  imageAlt = "Card Image", 
  title, 
  subtitle, 
  children, 
  footer,
  className,
  badges
}) => {
  return (
    <div className={twMerge("group bg-white rounded-xl border border-neutral-100 shadow-soft hover:shadow-card transition-all duration-300 flex flex-col h-full overflow-hidden hover:-translate-y-1", className)}>
      
      {/* Görsel Alanı */}
      {imageSrc && (
        <div className="relative h-48 overflow-hidden">
          <SmartImage 
            src={imageSrc} 
            alt={imageAlt} 
            className="w-full h-full group-hover:scale-110 transition-transform duration-700"
            placeholderText={title}
          />
          {/* Badge'ler görselin üstünde */}
          {badges && (
            <div className="absolute top-4 left-4 flex flex-wrap gap-2">
              {badges.map((badge, idx) => (
                <span key={idx} className="bg-white/90 backdrop-blur-sm text-primary-900 text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                  {badge}
                </span>
              ))}
            </div>
          )}
          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
        </div>
      )}

      {/* İçerik */}
      <div className="p-6 flex-grow flex flex-col">
        {subtitle && (
          <span className="text-xs font-bold text-secondary-600 uppercase tracking-wider mb-2 block">
            {subtitle}
          </span>
        )}
        
        <h3 className="text-xl font-serif font-bold text-primary-900 mb-3 group-hover:text-secondary-600 transition-colors">
          {title}
        </h3>
        
        <div className="text-neutral-600 text-sm leading-relaxed flex-grow">
          {children}
        </div>

        {/* Footer (Butonlar vb.) */}
        {footer && (
          <div className="mt-6 pt-4 border-t border-neutral-100">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
};