import { Link } from 'react-router-dom';
import { Container } from '../../components/common/Container';
import { PageHeader } from '../../components/common/PageHeader';
import { SmartImage } from '../../components/common/SmartImage';
import { AlertTriangle, Mail, Laptop, CreditCard, ShieldAlert, ArrowRight } from 'lucide-react';
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

const steps = [
  {
    icon: Mail,
    title: '1. Activate Email',
    description: 'Your student email is the main way for UNW to communicate with you. We will send alerts about your bill and crucial transition info here.',
    color: 'secondary',
  },
  {
    icon: Laptop,
    title: '2. Activate Portal',
    description: 'Access your secure "E-vision" records. Register for courses, view financial aid, access BlackBoard, and manage your student profile.',
    color: 'primary',
  },
  {
    icon: CreditCard,
    title: '3. Pay Your Bill',
    description: 'Your tuition due date is based on your registration date. You will receive an email alert when your bill is ready for review and payment.',
    color: 'amber',
  },
];

export const NewStudents = () => {
  return (
    <div className="bg-white min-h-screen font-sans">
      <PageHeader
        title="Information for New Students"
        subtitle="Welcome to UNW"
        description="Essential steps to complete your enrollment and start your journey at University of NorthWest."
      />

      {/* Before You Register */}
      <section className="section-padding bg-white">
        <Container>
          <motion.div
            initial="hidden" whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeInUp}
            className="bg-white p-7 md:p-10 rounded-xl border border-neutral-200 border-t-4 border-t-secondary-500"
          >
            <div className="flex items-start gap-5">
              <div className="hidden md:flex w-14 h-14 rounded-2xl bg-secondary-50 items-center justify-center flex-shrink-0">
                <ShieldAlert className="w-7 h-7 text-secondary-600" />
              </div>
              <div>
                <h2 className="text-2xl font-display font-bold text-primary-900 mb-4">Before You Register</h2>
                <p className="text-neutral-600 mb-4 leading-relaxed">
                  New York State Public Health Law mandates strict immunization requirements for all incoming students.
                </p>
                <div className="p-4 bg-amber-50 rounded-lg border border-amber-100 flex items-start gap-2 text-sm text-amber-800">
                  <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Mandatory Requirement:</strong> All students born after December 31, 1956, must be immunized against measles, mumps, and rubella (MMR) <u>before</u> registering for classes.
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* After You Register */}
      <section className="section-padding bg-neutral-50">
        <Container>
          <motion.div
            initial="hidden" whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-10"
          >
            <span className="text-secondary-600 font-bold tracking-[0.2em] uppercase text-xs">Getting Started</span>
            <h2 className="text-3xl font-display font-bold text-primary-900 mt-3 mb-4">After You Register</h2>
            <div className="h-1 w-16 bg-secondary-500 mx-auto rounded-full" />
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-3 gap-6"
          >
            {steps.map((step, idx) => {
              const bgMap: Record<string, string> = { secondary: 'bg-secondary-50', primary: 'bg-primary-50', amber: 'bg-amber-50' };
              const iconMap: Record<string, string> = { secondary: 'text-secondary-600', primary: 'text-primary-900', amber: 'text-amber-600' };
              return (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  className="bg-white p-7 rounded-xl border border-neutral-200 hover:shadow-card transition-all duration-300"
                >
                  <div className={`w-12 h-12 ${bgMap[step.color]} rounded-xl flex items-center justify-center mb-5`}>
                    <step.icon className={`w-6 h-6 ${iconMap[step.color]}`} />
                  </div>
                  <h3 className="text-lg font-bold text-primary-900 mb-3">{step.title}</h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">{step.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </Container>
      </section>

      {/* Welcome Banner */}
      <section className="relative h-64 overflow-hidden">
        <SmartImage
          src={campusImg}
          alt="University Campus"
          className="h-full w-full absolute inset-0"
          placeholderText="Welcome to Campus"
          aspectRatio="wide"
        />
        <div className="absolute inset-0 bg-primary-900/60 flex items-center justify-center">
          <h3 className="text-3xl font-display font-bold text-white">Welcome to the Family!</h3>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-900">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-2">Need More Information?</h2>
              <p className="text-neutral-300">Our admissions team is here to help you every step of the way.</p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-secondary-500 hover:bg-secondary-400 text-primary-950 font-bold text-sm rounded-lg transition-all duration-200 shadow-lg shadow-secondary-500/20 flex-shrink-0"
            >
              Contact Us <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
};
