import { Link } from 'react-router-dom';
import { Container } from '../../components/common/Container';
import { PageHeader } from '../../components/common/PageHeader';
import { SmartImage } from '../../components/common/SmartImage';
import { CheckCircle, Globe, GraduationCap, FileText, AlertCircle, ArrowRight, DollarSign } from 'lucide-react';
import { motion } from 'framer-motion';

import admissionImg from '../../assets/images/student-life.jpg';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

export const HowToApply = () => {
  return (
    <div className="bg-white min-h-screen font-sans">
      <PageHeader
        title="How to Apply"
        subtitle="International Admissions"
        description="Step-by-step guide for international students joining University of NorthWest."
      />

      {/* Intro & Definition */}
      <section className="section-padding bg-white">
        <Container>
          <motion.div
            initial="hidden" whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeInUp}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div className="space-y-5">
              <h2 className="text-3xl font-display font-bold text-primary-900">Who is an International Student?</h2>
              <div className="h-1 w-16 bg-secondary-500 rounded-full" />
              <p className="text-neutral-600 leading-relaxed">
                An international student is anyone who brings an international perspective to campus. Every year UNW welcomes students from around the world. In fact, about fifty percent of our students come from abroad.
              </p>
              <div className="p-4 bg-secondary-50 border-l-4 border-secondary-500 rounded-r-lg text-sm text-primary-900">
                Please complete the application appropriate to your status as an incoming first-year or transfer student. Indicate your citizenship according to the passport with which you plan to enter the United States.
              </div>
            </div>
            <SmartImage
              src={admissionImg}
              alt="International Students"
              className="rounded-2xl shadow-elevated w-full"
              aspectRatio="landscape"
              placeholderText="Global Community"
            />
          </motion.div>
        </Container>
      </section>

      {/* Criteria & English Proficiency */}
      <section className="section-padding bg-neutral-50">
        <Container>
          <motion.div
            initial="hidden" whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid lg:grid-cols-2 gap-6"
          >
            {/* Admission Criteria */}
            <motion.div variants={fadeInUp} className="bg-white p-7 rounded-xl border border-neutral-200">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-primary-900" />
                </div>
                <h3 className="text-lg font-bold text-primary-900">Admission Criteria</h3>
              </div>
              <ul className="space-y-3 text-sm text-neutral-600 leading-relaxed">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-secondary-500 mt-0.5 flex-shrink-0" />
                  UNW first-year students will have completed 12 years of primary and secondary schooling.
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-secondary-500 mt-0.5 flex-shrink-0" />
                  You should plan to sit for national examinations (GCE A-levels, German Abitur, French Baccalaur&eacute;at) and submit predicted scores.
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-secondary-500 mt-0.5 flex-shrink-0" />
                  Students with 13 years of schooling and exceptional exam results may be eligible for advanced standing or transfer credit.
                </li>
              </ul>
            </motion.div>

            {/* English Proficiency */}
            <motion.div variants={fadeInUp} className="bg-white p-7 rounded-xl border border-neutral-200">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-secondary-50 flex items-center justify-center">
                  <Globe className="w-5 h-5 text-secondary-600" />
                </div>
                <h3 className="text-lg font-bold text-primary-900">Proficiency in English</h3>
              </div>
              <p className="text-sm text-neutral-600 mb-4">
                Since English is the language of instruction, you must demonstrate that you can read, write, and understand rapid American English.
              </p>
              <div className="bg-primary-50 p-4 rounded-lg border border-primary-100 mb-4">
                <h4 className="font-bold text-primary-900 text-sm mb-2">Minimum Score Requirements:</h4>
                <ul className="text-xs text-primary-800 space-y-1">
                  <li>TOEFL (Internet-based): <strong>100 or above</strong></li>
                  <li>TOEFL (Written): <strong>600 or above</strong></li>
                  <li>IELTS: <strong>8.0</strong></li>
                </ul>
              </div>
              <p className="text-xs text-neutral-500 italic">
                * If your SAT Critical Reading score is above 650, TOEFL/IELTS is not necessary.
              </p>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* Application Process & Financial Aid */}
      <section className="py-16 md:py-20 bg-primary-950 relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-15" />
        <Container className="relative z-10">
          <motion.div
            initial="hidden" whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid lg:grid-cols-3 gap-8"
          >
            <motion.div variants={fadeInUp} className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-5">
                <FileText className="w-6 h-6 text-secondary-500" />
                <h3 className="text-xl font-display font-bold text-white">The Application Process</h3>
              </div>
              <div className="space-y-4 text-neutral-300 text-sm leading-relaxed">
                <p>
                  All applicants to UNW complete the Common Application. Although geared toward the U.S. system, it can convey specifics of any nation&apos;s educational system.
                </p>
                <p>
                  Documents should be written in English or be accompanied by official translations along with original documents.
                </p>
                <p className="font-medium text-white">
                  Integrity Policy: UNW expects that all work presented for admission will be your own. Students violating this policy may have their admission revoked.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="lg:col-span-1">
              <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/10">
                <div className="flex items-center gap-3 mb-4">
                  <DollarSign className="w-6 h-6 text-secondary-500" />
                  <h3 className="text-lg font-bold text-white">Financial Aid</h3>
                </div>
                <p className="text-sm text-neutral-300 leading-relaxed mb-3">
                  Financial aid for foreign citizens is limited. If you wish to be considered, you must apply at the time of admission.
                </p>
                <p className="text-xs text-neutral-400">
                  Please refer to the financial aid deadlines and instructions for Prospective Students.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-900">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-2">Start Your International Application</h2>
              <p className="text-neutral-300">Join students from over 25 countries at University of NorthWest.</p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-secondary-500 hover:bg-secondary-400 text-primary-950 font-bold text-sm rounded-lg transition-all duration-200 shadow-lg shadow-secondary-500/20 flex-shrink-0"
            >
              Contact Admissions <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
};
