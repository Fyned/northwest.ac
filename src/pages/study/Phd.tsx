import { Link } from 'react-router-dom';
import { Container } from '../../components/common/Container';
import { PageHeader } from '../../components/common/PageHeader';
import { SmartImage } from '../../components/common/SmartImage';
import { Check, BookOpen, ArrowRight, Award, Microscope, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { programmes } from '../../data/programmes';

import researchImg from '../../assets/images/research-lab.jpg';

export const Phd = () => {
  const phdDegrees = programmes.filter(p => p.level === 'Doctorate');

  return (
    <div className="bg-white min-h-screen font-sans">
      <PageHeader
        title="Doctoral Degrees"
        subtitle="Research Excellence"
        description="Push the boundaries of knowledge with our world-class doctoral programmes and research facilities."
      />

      {/* Intro Section */}
      <section className="section-padding bg-white">
        <Container>
          <motion.div
            initial="hidden" whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeInUp}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div className="space-y-6">
              <h2 className="text-3xl font-display font-bold text-primary-900">Leadership &amp; Achievement</h2>
              <div className="h-1 w-16 bg-secondary-500 rounded-full" />
              <p className="text-neutral-600 leading-relaxed">
                Today, the University&apos;s outstanding doctoral degree programs combine academic rigor with
                hands-on training and research opportunities to prepare graduates for professional leadership
                and achievement in an increasingly transitional workplace.
              </p>
              <p className="text-neutral-600 leading-relaxed">
                As a doctoral candidate, you will join a community of scholars that enjoys access to the
                exceptional resources of a leading institution of higher learning. You will learn from, be
                mentored by and collaborate with a top-tier faculty.
              </p>
              <div className="grid sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 bg-amber-50 rounded-xl border border-amber-100 text-center">
                  <Award className="w-6 h-6 text-amber-600 mx-auto mb-2" />
                  <span className="block text-2xl font-bold font-display text-primary-900">{phdDegrees.length}</span>
                  <span className="text-xs text-neutral-500">Programmes</span>
                </div>
                <div className="p-4 bg-secondary-50 rounded-xl border border-secondary-100 text-center">
                  <Clock className="w-6 h-6 text-secondary-600 mx-auto mb-2" />
                  <span className="block text-2xl font-bold font-display text-primary-900">4</span>
                  <span className="text-xs text-neutral-500">Years Duration</span>
                </div>
                <div className="p-4 bg-primary-50 rounded-xl border border-primary-100 text-center">
                  <Microscope className="w-6 h-6 text-primary-900 mx-auto mb-2" />
                  <span className="block text-2xl font-bold font-display text-primary-900">1:1</span>
                  <span className="text-xs text-neutral-500">Mentorship</span>
                </div>
              </div>
            </div>
            <SmartImage
              src={researchImg}
              alt="Doctoral Research"
              className="rounded-2xl shadow-elevated w-full"
              aspectRatio="landscape"
              placeholderText="Research Lab"
            />
          </motion.div>
        </Container>
      </section>

      {/* PhD Programme List */}
      <section className="section-padding bg-neutral-50">
        <Container>
          <motion.div
            initial="hidden" whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="bg-white p-5 rounded-xl shadow-card border border-neutral-100 flex items-center gap-3 mb-10">
              <BookOpen className="w-6 h-6 text-secondary-600" />
              <h2 className="text-xl font-display font-bold text-primary-900">
                Available Doctoral Programs
                <span className="text-sm font-normal text-neutral-400 ml-2">({phdDegrees.length})</span>
              </h2>
            </div>

            <motion.div
              initial="hidden" whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="grid md:grid-cols-2 gap-4"
            >
              {phdDegrees.map((degree) => (
                <motion.div
                  key={degree.id}
                  variants={fadeInUp}
                  className="flex items-start gap-4 p-5 bg-white rounded-xl border border-neutral-200 hover:shadow-card hover:border-neutral-300 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center flex-shrink-0">
                    <Award className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-primary-900 group-hover:text-secondary-600 transition-colors mb-1">
                      {degree.title}
                    </h3>
                    <p className="text-sm text-neutral-500 mb-2">{degree.description}</p>
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1 text-xs text-neutral-400">
                        <Clock className="w-3 h-3" /> {degree.duration}
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200">
                        {degree.level}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-900">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-2">Begin Your Research Journey</h2>
              <p className="text-neutral-300">Apply for our doctoral programmes and contribute to groundbreaking research.</p>
            </div>
            <Link
              to="/apply/undergraduate"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-secondary-500 hover:bg-secondary-400 text-primary-950 font-bold text-sm rounded-lg transition-all duration-200 shadow-lg shadow-secondary-500/20 flex-shrink-0"
            >
              Apply Now <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
};
