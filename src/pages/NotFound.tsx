import { Link } from 'react-router-dom';
import { Container } from '../components/common/Container';
import { Home, Search, BookOpen, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp } from '../utils/animations';
const quickLinks = [
  { label: 'Home Page', href: '/', icon: Home },
  { label: 'Programmes', href: '/academics', icon: BookOpen },
  { label: 'Contact Us', href: '/contact', icon: Search },
];

export const NotFound = () => {
  return (
    <div className="bg-white min-h-[85vh] flex items-center justify-center font-sans relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 dot-pattern opacity-5" />

      <Container className="relative z-10 py-20">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="text-center max-w-2xl mx-auto"
        >
          {/* 404 Number */}
          <div className="relative inline-block mb-8">
            <h1 className="text-[10rem] md:text-[12rem] font-black text-primary-900/5 leading-none select-none">404</h1>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 bg-secondary-50 rounded-2xl flex items-center justify-center">
                <Search className="w-12 h-12 text-secondary-500" />
              </div>
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-900 mb-4">Page Not Found</h2>
          <p className="text-neutral-600 max-w-md mx-auto mb-10 leading-relaxed">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary-900 hover:bg-primary-800 text-white font-bold text-sm rounded-lg transition-colors"
            >
              <Home className="w-4 h-4" /> Return to Campus
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-secondary-500 hover:bg-secondary-400 text-primary-950 font-bold text-sm rounded-lg transition-colors"
            >
              Contact Us <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Helpful Links */}
          <div className="border-t border-neutral-200 pt-8 mt-8">
            <p className="text-sm text-neutral-500 mb-4">Or try one of these pages:</p>
            <div className="flex flex-wrap justify-center gap-6">
              {quickLinks.map((link, i) => (
                <Link
                  key={i}
                  to={link.href}
                  className="text-secondary-600 font-bold text-sm flex items-center gap-1 hover:underline"
                >
                  <link.icon className="w-4 h-4" /> {link.label}
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      </Container>
    </div>
  );
};
