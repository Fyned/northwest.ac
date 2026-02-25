import { Link, useLocation } from 'react-router-dom';
import { Container } from './Container';
import { ChevronRight, Home } from 'lucide-react';
import { motion } from 'framer-motion';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
}

export const PageHeader = ({ title, subtitle, description }: PageHeaderProps) => {
  const location = useLocation();
  const pathSegments = location.pathname.split('/').filter(Boolean);

  const formatSegment = (segment: string) => {
    return segment
      .replace(/-/g, ' ')
      .replace(/\b\w/g, l => l.toUpperCase());
  };

  return (
    <div className="relative bg-primary-950 overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-950 to-primary-900" />
      <div className="absolute inset-0 dot-pattern opacity-20" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary-500/30 to-transparent" />

      <Container className="relative z-10 pt-12 pb-14 md:pt-16 md:pb-20">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-neutral-400 mb-6 flex-wrap">
          <Link to="/" className="hover:text-white transition-colors flex items-center gap-1">
            <Home className="w-3 h-3" aria-hidden="true" />
            Home
          </Link>
          {pathSegments.map((segment, idx) => {
            const path = '/' + pathSegments.slice(0, idx + 1).join('/');
            const isLast = idx === pathSegments.length - 1;
            return (
              <span key={idx} className="flex items-center gap-1.5">
                <ChevronRight className="w-3 h-3 text-neutral-600" aria-hidden="true" />
                {isLast ? (
                  <span className="text-secondary-400 font-medium" aria-current="page">{formatSegment(segment)}</span>
                ) : (
                  <Link to={path} className="hover:text-white transition-colors">
                    {formatSegment(segment)}
                  </Link>
                )}
              </span>
            );
          })}
        </nav>

        {/* Title */}
        {subtitle && (
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-secondary-400 font-bold tracking-[0.2em] uppercase text-xs block mb-3"
          >
            {subtitle}
          </motion.span>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white leading-tight"
        >
          {title}
        </motion.h1>
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-neutral-300 text-lg max-w-2xl leading-relaxed"
          >
            {description}
          </motion.p>
        )}
      </Container>
    </div>
  );
};
