import { Link } from 'react-router-dom';
import { Container } from '../../components/common/Container';
import { PageHeader } from '../../components/common/PageHeader';
import { SmartImage } from '../../components/common/SmartImage';
import { Library, Wifi, Languages, Microscope, Monitor, BookOpen, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

import libraryImg from '../../assets/images/campus-building.jpg';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const resources = [
  {
    title: 'Libraries & IT',
    icon: Library,
    color: 'secondary',
    desc: 'Outstanding range of resources including well-stocked libraries and IT services, with Wi-Fi available across campus.',
  },
  {
    title: 'Laboratories',
    icon: Microscope,
    color: 'primary',
    desc: 'Access to seminar rooms and subject-specific facilities such as laboratories with state-of-the-art equipment.',
  },
  {
    title: 'Museums & Collections',
    icon: BookOpen,
    color: 'amber',
    desc: 'Benefit from access to award-winning museums, where you can utilise historical collections to support your studies and research.',
  },
];

export const StudySupport = () => {
  const bgMap: Record<string, string> = { secondary: 'bg-secondary-50', primary: 'bg-primary-50', amber: 'bg-amber-50' };
  const iconMap: Record<string, string> = { secondary: 'text-secondary-600', primary: 'text-primary-900', amber: 'text-amber-600' };
  const borderMap: Record<string, string> = { secondary: 'border-t-secondary-500', primary: 'border-t-primary-600', amber: 'border-t-amber-500' };

  return (
    <div className="bg-white min-h-screen font-sans">
      <PageHeader
        title="Support Your Study"
        subtitle="Academic Resources"
        description="When you join University of NorthWest you will find all the facilities you need to complement, enhance and support your studies."
      />

      {/* Facilities Intro */}
      <section className="section-padding bg-white">
        <Container>
          <motion.div
            initial="hidden" whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeInUp}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <SmartImage
              src={libraryImg}
              alt="Library and Study"
              className="rounded-2xl shadow-elevated w-full"
              aspectRatio="landscape"
              placeholderText="Library & Study Areas"
            />
            <div className="space-y-5">
              <h2 className="text-3xl font-display font-bold text-primary-900">World-Class Facilities</h2>
              <div className="h-1 w-16 bg-secondary-500 rounded-full" />
              <p className="text-neutral-600 leading-relaxed">
                We have a continual programme of investment in facilities to ensure that you have access to the best learning environment.
                From dedicated study spaces to high-tech labs, we provide the infrastructure for your success.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1.5 bg-secondary-50 text-secondary-700 rounded-full text-sm font-medium flex items-center gap-2">
                  <Wifi className="w-4 h-4" /> Campus-wide Wi-Fi
                </span>
                <span className="px-3 py-1.5 bg-secondary-50 text-secondary-700 rounded-full text-sm font-medium flex items-center gap-2">
                  <Monitor className="w-4 h-4" /> IT Services
                </span>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Resources Grid */}
      <section className="section-padding bg-neutral-50">
        <Container>
          <motion.div
            initial="hidden" whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-3 gap-6"
          >
            {resources.map((res, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className={`bg-white p-7 rounded-xl border border-neutral-200 border-t-4 ${borderMap[res.color]} hover:shadow-card transition-all duration-300`}
              >
                <div className={`w-12 h-12 ${bgMap[res.color]} rounded-xl flex items-center justify-center mb-5`}>
                  <res.icon className={`w-6 h-6 ${iconMap[res.color]}`} />
                </div>
                <h3 className="text-lg font-bold text-primary-900 mb-3">{res.title}</h3>
                <p className="text-sm text-neutral-600 leading-relaxed">{res.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Language Centre */}
      <section className="py-16 md:py-20 bg-primary-950 relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-15" />
        <Container className="relative z-10">
          <motion.div
            initial="hidden" whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="flex flex-col md:flex-row items-center justify-between gap-8"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Languages className="w-8 h-8 text-secondary-500" />
                <h3 className="text-2xl font-display font-bold text-white">Language Centre</h3>
              </div>
              <p className="text-neutral-400 text-sm leading-relaxed max-w-xl">
                Looking to learn another language? Whether to prepare for study abroad, enhance employment prospects, or just for fun, we can help.
                We offer courses from <strong className="text-white">Arabic</strong> and <strong className="text-white">Chinese</strong> to <strong className="text-white">Spanish</strong>, either credit-bearing or extra-curricular.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-secondary-500 hover:bg-secondary-400 text-primary-950 font-bold text-sm rounded-lg transition-all duration-200 shadow-lg shadow-secondary-500/20 flex-shrink-0"
            >
              View Language Courses <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-900">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-2">Need Additional Support?</h2>
              <p className="text-neutral-300">Explore our study skills and disability support services.</p>
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
