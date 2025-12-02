import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedCounter } from './AnimatedCounter';

interface CircularProgressProps {
  value: number; // 0-100 arası
  label: string;
  color?: string; // Tailwind class (text-secondary-600 gibi)
}

export const CircularProgress: React.FC<CircularProgressProps> = ({ 
  value, 
  label,
  color = "text-secondary-600"
}) => {
  const circumference = 251.2; // 2 * PI * r (r=40 için)
  const strokeDashoffset = circumference - (value / 100) * circumference;

  return (
    <div className="flex flex-col items-center group">
      <div className="relative w-32 h-32 mb-4">
        {/* Arka plan halkası */}
        <svg className="w-full h-full transform -rotate-90">
          <circle
            cx="64"
            cy="64"
            r="40"
            stroke="currentColor"
            strokeWidth="8"
            fill="transparent"
            className="text-neutral-100"
          />
          {/* Dönen halka */}
          <motion.circle
            cx="64"
            cy="64"
            r="40"
            stroke="currentColor"
            strokeWidth="8"
            fill="transparent"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            whileInView={{ strokeDashoffset: strokeDashoffset }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className={`${color} drop-shadow-md`}
            strokeLinecap="round"
          />
        </svg>
        
        {/* Ortadaki Sayı */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-3xl font-bold text-primary-900 font-serif">
            <AnimatedCounter value={value} suffix="%" />
          </span>
        </div>
      </div>
      
      <h4 className="text-sm font-bold text-neutral-600 text-center uppercase tracking-wide group-hover:text-primary-900 transition-colors">
        {label}
      </h4>
    </div>
  );
};