import { Button } from '../common/Button';
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
      transition: { delay: custom * 0.2, duration: 0.8, ease: "easeOut" }
    })
  };

  return (
    <div className="relative min-h-[90vh] flex flex-col justify-between overflow-hidden bg-primary-900">
      
      {/* Arka Plan */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-primary-950/70 z-10 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-950 via-transparent to-transparent z-10" />
        <SmartImage 
          src={heroBg} 
          alt="University Campus" 
          className="h-full w-full opacity-60"
          placeholderText="Campus Main Building"
        />
      </div>

      {/* İçerik Alanı */}
      <Container className="relative z-20 flex-grow flex items-center pt-32 pb-20">
        <div className="max-w-4xl">
          <motion.div 
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="inline-flex items-center space-x-3 bg-secondary-500/10 backdrop-blur-sm border border-secondary-500/30 rounded-full px-4 py-1.5 mb-8"
          >
            <span className="flex h-2 w-2 rounded-full bg-secondary-500 animate-pulse"></span>
            <span className="text-secondary-400 text-xs font-bold tracking-[0.2em] uppercase">
              Admissions Open 2026
            </span>
          </motion.div>

          <motion.h1 
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white leading-[1.05] mb-8 drop-shadow-lg"
          >
            Knowledge for a <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-300 via-secondary-500 to-secondary-300">
              Borderless World
            </span>
          </motion.h1>

          <motion.p 
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-lg md:text-2xl text-primary-100 font-light leading-relaxed max-w-2xl mb-12 border-l-2 border-secondary-500 pl-6"
          >
            Join a global community of innovators. With 478+ accredited programmes across 25 countries, NorthWest is your gateway to excellence.
          </motion.p>

          <motion.div 
            custom={3}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="flex flex-wrap gap-4"
          >
            <Button size="lg" className="bg-secondary-500 text-primary-950 hover:bg-secondary-400 border-none font-bold px-8 shadow-lg shadow-secondary-500/20">
              Find Your Programme
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white/30 hover:bg-white/10 backdrop-blur-sm px-8">
              Virtual Campus Tour
            </Button>
          </motion.div>
        </div>
      </Container>

      {/* İstatistik Şeridi - Artık içeriğin altında sabit duracak ve diğer bloklar buna değmeyecek */}
      <div className="relative z-30 border-t border-white/10 bg-primary-950/80 backdrop-blur-md">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 text-white divide-x divide-white/5">
            <StatItem number="478+" label="Programmes" icon={BookOpen} />
            <StatItem number="9,458" label="Graduates" icon={Users} />
            <StatItem number="25" label="Countries" icon={Globe} />
            <StatItem number="ISO" label="Certified" icon={Award} />
          </div>
        </Container>
      </div>
    </div>
  );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const StatItem = ({ number, label, icon: Icon }: { number: string, label: string, icon: any }) => {
  const numericValue = parseInt(number.replace(/[^0-9]/g, ''));
  const suffix = number.replace(/[0-9]/g, '');

  return (
    <div className="flex flex-col items-center md:items-start px-4 group">
      <div className="flex items-center mb-2 space-x-3">
        <Icon className="w-6 h-6 text-secondary-500 opacity-80 group-hover:opacity-100 transition-opacity" />
        <span className="text-3xl font-bold font-serif tracking-tight text-white">
          {!isNaN(numericValue) ? <AnimatedCounter value={numericValue} suffix={suffix} /> : number}
        </span>
      </div>
      <span className="text-[10px] font-bold uppercase tracking-widest text-primary-300 group-hover:text-secondary-400 transition-colors">
        {label}
      </span>
    </div>
  );
};