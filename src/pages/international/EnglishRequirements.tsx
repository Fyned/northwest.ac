import { Link } from 'react-router-dom';
import { Container } from '../../components/common/Container';
import { PageHeader } from '../../components/common/PageHeader';
import { SmartImage } from '../../components/common/SmartImage';
import { Globe, BookOpen, CheckCircle, AlertCircle, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

import studyImg from '../../assets/images/student-life.jpg';
import { fadeInUp, stagger } from '../../utils/animations';

export const EnglishRequirements = () => {
  return (
    <div className="bg-white min-h-screen font-sans">
      <PageHeader
        title="English Language Requirements"
        subtitle="International Admissions"
        description="English language level for entry to university in USA. Requirements for international applicants."
      />

      {/* Intro */}
      <section className="section-padding bg-white">
        <Container>
          <motion.div
            initial="hidden" whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeInUp}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div className="space-y-5">
              <h2 className="text-3xl font-display font-bold text-primary-900">English Language Admission Tests</h2>
              <div className="h-1 w-16 bg-secondary-500 rounded-full" />
              <p className="text-neutral-600 leading-relaxed">
                If you&apos;ve completed all your secondary school/high school in a country where English is not the language of instruction,
                you can demonstrate proficiency by taking one of these exams and earning the required scores.
              </p>
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-100 text-sm text-blue-800 flex items-start gap-2">
                <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                Proficiency must be achieved before admission. UNW does not offer ESL courses for undergraduates.
              </div>
            </div>
            <SmartImage
              src={studyImg}
              alt="Language Study"
              className="rounded-2xl shadow-elevated w-full"
              aspectRatio="wide"
              placeholderText="International Students"
            />
          </motion.div>
        </Container>
      </section>

      {/* Score Cards */}
      <section className="section-padding bg-neutral-50">
        <Container>
          <motion.div
            initial="hidden" whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-2 gap-6"
          >
            {/* TOEFL */}
            <motion.div variants={fadeInUp} className="bg-white p-7 rounded-xl border border-neutral-200 border-t-4 border-t-secondary-500">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-secondary-50 rounded-xl flex items-center justify-center">
                  <Globe className="w-6 h-6 text-secondary-600" />
                </div>
                <div>
                  <p className="font-bold text-3xl font-display text-primary-900">80+</p>
                  <p className="text-xs text-neutral-500 uppercase tracking-wider">Internet-based Test</p>
                </div>
              </div>
              <h3 className="text-lg font-bold text-primary-900 mb-1">TOEFL</h3>
              <p className="text-xs text-neutral-500 mb-4">Test of English as a Foreign Language</p>
              <ul className="space-y-3 text-sm text-neutral-600">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-secondary-500 flex-shrink-0" />
                  Accepted with an <strong>80 or better</strong> (Internet-based)
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-secondary-500 flex-shrink-0" />
                  Accepted with a <strong>550 or better</strong> (Paper-based)
                </li>
              </ul>
            </motion.div>

            {/* IELTS */}
            <motion.div variants={fadeInUp} className="bg-white p-7 rounded-xl border border-neutral-200 border-t-4 border-t-primary-600">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-primary-900" />
                </div>
                <div>
                  <p className="font-bold text-3xl font-display text-primary-900">7.0+</p>
                  <p className="text-xs text-neutral-500 uppercase tracking-wider">Band Score</p>
                </div>
              </div>
              <h3 className="text-lg font-bold text-primary-900 mb-1">IELTS</h3>
              <p className="text-xs text-neutral-500 mb-4">International English Language Testing System</p>
              <ul className="space-y-3 text-sm text-neutral-600">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-secondary-500 flex-shrink-0" />
                  Accepted with a <strong>7 or better</strong> band score
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-secondary-500 flex-shrink-0" />
                  Academic modules required
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-900">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-2">Ready to Apply?</h2>
              <p className="text-neutral-300">Learn more about the international application process.</p>
            </div>
            <Link
              to="/international/how-to-apply"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-secondary-500 hover:bg-secondary-400 text-primary-950 font-bold text-sm rounded-lg transition-all duration-200 shadow-lg shadow-secondary-500/20 flex-shrink-0"
            >
              How to Apply <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
};
