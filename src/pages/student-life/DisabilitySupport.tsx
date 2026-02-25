import { Link } from 'react-router-dom';
import { Container } from '../../components/common/Container';
import { PageHeader } from '../../components/common/PageHeader';
import { SmartImage } from '../../components/common/SmartImage';
import { Accessibility, CheckCircle, Clock, Heart, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

import supportImg from '../../assets/images/student-life.jpg';
import { fadeInUp, stagger } from '../../utils/animations';

const helpItems = [
  'Exam and assessment adjustments',
  'Timetabling adjustments',
  'Access to specialist facilities and equipment',
  'Study needs assessments at the UNW Access Centre',
];

export const DisabilitySupport = () => {
  return (
    <div className="bg-white min-h-screen font-sans">
      <PageHeader
        title="Disability Support"
        subtitle="Inclusive Learning"
        description="We are committed to providing a supportive and accessible environment for all students."
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
              <div className="flex items-center gap-3">
                <Accessibility className="w-7 h-7 text-secondary-600" />
                <h2 className="text-3xl font-display font-bold text-primary-900">Study Support Service</h2>
              </div>
              <div className="h-1 w-16 bg-secondary-500 rounded-full" />
              <p className="text-neutral-600 leading-relaxed">
                Our Study Support Service offers information, advice, and specialist support to students with disabilities,
                including mental health difficulties, ongoing medical conditions, and specific learning difficulties such as dyslexia.
              </p>
              <div className="bg-secondary-50 p-4 rounded-lg border border-secondary-100 flex items-start gap-3">
                <Clock className="w-5 h-5 text-secondary-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-primary-900 text-sm mb-1">Drop-in Sessions</h4>
                  <p className="text-sm text-neutral-700">
                    We hold regular drop-in sessions where you can discuss anything in confidence.
                    Sessions run daily (12-1pm) at main campuses, or contact us anytime.
                  </p>
                </div>
              </div>
            </div>
            <SmartImage
              src={supportImg}
              alt="Student Support"
              className="rounded-2xl shadow-elevated w-full"
              aspectRatio="wide"
              placeholderText="Inclusive Campus"
            />
          </motion.div>
        </Container>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-neutral-50">
        <Container>
          <motion.div
            initial="hidden" whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid lg:grid-cols-2 gap-6"
          >
            {/* How We Help */}
            <motion.div variants={fadeInUp} className="bg-white p-7 rounded-xl border border-neutral-200 border-t-4 border-t-secondary-500">
              <h3 className="text-lg font-bold text-primary-900 mb-5">How We Can Help</h3>
              <ul className="space-y-3 text-sm text-neutral-600">
                {helpItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary-500 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* DSA Info */}
            <motion.div variants={fadeInUp} className="bg-primary-50 p-7 rounded-xl border border-primary-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
                  <Heart className="w-5 h-5 text-primary-900" />
                </div>
                <h3 className="text-lg font-bold text-primary-900">Disabled Students&apos; Allowance</h3>
              </div>
              <p className="text-sm text-neutral-700 leading-relaxed mb-5">
                You might be eligible for the Disabled Students&apos; Allowance (DSA), which can cover the cost of specialist equipment and support to help you complete your course.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary-900 hover:bg-primary-800 text-white font-bold text-sm rounded-lg transition-colors"
              >
                Contact Us for Assessment <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-900">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-2">Looking for Study Skills Support?</h2>
              <p className="text-neutral-300">Enhance your academic success with our Study Skills Plus programme.</p>
            </div>
            <Link
              to="/student-life/study-skills"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-secondary-500 hover:bg-secondary-400 text-primary-950 font-bold text-sm rounded-lg transition-all duration-200 shadow-lg shadow-secondary-500/20 flex-shrink-0"
            >
              Study Skills Plus <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
};
