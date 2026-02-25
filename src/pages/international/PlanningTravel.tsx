import { Link } from 'react-router-dom';
import { Container } from '../../components/common/Container';
import { PageHeader } from '../../components/common/PageHeader';
import { SmartImage } from '../../components/common/SmartImage';
import { CheckCircle, AlertCircle, Plane, FileText, Pill, Wallet, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

import travelImg from '../../assets/images/student-life.jpg';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const checklistItems = [
  {
    title: 'Passport & Visas',
    icon: FileText,
    color: 'secondary',
    text: 'Obtain passport and required visas. US passports should be applied for 4-6 months before departure. Contact your destination country\'s embassy for specific visa requirements.',
  },
  {
    title: 'Vaccinations & Health',
    icon: Pill,
    color: 'primary',
    text: 'Review recommendations for vaccinations and malaria prophylaxis. Allow 6 weeks to make an appointment with a healthcare provider. Ensure you have an adequate supply of prescriptions.',
  },
  {
    title: 'Health Insurance',
    icon: CheckCircle,
    color: 'amber',
    text: 'Ensure you have appropriate health insurance. Faculty or staff obtaining benefits from the University can find information on the applicability of their benefits online.',
  },
  {
    title: 'Money & Cash',
    icon: Wallet,
    color: 'secondary',
    text: 'Ensure you can obtain cash at your destination (notify your bank). It is advisable to obtain a small amount of destination currency before departure.',
  },
  {
    title: 'Important Documents',
    icon: FileText,
    color: 'primary',
    text: 'Make photocopies of airline reservations, trip itinerary, and passport front page. Keep copies separate from originals and give one set to a trusted contact.',
  },
  {
    title: 'Driving Permits',
    icon: CheckCircle,
    color: 'amber',
    text: 'If planning to drive, check if you need an International Driving Permit (IDP). Some countries allow US licenses for short visits, others do not.',
  },
];

export const PlanningTravel = () => {
  return (
    <div className="bg-white min-h-screen font-sans">
      <PageHeader
        title="Planning Your Travel"
        subtitle="Pre-Departure Guide"
        description="A comprehensive checklist to ensure a smooth and safe journey to University of NorthWest."
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
              <div className="flex items-center gap-3">
                <Plane className="w-6 h-6 text-secondary-500" />
                <h2 className="text-3xl font-display font-bold text-primary-900">Travel Checklist</h2>
              </div>
              <div className="h-1 w-16 bg-secondary-500 rounded-full" />
              <p className="text-neutral-600 leading-relaxed">
                Preparing for international travel requires careful planning. Use this checklist to ensure you have everything in order before you depart.
                From visas to vaccinations, we&apos;ve covered the essentials.
              </p>
              <div className="p-4 bg-amber-50 border-l-4 border-amber-500 rounded-r-lg text-sm text-amber-800 flex items-start gap-2">
                <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>
                  <strong>Non-US Citizens:</strong> Ensure your US visa paperwork is in order for your return. Bring extra evidence of your status for Immigration.
                </span>
              </div>
            </div>
            <SmartImage
              src={travelImg}
              alt="Travel Planning"
              className="rounded-2xl shadow-elevated w-full"
              aspectRatio="landscape"
              placeholderText="Travel & Airport"
            />
          </motion.div>
        </Container>
      </section>

      {/* Checklist Grid */}
      <section className="section-padding bg-neutral-50">
        <Container>
          <motion.div
            initial="hidden" whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {checklistItems.map((item, idx) => {
              const bgMap: Record<string, string> = { secondary: 'bg-secondary-50', primary: 'bg-primary-50', amber: 'bg-amber-50' };
              const iconMap: Record<string, string> = { secondary: 'text-secondary-600', primary: 'text-primary-900', amber: 'text-amber-600' };
              return (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  className="bg-white p-6 rounded-xl border border-neutral-200 hover:shadow-card transition-all duration-300"
                >
                  <div className={`w-10 h-10 ${bgMap[item.color]} rounded-xl flex items-center justify-center mb-4`}>
                    <item.icon className={`w-5 h-5 ${iconMap[item.color]}`} />
                  </div>
                  <h3 className="font-bold text-primary-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">{item.text}</p>
                </motion.div>
              );
            })}
          </motion.div>

          <p className="text-center text-neutral-500 text-sm italic mt-10">
            For US citizens, we recommend registering your travel with the local US embassy for emergency contact.
          </p>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-900">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-2">Ready for Your Journey?</h2>
              <p className="text-neutral-300">Check out our orientation guide for what to expect when you arrive.</p>
            </div>
            <Link
              to="/international/orientation"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-secondary-500 hover:bg-secondary-400 text-primary-950 font-bold text-sm rounded-lg transition-all duration-200 shadow-lg shadow-secondary-500/20 flex-shrink-0"
            >
              Orientation Guide <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
};
