import { Link } from 'react-router-dom';
import { Container } from '../../components/common/Container';
import { PageHeader } from '../../components/common/PageHeader';
import { SmartImage } from '../../components/common/SmartImage';
import { Heart, Award, Users, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

import volunteerImg from '../../assets/images/student-life.jpg';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const benefits = [
  {
    title: 'Community',
    icon: Users,
    color: 'secondary',
    desc: 'Meet new people, make friends, and become an active part of the local and university community.',
  },
  {
    title: 'Employability',
    icon: Award,
    color: 'primary',
    desc: 'Increase your chances of getting your dream job. Employers value the skills gained through volunteering.',
  },
  {
    title: 'Wellbeing',
    icon: Heart,
    color: 'amber',
    desc: 'Giving back feels good. Improve your confidence and wellbeing by making a positive impact.',
  },
];

export const Volunteering = () => {
  const bgMap: Record<string, string> = { secondary: 'bg-secondary-50', primary: 'bg-primary-50', amber: 'bg-amber-50' };
  const iconMap: Record<string, string> = { secondary: 'text-secondary-600', primary: 'text-primary-900', amber: 'text-amber-600' };
  const borderMap: Record<string, string> = { secondary: 'border-t-secondary-500', primary: 'border-t-primary-600', amber: 'border-t-amber-500' };

  return (
    <div className="bg-white min-h-screen font-sans">
      <PageHeader
        title="Student Volunteering"
        subtitle="Make a Difference"
        description="Join more than a thousand students who volunteer, run sports clubs, and give back to the community."
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
              <h2 className="text-3xl font-display font-bold text-primary-900">Give Back & Grow</h2>
              <div className="h-1 w-16 bg-secondary-500 rounded-full" />
              <p className="text-neutral-600 leading-relaxed">
                We support hundreds of opportunities available to you with fantastic staff to help every step of the way.
                Whether it&apos;s running a society or helping in the local community, volunteering is a rewarding experience.
              </p>
              <div className="p-4 bg-primary-50 rounded-lg border-l-4 border-primary-500">
                <p className="text-sm text-primary-900 font-medium flex items-start gap-2">
                  <Award className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                  We officially accredit your volunteering hours so you can add them to your CV, boosting your employability.
                </p>
              </div>
            </div>
            <SmartImage
              src={volunteerImg}
              alt="Volunteering"
              className="rounded-2xl shadow-elevated w-full"
              aspectRatio="landscape"
              placeholderText="Community Service"
            />
          </motion.div>
        </Container>
      </section>

      {/* Benefits Grid */}
      <section className="section-padding bg-neutral-50">
        <Container>
          <motion.div
            initial="hidden" whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-3 gap-6"
          >
            {benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className={`bg-white p-7 rounded-xl border border-neutral-200 border-t-4 ${borderMap[benefit.color]} hover:shadow-card transition-all duration-300 text-center`}
              >
                <div className={`w-12 h-12 ${bgMap[benefit.color]} rounded-xl flex items-center justify-center mx-auto mb-5`}>
                  <benefit.icon className={`w-6 h-6 ${iconMap[benefit.color]}`} />
                </div>
                <h3 className="text-lg font-bold text-primary-900 mb-3">{benefit.title}</h3>
                <p className="text-sm text-neutral-600 leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Students Union CTA */}
      <section className="py-16 md:py-20 bg-primary-950 relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-15" />
        <Container className="relative z-10">
          <motion.div
            initial="hidden" whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="flex flex-col md:flex-row items-center justify-between gap-6"
          >
            <div>
              <h3 className="text-2xl font-display font-bold text-white mb-2">Ready to Get Involved?</h3>
              <p className="text-neutral-400 leading-relaxed max-w-xl">
                Find out more about current volunteering opportunities through the Students&apos; Union.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-secondary-500 hover:bg-secondary-400 text-primary-950 font-bold text-sm rounded-lg transition-all duration-200 shadow-lg shadow-secondary-500/20 flex-shrink-0"
            >
              Visit Students&apos; Union <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-900">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-2">Looking for Paid Work?</h2>
              <p className="text-neutral-300">Explore part-time work opportunities through our Employment Bureau.</p>
            </div>
            <Link
              to="/student-life/work-study"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-secondary-500 hover:bg-secondary-400 text-primary-950 font-bold text-sm rounded-lg transition-all duration-200 shadow-lg shadow-secondary-500/20 flex-shrink-0"
            >
              Work While You Study <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
};
