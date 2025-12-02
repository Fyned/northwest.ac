import { useState } from 'react';
import { Container } from '../components/common/Container';
import { Section, SectionTitle } from '../components/common/Section';
import { Card } from '../components/common/Card';
import { programmes } from '../data/programmes';
import type { DegreeLevel } from '../types';
import { Search, BookOpen, Clock, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const Academics = () => {
  const [activeTab, setActiveTab] = useState<DegreeLevel | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProgrammes = programmes.filter(prog => {
    const matchesTab = activeTab === 'All' || prog.level === activeTab;
    const matchesSearch = prog.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <div className="bg-neutral-50 min-h-screen">
      {/* Üst Başlık Bölümü */}
      <Section bg="pattern" className="pt-32 pb-20">
        <SectionTitle>Academic Programmes</SectionTitle>
        <p className="text-center text-primary-100 max-w-2xl mx-auto text-lg">
          Discover a world of opportunity with our diverse range of accredited degrees.
          Choose the path that suits your ambitions.
        </p>
      </Section>

      {/* İçerik Bölümü - Negatif margin kaldırıldı, ferah boşluk eklendi */}
      <Container className="py-12 relative z-10">
        
        {/* Filtreler ve Arama */}
        <div className="bg-white p-6 rounded-xl shadow-card flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
          <div className="flex flex-wrap justify-center gap-2">
            {(['All', 'Bachelor', 'Master', 'Doctorate'] as const).map((level) => (
              <button
                key={level}
                onClick={() => setActiveTab(level)}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                  activeTab === level 
                    ? 'bg-primary-900 text-white shadow-md' 
                    : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                }`}
              >
                {level === 'All' ? 'All' : level}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 w-5 h-5" />
            <input 
              type="text" 
              placeholder="Search programmes..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-primary-900/20 focus:border-primary-900 transition-colors"
            />
          </div>
        </div>

        {/* Program Listesi */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {filteredProgrammes.map((prog, index) => (
            <motion.div 
              key={prog.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <Card
                title={prog.title}
                subtitle={prog.level}
                badges={[prog.level]}
                footer={
                  <div className="flex items-center justify-between text-primary-600 font-medium group-hover:text-primary-900">
                    <span className="flex items-center text-sm"><Clock className="w-4 h-4 mr-1"/> {prog.duration}</span>
                    <span className="flex items-center text-sm">Details <ArrowRight className="w-4 h-4 ml-1"/></span>
                  </div>
                }
              >
                <p>{prog.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        {filteredProgrammes.length === 0 && (
          <div className="text-center py-20">
            <BookOpen className="w-16 h-16 mx-auto mb-4 text-neutral-300" />
            <p className="text-neutral-500 text-lg">No programmes found matching your criteria.</p>
          </div>
        )}
      </Container>
    </div>
  );
};