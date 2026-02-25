import { Link } from 'react-router-dom';
import { Container } from '../../components/common/Container';
import { PageHeader } from '../../components/common/PageHeader';
import { SmartImage } from '../../components/common/SmartImage';
import { CheckCircle, BookOpen, Briefcase, GraduationCap, ArrowRight, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

import campusImg from '../../assets/images/campus-building.jpg';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const creditTypes = [
  {
    icon: BookOpen,
    title: 'College Credits',
    color: 'secondary',
    description:
      'If you have ever earned community college or University credits, the school you attended may have an articulation agreement with University of Northwest. Additionally, completed courses at other accredited universities can often be transferred.',
  },
  {
    icon: Briefcase,
    title: 'Non-Traditional Credits',
    color: 'primary',
    description:
      'The world is your campus. From military experience to corporate training, you can earn transfer credits from your personal learning. Through national testing programs and Prior Learning Assessment, you can gain credit by mastering learning outcomes.',
  },
  {
    icon: GraduationCap,
    title: 'Graduate Transfer',
    color: 'amber',
    description:
      'Transfer up to nine approved graduate level credits toward your Master\'s degree. Your previous studies and experiences have earned you more than knowledge; enroll at UNW and be rewarded.',
  },
];

export const TransferCredit = () => {
  return (
    <div className="bg-white min-h-screen font-sans">
      <PageHeader
        title="Transfer Credit"
        subtitle="Maximize Your Experience"
        description="Don't leave your past behind. Take pride in your previously earned college credits and life experiences."
      />

      {/* Hero Highlight */}
      <section className="section-padding bg-white">
        <Container>
          <motion.div
            initial="hidden" whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="w-14 h-14 rounded-2xl bg-secondary-50 flex items-center justify-center mx-auto mb-6">
              <Zap className="w-7 h-7 text-secondary-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-900 mb-3">
              Transfer Up to 90 Approved Credits
            </h2>
            <p className="text-secondary-600 font-bold tracking-widest uppercase text-xs mb-5">
              Toward Your Bachelor's Degree
            </p>
            <div className="h-1 w-16 bg-secondary-500 mx-auto rounded-full mb-6" />
            <p className="text-neutral-600 leading-relaxed text-lg">
              You may already have University credits, just waiting to be transferred.
              Transfer to University of Northwest and get a head start on earning your degree.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Credit Types */}
      <section className="section-padding bg-neutral-50">
        <Container>
          <motion.div
            initial="hidden" whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid lg:grid-cols-3 gap-6"
          >
            {creditTypes.map((item, idx) => {
              const bgMap: Record<string, string> = {
                secondary: 'bg-secondary-50',
                primary: 'bg-primary-50',
                amber: 'bg-amber-50',
              };
              const iconMap: Record<string, string> = {
                secondary: 'text-secondary-600',
                primary: 'text-primary-900',
                amber: 'text-amber-600',
              };
              const borderMap: Record<string, string> = {
                secondary: 'border-t-secondary-500',
                primary: 'border-t-primary-600',
                amber: 'border-t-amber-500',
              };
              return (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  className={`bg-white p-7 rounded-xl border border-neutral-200 border-t-4 ${borderMap[item.color]} hover:shadow-card transition-all duration-300`}
                >
                  <div className={`w-12 h-12 ${bgMap[item.color]} rounded-xl flex items-center justify-center mb-5`}>
                    <item.icon className={`w-6 h-6 ${iconMap[item.color]}`} />
                  </div>
                  <h3 className="text-lg font-bold text-primary-900 mb-3">{item.title}</h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">{item.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </Container>
      </section>

      {/* Policies & Image */}
      <section className="section-padding bg-white">
        <Container>
          <motion.div
            initial="hidden" whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeInUp}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <SmartImage
              src={campusImg}
              alt="University Campus"
              className="rounded-2xl shadow-elevated w-full"
              aspectRatio="landscape"
              placeholderText="Campus Life"
            />
            <div className="space-y-6">
              <h2 className="text-3xl font-display font-bold text-primary-900">Generous Transfer Policies</h2>
              <div className="h-1 w-16 bg-secondary-500 rounded-full" />
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-secondary-500 mt-0.5 flex-shrink-0" />
                  <p className="text-neutral-600 leading-relaxed">
                    We accept transfer credits from any institution accredited by a US Department of Education-recognized accrediting agency.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-secondary-500 mt-0.5 flex-shrink-0" />
                  <p className="text-neutral-600 leading-relaxed">
                    We accept more transfer credits than most colleges, valuing your hard work.
                  </p>
                </div>
              </div>
              <div className="bg-primary-50 p-6 rounded-xl border border-primary-100">
                <h4 className="font-bold text-primary-900 mb-2">Find Out How You Can Transfer Today!</h4>
                <p className="text-sm text-neutral-600 mb-4">
                  If you're ready to find a new University, University of Northwest is right in your neighborhood.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-secondary-500 hover:bg-secondary-400 text-primary-950 font-bold text-sm rounded-lg transition-all duration-200"
                >
                  Contact Us <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-900">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-2">Ready to Transfer?</h2>
              <p className="text-neutral-300">Start the transfer process and get credit for your hard work.</p>
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
