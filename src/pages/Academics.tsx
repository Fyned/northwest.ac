import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../components/common/Container';
import { PageHeader } from '../components/common/PageHeader';
import { programmes } from '../data/programmes';
import type { DegreeLevel } from '../types';
import { Search, BookOpen, Clock, ArrowRight, GraduationCap, Award, Users } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const levelColors: Record<string, { bg: string; text: string; border: string; dot: string }> = {
  Bachelor: { bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-200', dot: 'bg-blue-500' },
  Master: { bg: 'bg-purple-50', text: 'text-purple-700', border: 'border-purple-200', dot: 'bg-purple-500' },
  Doctorate: { bg: 'bg-amber-50', text: 'text-amber-700', border: 'border-amber-200', dot: 'bg-amber-500' },
};

const levelIcons: Record<string, typeof BookOpen> = {
  Bachelor: BookOpen,
  Master: GraduationCap,
  Doctorate: Award,
};

export const Academics = () => {
  const [activeTab, setActiveTab] = useState<DegreeLevel | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProgrammes = programmes.filter(prog => {
    const matchesTab = activeTab === 'All' || prog.level === activeTab;
    const matchesSearch = prog.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  const counts = {
    All: programmes.length,
    Bachelor: programmes.filter(p => p.level === 'Bachelor').length,
    Master: programmes.filter(p => p.level === 'Master').length,
    Doctorate: programmes.filter(p => p.level === 'Doctorate').length,
  };

  return (
    <div className="bg-white min-h-screen font-sans">
      <PageHeader
        title="Academic Programmes"
        subtitle="Our Courses"
        description="Discover a world of opportunity with our diverse range of accredited degrees across multiple disciplines."
      />

      {/* Stats Bar */}
      <div className="bg-primary-900 border-b border-primary-800">
        <Container>
          <div className="grid grid-cols-3 py-5">
            <div className="text-center">
              <span className="block text-2xl font-bold font-display text-white">{counts.Bachelor}</span>
              <span className="block text-[10px] font-semibold uppercase tracking-widest text-neutral-400 mt-1">Bachelor</span>
            </div>
            <div className="text-center border-x border-white/10">
              <span className="block text-2xl font-bold font-display text-white">{counts.Master}</span>
              <span className="block text-[10px] font-semibold uppercase tracking-widest text-neutral-400 mt-1">Master</span>
            </div>
            <div className="text-center">
              <span className="block text-2xl font-bold font-display text-white">{counts.Doctorate}</span>
              <span className="block text-[10px] font-semibold uppercase tracking-widest text-neutral-400 mt-1">Doctorate</span>
            </div>
          </div>
        </Container>
      </div>

      {/* Filters & Content */}
      <section className="section-padding bg-neutral-50">
        <Container>
          {/* Filter Bar */}
          <motion.div
            initial="hidden" whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="bg-white p-5 rounded-xl shadow-card border border-neutral-100 flex flex-col md:flex-row justify-between items-center gap-5 mb-10"
          >
            <div className="flex flex-wrap justify-center gap-2">
              {(['All', 'Bachelor', 'Master', 'Doctorate'] as const).map((level) => (
                <button
                  key={level}
                  onClick={() => setActiveTab(level)}
                  className={`px-5 py-2.5 rounded-lg text-sm font-bold transition-all duration-200 ${
                    activeTab === level
                      ? 'bg-primary-900 text-white shadow-md'
                      : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                  }`}
                >
                  {level} ({counts[level]})
                </button>
              ))}
            </div>

            <div className="relative w-full md:w-72">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search programmes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-neutral-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary-900/20 focus:border-primary-900 transition-colors"
              />
            </div>
          </motion.div>

          {/* Programme Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab + searchQuery}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredProgrammes.map((prog, index) => {
                const colors = levelColors[prog.level] || levelColors.Bachelor;
                const LevelIcon = levelIcons[prog.level] || BookOpen;
                return (
                  <motion.div
                    key={prog.id}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.04, duration: 0.4 }}
                  >
                    <Link
                      to={`/study/courses/${prog.level.toLowerCase()}`}
                      className="group block bg-white border border-neutral-200 rounded-xl p-6 hover:shadow-card-hover hover:border-neutral-300 transition-all duration-300 h-full"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className={`w-11 h-11 rounded-xl ${colors.bg} flex items-center justify-center`}>
                          <LevelIcon className={`w-5 h-5 ${colors.text}`} />
                        </div>
                        <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${colors.bg} ${colors.text} border ${colors.border}`}>
                          {prog.level}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-primary-900 mb-2 group-hover:text-secondary-600 transition-colors leading-snug">
                        {prog.title}
                      </h3>
                      <p className="text-sm text-neutral-500 leading-relaxed mb-4">
                        {prog.description}
                      </p>
                      <div className="flex items-center justify-between pt-4 border-t border-neutral-100">
                        <span className="flex items-center gap-1.5 text-xs text-neutral-400 font-medium">
                          <Clock className="w-3.5 h-3.5" />
                          {prog.duration}
                        </span>
                        <span className="flex items-center gap-1 text-xs font-bold text-primary-900 group-hover:text-secondary-600 transition-colors">
                          Details
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>

          {/* Empty State */}
          {filteredProgrammes.length === 0 && (
            <div className="text-center py-20">
              <div className="w-16 h-16 rounded-2xl bg-neutral-100 flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-neutral-300" />
              </div>
              <p className="text-neutral-500 text-lg font-medium mb-2">No programmes found</p>
              <p className="text-sm text-neutral-400">Try adjusting your search or filter criteria.</p>
            </div>
          )}
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-900">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-2">Need Guidance?</h2>
              <p className="text-neutral-300">Our admissions team is here to help you choose the right programme.</p>
            </div>
            <div className="flex gap-3 flex-shrink-0">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold text-sm rounded-lg border border-white/20 transition-all duration-200"
              >
                <Users className="w-4 h-4" />
                Talk to Advisor
              </Link>
              <Link
                to="/apply/undergraduate"
                className="inline-flex items-center gap-2 px-6 py-3 bg-secondary-500 hover:bg-secondary-400 text-primary-950 font-bold text-sm rounded-lg transition-all duration-200 shadow-lg shadow-secondary-500/20"
              >
                Apply Now
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};
