import { Link } from 'react-router-dom';
import { Container } from '../../components/common/Container';
import { PageHeader } from '../../components/common/PageHeader';
import { SmartImage } from '../../components/common/SmartImage';
import { CircularProgress } from '../../components/common/CircularProgress';
import { CheckCircle, Settings, BookOpen, Briefcase, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

import trainingImg from '../../assets/images/corporate-meeting.jpg';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const stats = [
  { label: 'International Student Success', value: 93 },
  { label: 'Improve the Educational Process', value: 96 },
  { label: 'Project Planning and Development', value: 90 },
  { label: 'Personal Development', value: 85 },
];

const degrees = [
  'Management',
  'Management of Social and Affordable Housing',
  'Charity and Social Enterprise Management',
  'MA Leadership',
  'MBA Global Leadership',
];

const trainingTypes = [
  {
    title: 'Tailored Training',
    icon: Settings,
    color: 'secondary',
    desc: 'We work with you to design course content that meets your precise requirements and fits with your culture, whether for operational improvements or strategic goals.',
  },
  {
    title: 'Contextualised Degrees',
    icon: BookOpen,
    color: 'primary',
    desc: 'Our existing portfolio of work-based management degrees can be shaped to the needs of your organisation.',
    list: degrees,
  },
  {
    title: 'In-House Training',
    icon: Briefcase,
    color: 'amber',
    desc: 'If your company has its own staff training programme, we can enrich it to lead to formal academic recognition, giving credit for your employees\' experience.',
  },
];

export const ProfessionalCourses = () => {
  const bgMap: Record<string, string> = { secondary: 'bg-secondary-50', primary: 'bg-primary-50', amber: 'bg-amber-50' };
  const iconMap: Record<string, string> = { secondary: 'text-secondary-600', primary: 'text-primary-900', amber: 'text-amber-600' };
  const borderMap: Record<string, string> = { secondary: 'border-t-secondary-500', primary: 'border-t-primary-600', amber: 'border-t-amber-500' };

  return (
    <div className="bg-white min-h-screen font-sans">
      <PageHeader
        title="Professional Courses"
        subtitle="Continuous Learning"
        description="Staff training and development. We apply robust academic principles that deliver genuine business solutions."
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
              src={trainingImg}
              alt="Professional Training"
              className="rounded-2xl shadow-elevated w-full"
              aspectRatio="landscape"
              placeholderText="Staff Training"
            />
            <div className="space-y-5">
              <h2 className="text-3xl font-display font-bold text-primary-900">Staff Training & Development</h2>
              <div className="h-1 w-16 bg-secondary-500 rounded-full" />
              <p className="text-neutral-600 leading-relaxed">
                As providers of degree level, work-based education, we develop and deliver courses that meet demanding business requirements.
                Many big brands have chosen our work-based training programmes to develop their employees&apos; skills.
              </p>
              <p className="text-neutral-600 leading-relaxed">
                Our approach gives organisations the opportunity to update the skills of their workforce without staff spending time away.
                Employees continue to add value while they are training.
              </p>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Training Types Grid */}
      <section className="section-padding bg-neutral-50">
        <Container>
          <motion.div
            initial="hidden" whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-3 gap-6"
          >
            {trainingTypes.map((type, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className={`bg-white p-7 rounded-xl border border-neutral-200 border-t-4 ${borderMap[type.color]} hover:shadow-card transition-all duration-300`}
              >
                <div className={`w-12 h-12 ${bgMap[type.color]} rounded-xl flex items-center justify-center mb-5`}>
                  <type.icon className={`w-6 h-6 ${iconMap[type.color]}`} />
                </div>
                <h3 className="text-lg font-bold text-primary-900 mb-3">{type.title}</h3>
                <p className="text-sm text-neutral-600 leading-relaxed mb-3">{type.desc}</p>
                {type.list && (
                  <ul className="space-y-2">
                    {type.list.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs font-medium text-primary-800">
                        <CheckCircle className="w-3 h-3 text-secondary-500 mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Performance Indicators */}
      <section className="section-padding bg-white">
        <Container>
          <motion.div
            initial="hidden" whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="bg-white p-10 rounded-2xl border border-neutral-200 text-center"
          >
            <h3 className="text-xl font-display font-bold text-primary-900 mb-10">Impact & Performance Indicators</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 justify-items-center">
              {stats.map((stat, index) => (
                <CircularProgress
                  key={index}
                  value={stat.value}
                  label={stat.label}
                />
              ))}
            </div>
          </motion.div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-900">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-2">Ready to Upskill Your Workforce?</h2>
              <p className="text-neutral-300">Contact us today for a free meeting to discuss your training needs.</p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-secondary-500 hover:bg-secondary-400 text-primary-950 font-bold text-sm rounded-lg transition-all duration-200 shadow-lg shadow-secondary-500/20 flex-shrink-0"
            >
              Contact for a Free Meeting <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
};
