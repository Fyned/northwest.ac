import { Link } from 'react-router-dom';
import { Container } from '../../components/common/Container';
import { PageHeader } from '../../components/common/PageHeader';
import { SmartImage } from '../../components/common/SmartImage';
import { Briefcase, FileText, Users, Microscope, CheckCircle, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

import corporateImg from '../../assets/images/corporate-meeting.jpg';

const expertiseTypes = [
  {
    title: 'Consultancy',
    icon: Briefcase,
    color: 'secondary',
    desc: 'A consultancy project addresses a business issue or challenge and involves specific problem-solving for the client organisation.',
  },
  {
    title: 'Contract Research',
    icon: FileText,
    color: 'primary',
    desc: 'Carried out to a specific client brief; proof of concept, market analysis, R&D, laboratory testing, or data analysis.',
  },
  {
    title: 'Collaborative Research',
    icon: Users,
    color: 'amber',
    desc: 'Brings two or more parties together in a research partnership, each bringing their own expertise, often externally funded.',
  },
  {
    title: 'Testing & Validation',
    icon: Microscope,
    color: 'secondary',
    desc: 'Rapid prototyping, product development, model generation and computer simulations in specialist high-tech laboratories.',
  },
];

const facultyServices = [
  'Music Therapy Clinic (Two fully equipped therapy rooms)',
  'Equine Reproductive Behaviour Consultancy (Faculty of Science and Technology)',
  'Engineering Simulation Analysis & Tribology Group (Thermodynamics, fluid dynamics)',
];

export const Experts = () => {
  const bgMap: Record<string, string> = { secondary: 'bg-secondary-50', primary: 'bg-primary-50', amber: 'bg-amber-50' };
  const iconMap: Record<string, string> = { secondary: 'text-secondary-600', primary: 'text-primary-900', amber: 'text-amber-600' };
  const borderMap: Record<string, string> = { secondary: 'border-t-secondary-500', primary: 'border-t-primary-600', amber: 'border-t-amber-500' };

  return (
    <div className="bg-white min-h-screen font-sans">
      <PageHeader
        title="Access Our Experts"
        subtitle="Consultancy & Research"
        description="University of Northwest has over 100 academic staff with a wealth of research expertise in business, education, science, technology, and arts."
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
              <h2 className="text-3xl font-display font-bold text-primary-900">World-Class Expertise for Your Business</h2>
              <div className="h-1 w-16 bg-secondary-500 rounded-full" />
              <p className="text-neutral-600 leading-relaxed">
                Consultancy and research projects at University of Northwest provide access to the University&apos;s best research, technologies and resources.
                Whether you need confidential problem-solving or long-term collaborative research, we have the right experts for you.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary-900 hover:bg-primary-800 text-white font-bold text-sm rounded-lg transition-colors"
              >
                Contact for Consultation <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <SmartImage
              src={corporateImg}
              alt="Consultancy Meeting"
              className="rounded-2xl shadow-elevated w-full"
              aspectRatio="landscape"
              placeholderText="Experts Meeting"
            />
          </motion.div>
        </Container>
      </section>

      {/* Expertise Grid */}
      <section className="section-padding bg-neutral-50">
        <Container>
          <motion.div
            initial="hidden" whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-2 gap-6"
          >
            {expertiseTypes.map((type, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className={`bg-white p-7 rounded-xl border border-neutral-200 border-t-4 ${borderMap[type.color]} hover:shadow-card transition-all duration-300`}
              >
                <div className={`w-12 h-12 ${bgMap[type.color]} rounded-xl flex items-center justify-center mb-5`}>
                  <type.icon className={`w-6 h-6 ${iconMap[type.color]}`} />
                </div>
                <h3 className="text-lg font-bold text-primary-900 mb-3">{type.title}</h3>
                <p className="text-sm text-neutral-600 leading-relaxed">{type.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Faculty Services */}
      <section className="section-padding bg-white">
        <Container>
          <motion.div
            initial="hidden" whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid lg:grid-cols-3 gap-6"
          >
            <motion.div variants={fadeInUp} className="lg:col-span-2 bg-white p-7 rounded-xl border border-neutral-200">
              <h3 className="text-lg font-bold text-primary-900 mb-5">Faculty Research & Consultancy Services</h3>
              <p className="text-sm text-neutral-600 mb-5">Several of the faculties run their own research and consultancy services, including:</p>
              <ul className="space-y-3">
                {facultyServices.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 p-3 bg-neutral-50 rounded-lg text-sm text-primary-900 font-medium">
                    <CheckCircle className="w-4 h-4 text-secondary-500 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-primary-900 p-7 rounded-xl text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary-500/20 rounded-bl-full -mr-8 -mt-8" />
              <h3 className="text-lg font-display font-bold mb-4 relative z-10">Expert Help</h3>
              <p className="text-primary-200 text-sm leading-relaxed mb-6 relative z-10">
                Our business development managers will match your requirement with the right expertise and assist you in writing a research bid to secure funding.
              </p>
              <Link
                to="/contact"
                className="relative z-10 inline-flex items-center gap-2 px-5 py-2.5 bg-secondary-500 hover:bg-secondary-400 text-primary-950 font-bold text-sm rounded-lg transition-colors w-full justify-center"
              >
                Get in Touch <ArrowRight className="w-4 h-4" />
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
              <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-2">Ready to Collaborate?</h2>
              <p className="text-neutral-300">Discover how our expertise can drive your business forward.</p>
            </div>
            <Link
              to="/business/employing"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-secondary-500 hover:bg-secondary-400 text-primary-950 font-bold text-sm rounded-lg transition-all duration-200 shadow-lg shadow-secondary-500/20 flex-shrink-0"
            >
              Employing Graduates <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
};
