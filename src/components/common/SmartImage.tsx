import React, { useState } from 'react';
import { Image as ImageIcon } from 'lucide-react';

interface SmartImageProps {
  src?: string;
  alt: string;
  className?: string;
  aspectRatio?: 'video' | 'square' | 'portrait' | 'wide';
  placeholderText?: string; // Geliştiriciye not: Buraya ne resmi geleceği
}

export const SmartImage: React.FC<SmartImageProps> = ({ 
  src, 
  alt, 
  className = "", 
  aspectRatio = 'video',
  placeholderText = "Image Required"
}) => {
  const [error, setError] = useState(false);

  // Aspect Ratio Sınıfları
  const aspectClass = {
    video: 'aspect-video',
    square: 'aspect-square',
    portrait: 'aspect-[3/4]',
    wide: 'aspect-[21/9]'
  }[aspectRatio];

  // Eğer resim yoksa veya yüklenemezse gösterilecek Placeholder
  if (!src || error) {
    return (
      <div className={`bg-neutral-200 w-full ${aspectClass} ${className} flex flex-col items-center justify-center text-neutral-400 border-2 border-dashed border-neutral-300 rounded-lg overflow-hidden relative group`}>
        <div className="absolute inset-0 bg-neutral-100 opacity-50 pattern-grid-lg" />
        <ImageIcon className="w-12 h-12 mb-2 z-10 opacity-50" />
        <span className="text-xs font-mono bg-white px-2 py-1 rounded shadow-sm z-10 text-neutral-500">
          {placeholderText}
        </span>
        <span className="text-[10px] mt-1 text-neutral-400 z-10">
          ({aspectRatio} size)
        </span>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden rounded-lg ${aspectClass} ${className}`}>
      <img 
        src={src} 
        alt={alt} 
        onError={() => setError(true)}
        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
      />
    </div>
  );
};