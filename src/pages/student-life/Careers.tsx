import { Link } from 'react-router-dom';
import { Container } from '../../components/common/Container';
import { PageHeader } from '../../components/common/PageHeader';
import { SmartImage } from '../../components/common/SmartImage';
import { Briefcase, UserPlus, TrendingUp, Mail, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

import careerImg from '../../assets/images/corporate-meeting.jpg';
import { fadeInUp, stagger } from '../../utils/animations';

const careerServices = [
  {
    title: 'Careers Advice',
    icon: UserPlus,
    color: 'secondary',
    desc: 'We offer one-to-one appointments with experienced careers advisers via phone, email or face to face.',
    cta: { label: 'Email Advisers', href: 'mailto:career@northwest.ac' },
  },
  {
    title: 'Build Your Career',
    icon: TrendingUp,
    color: 'primary',
    desc: 'Events, workshops, CV help, and interview preparation. Explore our portal for online resources and the Employability Programme.',
    cta: { label: 'View Workshops', href: '#' },
  },
  {
    title: 'Work While You Study',
    icon: Briefcase,
    color: 'amber',
    desc: 'Register with our Employment Bureau for part-time work to fit around your studies. Earn money while learning new skills.',
    cta: { label: 'Contact Bureau', href: 'mailto:career@northwest.ac' },
  },
];

export const Careers = () => {
  const bgMap: Record<string, string> = { secondary: 'bg-secondary-50', primary: 'bg-primary-50', amber: 'bg-amber-50' };
  const iconMap: Record<string, string> = { secondary: 'text-secondary-600', primary: 'text-primary-900', amber: 'text-amber-600' };
  const borderMap: Record<string, string> = { secondary: 'border-t-secondary-500', primary: 'border-t-primary-600', amber: 'border-t-amber-500' };

  return (
    <div className="bg-white min-h-screen font-sans">
      <PageHeader
        title="Careers & Employability"
        subtitle="Future Success"
        description="Your future career prospects are important, and we're here to help you prepare for the world of work."
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
              <h2 className="text-3xl font-display font-bold text-primary-900">Launch Your Career</h2>
              <div className="h-1 w-16 bg-secondary-500 rounded-full" />
              <p className="text-neutral-600 leading-relaxed">
                Our Employability Service offers careers advice and organises events including employment workshops and company visits.
                Whether you have a career in mind or are exploring options, we support you before, during, and after your studies.
              </p>
            </div>
            <SmartImage
              src={careerImg}
              alt="Career Fair"
              className="rounded-2xl shadow-elevated w-full"
              aspectRatio="wide"
              placeholderText="Career Event"
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
            className="grid md:grid-cols-3 gap-6"
          >
            {careerServices.map((srv, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className={`bg-white p-7 rounded-xl border border-neutral-200 border-t-4 ${borderMap[srv.color]} hover:shadow-card transition-all duration-300`}
              >
                <div className={`w-12 h-12 ${bgMap[srv.color]} rounded-xl flex items-center justify-center mb-5`}>
                  <srv.icon className={`w-6 h-6 ${iconMap[srv.color]}`} />
                </div>
                <h3 className="text-lg font-bold text-primary-900 mb-3">{srv.title}</h3>
                <p className="text-sm text-neutral-600 leading-relaxed mb-4">{srv.desc}</p>
                <a href={srv.cta.href} className="text-secondary-600 font-bold text-sm flex items-center gap-1 hover:underline">
                  <Mail className="w-4 h-4" /> {srv.cta.label}
                </a>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-900">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-2">Want to Gain Experience?</h2>
              <p className="text-neutral-300">Discover volunteering and work-study opportunities at UNW.</p>
            </div>
            <Link
              to="/student-life/volunteering"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-secondary-500 hover:bg-secondary-400 text-primary-950 font-bold text-sm rounded-lg transition-all duration-200 shadow-lg shadow-secondary-500/20 flex-shrink-0"
            >
              Volunteering <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
};
