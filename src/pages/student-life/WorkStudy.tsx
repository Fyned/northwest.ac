import { Link } from 'react-router-dom';
import { Container } from '../../components/common/Container';
import { PageHeader } from '../../components/common/PageHeader';
import { SmartImage } from '../../components/common/SmartImage';
import { Briefcase, DollarSign, Award, Globe, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

import workImg from '../../assets/images/corporate-meeting.jpg';
import { fadeInUp, stagger } from '../../utils/animations';

const advantages = [
  {
    title: 'Extra Income',
    icon: DollarSign,
    color: 'secondary',
    desc: 'Earn money to support your studies and social life while gaining financial independence.',
  },
  {
    title: 'New Skills',
    icon: Award,
    color: 'primary',
    desc: 'Develop employability skills and add valuable work experience to your CV to impress future employers.',
  },
  {
    title: 'Networking',
    icon: Globe,
    color: 'amber',
    desc: 'Meet new people, expand your professional network, and become part of the workplace community.',
  },
];

export const WorkStudy = () => {
  const bgMap: Record<string, string> = { secondary: 'bg-secondary-50', primary: 'bg-primary-50', amber: 'bg-amber-50' };
  const iconMap: Record<string, string> = { secondary: 'text-secondary-600', primary: 'text-primary-900', amber: 'text-amber-600' };
  const borderMap: Record<string, string> = { secondary: 'border-t-secondary-500', primary: 'border-t-primary-600', amber: 'border-t-amber-500' };

  return (
    <div className="bg-white min-h-screen font-sans">
      <PageHeader
        title="Work While You Study"
        subtitle="Earn & Learn"
        description="Gain valuable experience, earn extra cash, and boost your employability while studying at University of NorthWest."
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
              <h2 className="text-3xl font-display font-bold text-primary-900">The Employment Bureau</h2>
              <div className="h-1 w-16 bg-secondary-500 rounded-full" />
              <p className="text-neutral-600 leading-relaxed">
                We have our own recruitment agency &ndash; the Employment Bureau. By registering, you&apos;ll be able to apply for part-time paid work which you can fit around your studies.
                Most of the work is on campus, making it easy to fit into your schedule.
              </p>
              <div className="p-4 bg-primary-50 rounded-lg border-l-4 border-primary-500">
                <p className="text-sm text-primary-900 font-medium">
                  You can register online before you arrive, but you&apos;ll need to visit us with your passport to verify your eligibility to work in the USA.
                </p>
              </div>
            </div>
            <SmartImage
              src={workImg}
              alt="Students Working"
              className="rounded-2xl shadow-elevated w-full"
              aspectRatio="wide"
              placeholderText="Part-time Work"
            />
          </motion.div>
        </Container>
      </section>

      {/* Advantages Grid */}
      <section className="section-padding bg-neutral-50">
        <Container>
          <motion.div
            initial="hidden" whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-3 gap-6"
          >
            {advantages.map((adv, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className={`bg-white p-7 rounded-xl border border-neutral-200 border-t-4 ${borderMap[adv.color]} hover:shadow-card transition-all duration-300 text-center`}
              >
                <div className={`w-12 h-12 ${bgMap[adv.color]} rounded-xl flex items-center justify-center mx-auto mb-5`}>
                  <adv.icon className={`w-6 h-6 ${iconMap[adv.color]}`} />
                </div>
                <h3 className="text-lg font-bold text-primary-900 mb-3">{adv.title}</h3>
                <p className="text-sm text-neutral-600 leading-relaxed">{adv.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Info Cards */}
      <section className="section-padding bg-white">
        <Container>
          <motion.div
            initial="hidden" whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid lg:grid-cols-2 gap-6"
          >
            <motion.div variants={fadeInUp} className="bg-white p-7 rounded-xl border border-neutral-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-secondary-50 rounded-xl flex items-center justify-center">
                  <Globe className="w-5 h-5 text-secondary-600" />
                </div>
                <h3 className="text-lg font-bold text-primary-900">International Students</h3>
              </div>
              <p className="text-sm text-neutral-600 leading-relaxed mb-3">
                If you&apos;re an international student, there may be restrictions on your working hours as stated on your visa (typically 20 hours per week during term time).
              </p>
              <Link to="/international/how-to-apply" className="text-secondary-600 font-bold text-sm flex items-center gap-1 hover:underline">
                Check Visa Regulations <ArrowRight className="w-3 h-3" />
              </Link>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white p-7 rounded-xl border border-neutral-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary-50 rounded-xl flex items-center justify-center">
                  <Briefcase className="w-5 h-5 text-primary-900" />
                </div>
                <h3 className="text-lg font-bold text-primary-900">Graduate Recruitment</h3>
              </div>
              <p className="text-sm text-neutral-600 leading-relaxed mb-3">
                We&apos;ll be here for you after you graduate too. The team recruits for a variety of permanent graduate positions in the local area.
              </p>
              <Link to="/student-life/careers" className="text-secondary-600 font-bold text-sm flex items-center gap-1 hover:underline">
                Visit Employability Service <ArrowRight className="w-3 h-3" />
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
              <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-2">Questions About Working?</h2>
              <p className="text-neutral-300">Get in touch with our Employment Bureau for more information.</p>
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
