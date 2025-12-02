import React from 'react';
import { CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

interface TimelineItemProps {
  title: string;
  description: string;
  isLast?: boolean;
  index: number;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ title, description, isLast, index }) => (
  <motion.div 
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ delay: index * 0.2, duration: 0.5 }}
    viewport={{ once: true }}
    className="flex gap-6 group"
  >
    <div className="flex flex-col items-center">
      <div className="w-10 h-10 bg-white border-2 border-primary-900 rounded-full flex items-center justify-center shrink-0 z-10 group-hover:bg-primary-900 group-hover:text-white transition-colors duration-300 shadow-sm">
        <CheckCircle className="w-5 h-5 text-secondary-500 group-hover:text-secondary-400" />
      </div>
      {!isLast && (
        <div className="w-0.5 h-full bg-neutral-200 my-2 group-hover:bg-primary-200 transition-colors" />
      )}
    </div>
    <div className="pb-12 pt-1">
      <h3 className="text-xl font-serif font-bold text-primary-900 mb-3 group-hover:text-secondary-600 transition-colors">
        {title}
      </h3>
      <p className="text-neutral-600 leading-relaxed text-lg max-w-xl">
        {description}
      </p>
    </div>
  </motion.div>
);

export const Timeline: React.FC<{ items: { title: string; description: string }[] }> = ({ items }) => {
  return (
    <div className="max-w-3xl mx-auto pl-4 md:pl-0">
      {items.map((item, index) => (
        <TimelineItem 
          key={index} 
          index={index}
          title={item.title} 
          description={item.description} 
          isLast={index === items.length - 1} 
        />
      ))}
    </div>
  );
};