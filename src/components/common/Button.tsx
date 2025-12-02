import React from 'react';
import { twMerge } from 'tailwind-merge';
// Düzeltme burada: 'type HTMLMotionProps' olarak ayrıldı
import { motion, type HTMLMotionProps } from 'framer-motion';

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className,
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center rounded transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
  
  const variants = {
    primary: "bg-primary-900 text-white hover:bg-primary-800 focus:ring-primary-900",
    secondary: "bg-secondary-600 text-white hover:bg-secondary-700 focus:ring-secondary-600",
    outline: "border border-primary-900 text-primary-900 hover:bg-neutral-50 focus:ring-primary-900",
    ghost: "text-primary-900 hover:bg-neutral-100 hover:text-primary-900",
  };

  const sizes = {
    sm: "h-9 px-4 text-sm",
    md: "h-11 px-6 text-base",
    lg: "h-14 px-8 text-lg",
  };

  return (
    <motion.button 
      whileTap={{ scale: 0.97 }} // Tıklama efekti
      className={twMerge(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </motion.button>
  );
};