import { Link } from 'react-router-dom';
import { Container } from '../../components/common/Container';
import { PageHeader } from '../../components/common/PageHeader';
import { SmartImage } from '../../components/common/SmartImage';
import { CheckCircle, Users, Briefcase, Award, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

import gradImg from '../../assets/images/graduation.jpg';

const benefits = [
  'Introducing innovative new ideas into your business',
  'Expanding your workforce for a short-term project without long-term commitment',
  'Delivering highly motivated graduates eager to gain valuable experience',
  'Identifying potential new employees you can test drive with minimum risk',
];

const programmes = [
  {
    title: 'Internship Programme',
    icon: Users,
    color: 'secondary',
    desc: 'Offers companies the opportunity to work with a high calibre graduate or student for up to 12 weeks. The graduate is employed by the University but works full-time within your company.',
    cta: { label: 'Contact Internship Office', href: '/contact' },
  },
  {
    title: 'Knowledge Transfer (KTP)',
    icon: Award,
    color: 'primary',
    desc: 'A three-way partnership between your business, the University, and an excellent graduate. KTPs are supported by government grants of up to 67%.',
    cta: { label: 'Talk to a KTP Manager', href: '/contact' },
  },
  {
    title: 'Employment Bureau',
    icon: Briefcase,
    color: 'amber',
    desc: 'The Employment Bureau can help with all your recruitment needs whether you are looking to fill a permanent role or need temporary cover for a short-term need.',
    cta: { label: 'Recruitment Services', href: '/contact' },
  },
];

export const Employing = () => {
  const bgMap: Record<string, string> = { secondary: 'bg-secondary-50', primary: 'bg-primary-50', amber: 'bg-amber-50' };
  const iconMap: Record<string, string> = { secondary: 'text-secondary-600', primary: 'text-primary-900', amber: 'text-amber-600' };
  const borderMap: Record<string, string> = { secondary: 'border-t-secondary-500', primary: 'border-t-primary-600', amber: 'border-t-amber-500' };

  return (
    <div className="bg-white min-h-screen font-sans">
      <PageHeader
        title="Employing Students & Graduates"
        subtitle="Talent Acquisition"
        description="Internships and placements offer a cost-effective and low-risk way of boosting your efficiency, productivity, and profit."
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
              <h2 className="text-3xl font-display font-bold text-primary-900">Internships, Placements & Recruitment</h2>
              <div className="h-1 w-16 bg-secondary-500 rounded-full" />
              <p className="text-neutral-600 leading-relaxed">
                University of Northwest offers employers a range of services to get the most from student and graduate resources.
                Our aim is to help you grow by connecting you with the next generation of talent.
              </p>
              <ul className="space-y-3">
                {benefits.map((b, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-neutral-700">
                    <CheckCircle className="w-4 h-4 text-secondary-500 mt-0.5 flex-shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
            <SmartImage
              src={gradImg}
              alt="Graduates"
              className="rounded-2xl shadow-elevated w-full"
              aspectRatio="landscape"
              placeholderText="Graduates at Work"
            />
          </motion.div>
        </Container>
      </section>

      {/* Programmes Grid */}
      <section className="section-padding bg-neutral-50">
        <Container>
          <motion.div
            initial="hidden" whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-3 gap-6"
          >
            {programmes.map((prog, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className={`bg-white p-7 rounded-xl border border-neutral-200 border-t-4 ${borderMap[prog.color]} hover:shadow-card transition-all duration-300`}
              >
                <div className={`w-12 h-12 ${bgMap[prog.color]} rounded-xl flex items-center justify-center mb-5`}>
                  <prog.icon className={`w-6 h-6 ${iconMap[prog.color]}`} />
                </div>
                <h3 className="text-lg font-bold text-primary-900 mb-3">{prog.title}</h3>
                <p className="text-sm text-neutral-600 leading-relaxed mb-4">{prog.desc}</p>
                <Link to={prog.cta.href} className="text-secondary-600 font-bold text-sm flex items-center gap-1 hover:underline">
                  {prog.cta.label} <ArrowRight className="w-3 h-3" />
                </Link>
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
              <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-2">Expert Help</h2>
              <p className="text-neutral-300">Get in touch and talk to us about how student and graduate placements can benefit your business.</p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-secondary-500 hover:bg-secondary-400 text-primary-950 font-bold text-sm rounded-lg transition-all duration-200 shadow-lg shadow-secondary-500/20 flex-shrink-0"
            >
              Get in Touch <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
};
