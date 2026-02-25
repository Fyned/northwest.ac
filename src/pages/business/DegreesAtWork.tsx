import { Link } from 'react-router-dom';
import { Container } from '../../components/common/Container';
import { PageHeader } from '../../components/common/PageHeader';
import { SmartImage } from '../../components/common/SmartImage';
import { Ear, PenTool, BookOpen, Quote, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

import corporateImg from '../../assets/images/corporate-meeting.jpg';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const processSteps = [
  {
    title: 'Listen',
    icon: Ear,
    color: 'secondary',
    desc: 'We take a demand-led and practical approach to staff training. We listen to your requirements and work with you to create business-focused courses using the workplace as a learning environment.',
  },
  {
    title: 'Create',
    icon: PenTool,
    color: 'primary',
    desc: 'From short courses to postgraduate degrees, we offer an extensive range of options. We can align training with existing qualifications or start with a blank canvas to meet your unique requirements.',
  },
  {
    title: 'Learn',
    icon: BookOpen,
    color: 'amber',
    desc: 'Areas include Management, Leadership, Sales, Operations, Project Management, and more. We design work-based learning courses that specifically meet the needs of your organisation.',
  },
];

const testimonials = [
  {
    author: 'Arkin Salih',
    role: 'Learning & Development Manager, Harrods',
    text: 'The key thing I would credit University of Northwest with is their openness and their willingness to be innovative and think of new ideas.',
  },
  {
    author: 'Colin Wilson',
    role: 'Training & Development Manager, Peterborough City Council',
    text: 'Our staff are now much better equipped to deal with the challenges and opportunities of working in the public sector thanks to these courses.',
  },
  {
    author: 'RAF Flt Lieutenant Ric Stubley',
    role: 'HQ 22 (Training) Group',
    text: 'The opportunities now available to RAF Medic personnel provide an excellent path for them to achieve high-value Higher Education qualifications.',
  },
  {
    author: 'Sarah Packman',
    role: 'Group Learning & Development Manager, Willmott Dixon',
    text: 'University of Northwest prevailed by providing the right blend of reputation, professionalism and business awareness that Willmott Dixon needed.',
  },
];

export const DegreesAtWork = () => {
  const bgMap: Record<string, string> = { secondary: 'bg-secondary-50', primary: 'bg-primary-50', amber: 'bg-amber-50' };
  const iconMap: Record<string, string> = { secondary: 'text-secondary-600', primary: 'text-primary-900', amber: 'text-amber-600' };
  const borderMap: Record<string, string> = { secondary: 'border-t-secondary-500', primary: 'border-t-primary-600', amber: 'border-t-amber-500' };

  return (
    <div className="bg-white min-h-screen font-sans">
      <PageHeader
        title="Degrees at Work"
        subtitle="Work-Based Learning"
        description="Award winning work-based learning. We take a demand-led and practical approach to staff training and development."
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
              <h2 className="text-3xl font-display font-bold text-primary-900">Realise Ambitions Together</h2>
              <div className="h-1 w-16 bg-secondary-500 rounded-full" />
              <p className="text-neutral-600 leading-relaxed">
                Through Degrees at Work, we take a demand-led and practical approach to staff training and development.
                Partner with University of Northwest and you&apos;ll find the most comprehensive range of courses available.
              </p>
            </div>
            <SmartImage
              src={corporateImg}
              alt="Corporate Training"
              className="rounded-2xl shadow-elevated w-full"
              aspectRatio="landscape"
              placeholderText="Training Session"
            />
          </motion.div>
        </Container>
      </section>

      {/* Process Steps */}
      <section className="section-padding bg-neutral-50">
        <Container>
          <motion.div
            initial="hidden" whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-3 gap-6"
          >
            {processSteps.map((step, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className={`bg-white p-7 rounded-xl border border-neutral-200 border-t-4 ${borderMap[step.color]} hover:shadow-card transition-all duration-300`}
              >
                <div className={`w-12 h-12 ${bgMap[step.color]} rounded-xl flex items-center justify-center mb-5`}>
                  <step.icon className={`w-6 h-6 ${iconMap[step.color]}`} />
                </div>
                <h3 className="text-lg font-bold text-primary-900 mb-3">{step.title}</h3>
                <p className="text-sm text-neutral-600 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-white">
        <Container>
          <motion.div
            initial="hidden" whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-10"
          >
            <p className="text-secondary-600 font-bold text-sm uppercase tracking-wider mb-2">Achieve Results</p>
            <h2 className="text-3xl font-display font-bold text-primary-900">Success Stories</h2>
          </motion.div>
          <motion.div
            initial="hidden" whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-2 gap-6"
          >
            {testimonials.map((t, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="bg-white p-7 rounded-xl border border-neutral-200 relative hover:shadow-card transition-all duration-300"
              >
                <Quote className="w-8 h-8 text-secondary-200 absolute top-6 right-6" />
                <p className="text-neutral-700 italic mb-5 leading-relaxed relative z-10">&ldquo;{t.text}&rdquo;</p>
                <div>
                  <p className="font-bold text-primary-900">{t.author}</p>
                  <p className="text-xs text-secondary-600 font-bold uppercase tracking-wider">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-primary-950 relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-15" />
        <Container className="relative z-10">
          <motion.div
            initial="hidden" whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">How can Degrees at Work benefit you?</h2>
            <p className="text-neutral-400 mb-8">
              We&apos;ve talked enough about us. Get in touch and talk to us today to find out how we can help your organisation.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-secondary-500 hover:bg-secondary-400 text-primary-950 font-bold text-sm rounded-lg transition-all duration-200 shadow-lg shadow-secondary-500/20"
            >
              Contact Us Today <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </Container>
      </section>
    </div>
  );
};
