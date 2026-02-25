import { Link } from 'react-router-dom';
import { Container } from '../common/Container';
import { SmartImage } from '../common/SmartImage';
import { ArrowRight, BookOpen, Users, Globe, Award } from 'lucide-react';
import { motion, type Variants } from 'framer-motion';
import { AnimatedCounter } from '../common/AnimatedCounter';

import heroBg from '../../assets/images/hero-bg.jpg';

export const Hero = () => {
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.15, duration: 0.7, ease: 'easeOut' },
    }),
  };

  return (
    <div className="relative min-h-[85vh] lg:min-h-[90vh] flex flex-col justify-between overflow-hidden bg-primary-950">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-primary-950/65 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-950 via-primary-950/30 to-primary-950/40 z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-950/60 to-transparent z-10" />
        <SmartImage
          src={heroBg}
          alt="University Campus"
          className="h-full w-full opacity-70"
          placeholderText="Campus Main Building"
        />
      </div>

      {/* Decorative Pattern */}
      <div className="absolute inset-0 z-[11] dot-pattern opacity-30" />

      {/* Content */}
      <Container className="relative z-20 flex-grow flex items-center pt-28 lg:pt-36 pb-16">
        <div className="max-w-3xl">
          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full px-4 py-2 mb-8"
          >
            <span className="flex h-2 w-2 rounded-full bg-secondary-400 animate-pulse-soft" />
            <span className="text-white/90 text-xs font-semibold tracking-[0.15em] uppercase">
              Admissions Open 2026
            </span>
          </motion.div>

          <motion.h1
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-[1.08] mb-8"
          >
            Knowledge for a{' '}
            <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-300 via-secondary-400 to-secondary-500">
              Borderless World
            </span>
          </motion.h1>

          <motion.p
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-base sm:text-lg md:text-xl text-neutral-300 leading-relaxed max-w-xl mb-10 border-l-2 border-secondary-500/60 pl-5"
          >
            Join a global community of innovators. With 478+ accredited
            programmes across 25 countries, NorthWest is your gateway to
            excellence.
          </motion.p>

          <motion.div
            custom={3}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="flex flex-wrap gap-4"
          >
            <Link
              to="/academics"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-secondary-500 hover:bg-secondary-400 text-primary-950 font-bold text-sm rounded-lg transition-all duration-200 shadow-lg shadow-secondary-500/20 hover:shadow-secondary-400/30 btn-shine"
            >
              Find Your Programme
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold text-sm rounded-lg border border-white/20 backdrop-blur-sm transition-all duration-200"
            >
              Virtual Campus Tour
            </Link>
          </motion.div>
        </div>
      </Container>

      {/* Stats Bar */}
      <div className="relative z-30 bg-primary-950/90 backdrop-blur-md border-t border-white/10">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 py-6 md:py-7">
            <StatItem number="478+" label="Programmes" icon={BookOpen} />
            <StatItem number="9458" label="Graduates" icon={Users} />
            <StatItem number="25" label="Countries" icon={Globe} />
            <StatItem number="ISO" label="Certified" icon={Award} />
          </div>
        </Container>
      </div>
    </div>
  );
};

const StatItem = ({
  number,
  label,
  icon: Icon,
}: {
  number: string;
  label: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any;
}) => {
  const numericValue = parseInt(number.replace(/[^0-9]/g, ''));
  const suffix = number.replace(/[0-9,]/g, '');

  return (
    <div className="flex items-center justify-center gap-3 px-4 py-2 group">
      <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-secondary-500/10 transition-colors duration-300">
        <Icon className="w-5 h-5 text-secondary-400" />
      </div>
      <div>
        <span className="block text-2xl md:text-3xl font-bold font-display text-white leading-none">
          {!isNaN(numericValue) ? (
            <AnimatedCounter value={numericValue} suffix={suffix} />
          ) : (
            number
          )}
        </span>
        <span className="block text-[10px] font-semibold uppercase tracking-widest text-neutral-400 mt-1">
          {label}
        </span>
      </div>
    </div>
  );
};
