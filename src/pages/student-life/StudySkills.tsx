import { Link } from 'react-router-dom';
import { Container } from '../../components/common/Container';
import { PageHeader } from '../../components/common/PageHeader';
import { SmartImage } from '../../components/common/SmartImage';
import { BookOpen, PenTool, Calculator, Users, Clock, Search, CheckCircle, Calendar, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

import skillsImg from '../../assets/images/student-life.jpg';

const skills = [
  { title: 'Research & Referencing', icon: Search },
  { title: 'Academic Writing', icon: PenTool },
  { title: 'Organisational Skills', icon: Clock },
  { title: 'Numeracy & Maths', icon: Calculator },
  { title: 'Academic English', icon: BookOpen },
  { title: 'Study Groups', icon: Users },
];

const services = [
  {
    title: 'Workshops',
    icon: Users,
    color: 'secondary',
    desc: 'Group sessions designed to enhance your competence in specific areas.',
  },
  {
    title: 'Drop-ins',
    icon: Clock,
    color: 'primary',
    desc: 'Call in for quick advice and guidance about Study Skills Plus.',
  },
  {
    title: 'Appointments',
    icon: Calendar,
    color: 'amber',
    desc: 'Bookable sessions for individuals or small groups for in-depth help.',
  },
  {
    title: 'Online Resources',
    icon: Search,
    color: 'secondary',
    desc: 'Self-help guides and tutorials accessible any time you need them.',
  },
];

export const StudySkills = () => {
  const bgMap: Record<string, string> = { secondary: 'bg-secondary-50', primary: 'bg-primary-50', amber: 'bg-amber-50' };
  const iconMap: Record<string, string> = { secondary: 'text-secondary-600', primary: 'text-primary-900', amber: 'text-amber-600' };
  const borderMap: Record<string, string> = { secondary: 'border-t-secondary-500', primary: 'border-t-primary-600', amber: 'border-t-amber-500' };

  return (
    <div className="bg-white min-h-screen font-sans">
      <PageHeader
        title="Study Skills Plus"
        subtitle="Academic Success"
        description="Get the most out of your academic study with expert advice and guidance."
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
            <SmartImage
              src={skillsImg}
              alt="Studying"
              className="rounded-2xl shadow-elevated w-full"
              aspectRatio="landscape"
              placeholderText="Effective Study"
            />
            <div className="space-y-5">
              <h2 className="text-3xl font-display font-bold text-primary-900">We&apos;re Here for All Students</h2>
              <div className="h-1 w-16 bg-secondary-500 rounded-full" />
              <p className="text-neutral-600 leading-relaxed">
                Whether you need help with researching, writing, referencing, or maths, Study Skills Plus is here for you.
                Time management is another crucial skill, so there&apos;s a dedicated session on how to use your time wisely.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {skills.map((skill, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm text-primary-800 font-medium">
                    <CheckCircle className="w-4 h-4 text-secondary-500 flex-shrink-0" />
                    {skill.title}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-neutral-50">
        <Container>
          <motion.div
            initial="hidden" whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-10"
          >
            <span className="text-secondary-600 font-bold tracking-[0.2em] uppercase text-xs">Our Services</span>
            <h2 className="text-3xl font-display font-bold text-primary-900 mt-3 mb-4">Enhance Your Success</h2>
            <div className="h-1 w-16 bg-secondary-500 mx-auto rounded-full" />
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {services.map((srv, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className={`bg-white p-6 rounded-xl border border-neutral-200 border-t-4 ${borderMap[srv.color]} hover:shadow-card transition-all duration-300 text-center`}
              >
                <div className={`w-12 h-12 ${bgMap[srv.color]} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <srv.icon className={`w-6 h-6 ${iconMap[srv.color]}`} />
                </div>
                <h3 className="font-bold text-primary-900 mb-2">{srv.title}</h3>
                <p className="text-sm text-neutral-600 leading-relaxed">{srv.desc}</p>
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
              <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-2">Need More Support?</h2>
              <p className="text-neutral-300">Explore our disability support and career services.</p>
            </div>
            <Link
              to="/student-life/disability-support"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-secondary-500 hover:bg-secondary-400 text-primary-950 font-bold text-sm rounded-lg transition-all duration-200 shadow-lg shadow-secondary-500/20 flex-shrink-0"
            >
              Disability Support <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
};
