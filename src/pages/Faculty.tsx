import { useState } from 'react';
import { Container } from '../components/common/Container';
import { PageHeader } from '../components/common/PageHeader';
import { facultyMembers } from '../data/faculty';
import { Mail, Linkedin, Search, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const departments = ['All', ...Array.from(new Set(facultyMembers.map(m => m.department)))];

const departmentColors: Record<string, string> = {
  'Computer Science': 'bg-blue-500',
  'Political Science': 'bg-rose-500',
  'Engineering': 'bg-emerald-500',
  'Mathematics': 'bg-violet-500',
  'Physics': 'bg-orange-500',
  'Humanities': 'bg-teal-500',
  'Biotechnology': 'bg-green-500',
  'Economics': 'bg-amber-500',
  'Information Systems': 'bg-cyan-500',
  'Philosophy': 'bg-indigo-500',
};

export const Faculty = () => {
  const [activeDept, setActiveDept] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredMembers = facultyMembers.filter(m => {
    const matchesDept = activeDept === 'All' || m.department === activeDept;
    const matchesSearch = m.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.department.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDept && matchesSearch;
  });

  return (
    <div className="bg-white min-h-screen font-sans">
      <PageHeader
        title="Our Faculty"
        subtitle="World-Class Educators"
        description="Our diverse and internationally acclaimed faculty brings a wealth of knowledge, research, and industry experience."
      />

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
              {departments.map((dept) => (
                <button
                  key={dept}
                  onClick={() => setActiveDept(dept)}
                  className={`px-4 py-2 rounded-lg text-xs font-bold transition-all duration-200 ${
                    activeDept === dept
                      ? 'bg-primary-900 text-white shadow-md'
                      : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                  }`}
                >
                  {dept}
                </button>
              ))}
            </div>

            <div className="relative w-full md:w-64">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search faculty..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-neutral-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary-900/20 focus:border-primary-900 transition-colors"
              />
            </div>
          </motion.div>

          {/* Faculty Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeDept + searchQuery}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {filteredMembers.map((member, index) => {
                const initials = member.name
                  .replace(/^(Dr\.|Prof\.\s*Dr\.|Prof\.)?\s*/i, '')
                  .split(' ')
                  .filter(Boolean)
                  .slice(0, 2)
                  .map(n => n[0])
                  .join('');
                const dotColor = departmentColors[member.department] || 'bg-neutral-400';

                return (
                  <motion.div
                    key={member.id}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.04, duration: 0.4 }}
                    className="group bg-white border border-neutral-200 rounded-xl overflow-hidden hover:shadow-card-hover hover:border-neutral-300 transition-all duration-300"
                  >
                    {/* Avatar Area */}
                    <div className="bg-gradient-to-br from-primary-50 to-primary-100 p-8 flex items-center justify-center">
                      <div className="w-20 h-20 rounded-full bg-white shadow-card flex items-center justify-center">
                        <span className="text-xl font-bold font-display text-primary-900">{initials}</span>
                      </div>
                    </div>

                    {/* Info */}
                    <div className="p-5">
                      <h3 className="text-base font-bold text-primary-900 mb-1">{member.name}</h3>
                      <p className="text-sm text-secondary-600 font-medium mb-3">{member.title}</p>
                      <div className="flex items-center gap-2 mb-4">
                        <span className={`w-2 h-2 rounded-full ${dotColor}`} />
                        <span className="text-xs text-neutral-500 font-medium">{member.department}</span>
                      </div>
                      <div className="flex items-center gap-2 pt-3 border-t border-neutral-100">
                        <button
                          className="w-8 h-8 rounded-lg bg-neutral-100 flex items-center justify-center text-neutral-400 hover:bg-primary-50 hover:text-primary-900 transition-colors"
                          aria-label={`Email ${member.name}`}
                        >
                          <Mail className="w-3.5 h-3.5" />
                        </button>
                        <button
                          className="w-8 h-8 rounded-lg bg-neutral-100 flex items-center justify-center text-neutral-400 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                          aria-label={`LinkedIn ${member.name}`}
                        >
                          <Linkedin className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>

          {/* Empty State */}
          {filteredMembers.length === 0 && (
            <div className="text-center py-20">
              <div className="w-16 h-16 rounded-2xl bg-neutral-100 flex items-center justify-center mx-auto mb-4">
                <User className="w-8 h-8 text-neutral-300" />
              </div>
              <p className="text-neutral-500 text-lg font-medium mb-2">No faculty members found</p>
              <p className="text-sm text-neutral-400">Try adjusting your search or department filter.</p>
            </div>
          )}
        </Container>
      </section>
    </div>
  );
};
