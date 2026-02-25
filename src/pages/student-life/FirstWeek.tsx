import { Link } from 'react-router-dom';
import { Container } from '../../components/common/Container';
import { PageHeader } from '../../components/common/PageHeader';
import { SmartImage } from '../../components/common/SmartImage';
import { Calendar, Users, Music, Map, Heart, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

import welcomeImg from '../../assets/images/student-life.jpg';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const activities = [
  {
    title: 'Social Events',
    icon: Music,
    color: 'secondary',
    desc: 'Nights out, parties, and social gatherings designed to help you make new friends and have fun.',
  },
  {
    title: 'Campus Tours',
    icon: Map,
    color: 'primary',
    desc: 'Useful sessions and guided tours to help you learn your way around the campus and local area.',
  },
  {
    title: 'Taster Sessions',
    icon: Users,
    color: 'amber',
    desc: "Try out societies and sports teams before joining. There's something for everyone, no matter what your interests are.",
  },
  {
    title: 'Welcome Helpers',
    icon: Heart,
    color: 'secondary',
    desc: 'Current students or recent graduates are there to answer your questions from a student perspective.',
  },
];

export const FirstWeek = () => {
  const bgMap: Record<string, string> = { secondary: 'bg-secondary-50', primary: 'bg-primary-50', amber: 'bg-amber-50' };
  const iconMap: Record<string, string> = { secondary: 'text-secondary-600', primary: 'text-primary-900', amber: 'text-amber-600' };
  const borderMap: Record<string, string> = { secondary: 'border-t-secondary-500', primary: 'border-t-primary-600', amber: 'border-t-amber-500' };

  return (
    <div className="bg-white min-h-screen font-sans">
      <PageHeader
        title="Your First Week"
        subtitle="Welcome Week"
        description="A great chance to meet people, get settled in, and start your university journey."
      />

      {/* Welcome Intro */}
      <section className="section-padding bg-white">
        <Container>
          <motion.div
            initial="hidden" whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeInUp}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div className="space-y-5">
              <h2 className="text-3xl font-display font-bold text-primary-900">Welcome to Welcome Week!</h2>
              <div className="h-1 w-16 bg-secondary-500 rounded-full" />
              <p className="text-neutral-600 leading-relaxed">
                Each year, we organise loads of events designed to help you get to know our university, while making new friends and having fun.
                It&apos;s the perfect way to kickstart your life at University of NorthWest.
              </p>
              <div className="flex items-center gap-2 text-sm font-bold text-secondary-600">
                <Calendar className="w-5 h-5" />
                <span>Check the Events Calendar</span>
              </div>
            </div>
            <SmartImage
              src={welcomeImg}
              alt="Welcome Week"
              className="rounded-2xl shadow-elevated w-full"
              aspectRatio="landscape"
              placeholderText="Students Celebrating"
            />
          </motion.div>
        </Container>
      </section>

      {/* Activities Grid */}
      <section className="section-padding bg-neutral-50">
        <Container>
          <motion.div
            initial="hidden" whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {activities.map((activity, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className={`bg-white p-6 rounded-xl border border-neutral-200 border-t-4 ${borderMap[activity.color]} hover:shadow-card transition-all duration-300`}
              >
                <div className={`w-10 h-10 ${bgMap[activity.color]} rounded-xl flex items-center justify-center mb-4`}>
                  <activity.icon className={`w-5 h-5 ${iconMap[activity.color]}`} />
                </div>
                <h3 className="font-bold text-primary-900 mb-2">{activity.title}</h3>
                <p className="text-sm text-neutral-600 leading-relaxed">{activity.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Support CTA */}
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
              <h3 className="text-2xl font-display font-bold text-white mb-2">Need a Helping Hand?</h3>
              <p className="text-neutral-400 leading-relaxed max-w-xl">
                If you feel like you&apos;re struggling to settle in, our Student Services Team is here to help with wellbeing, money management, study skills, and more.
              </p>
            </div>
            <Link
              to="/student-life/study-support"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-secondary-500 hover:bg-secondary-400 text-primary-950 font-bold text-sm rounded-lg transition-all duration-200 shadow-lg shadow-secondary-500/20 flex-shrink-0"
            >
              Student Services <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-900">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-2">Explore Student Life</h2>
              <p className="text-neutral-300">Discover careers, volunteering, and study support opportunities.</p>
            </div>
            <Link
              to="/student-life/careers"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-secondary-500 hover:bg-secondary-400 text-primary-950 font-bold text-sm rounded-lg transition-all duration-200 shadow-lg shadow-secondary-500/20 flex-shrink-0"
            >
              Careers & Employability <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
};
