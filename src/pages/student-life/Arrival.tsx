import { Link } from 'react-router-dom';
import { Container } from '../../components/common/Container';
import { PageHeader } from '../../components/common/PageHeader';
import { SmartImage } from '../../components/common/SmartImage';
import { CheckCircle, AlertTriangle, HelpCircle, Briefcase, MapPin, DollarSign, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

import arrivalImg from '../../assets/images/student-life.jpg';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const faqItems = [
  {
    question: 'When will my classes start?',
    answer: 'The Academic Calendar generally runs from early September through mid-December (Fall), and mid-January through early May (Spring).',
  },
  {
    question: 'Is it easy to make friends?',
    answer: 'Yes! Residence life, campus activities, and the International Student Organization provide many opportunities to meet American and international students.',
  },
];

const packingItems = [
  'Warm clothing for winter',
  'Personal items & toiletries',
  'Photos of family and friends',
  'Alarm clock',
];

const expenseCategories = [
  'Tuition & Fees', 'Books & Supplies', 'Housing & Rent',
  'Health Insurance', 'Clothing', 'Entertainment',
];

const criticalDocs = [
  'Evidence of financial resources',
  'Evidence of student status (tuition receipts)',
  'Medical & dental records / Immunizations',
  'Official Transcripts (sealed/signed)',
  'Prescriptions for medication & eyeglasses',
  'Marriage certificate (if applicable)',
  'Birth certificates for children (if applicable)',
];

export const Arrival = () => {
  return (
    <div className="bg-white min-h-screen font-sans">
      <PageHeader
        title="When You Arrive"
        subtitle="Arrival Guide"
        description="Helpful things for you to know before and after you arrive at University of NorthWest."
      />

      {/* Welcome & FAQ */}
      <section className="section-padding bg-white">
        <Container>
          <motion.div
            initial="hidden" whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeInUp}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div className="space-y-5">
              <h2 className="text-3xl font-display font-bold text-primary-900">Welcome to Campus</h2>
              <div className="h-1 w-16 bg-secondary-500 rounded-full" />
              <p className="text-neutral-600 leading-relaxed">
                The Office of International Relations & Global Engagement is here to answer your questions.
              </p>
              <div className="space-y-4">
                {faqItems.map((item, idx) => (
                  <div key={idx} className="p-4 bg-primary-50 rounded-lg">
                    <h4 className="font-bold text-primary-900 flex items-center gap-2 mb-2">
                      <HelpCircle className="w-4 h-4 text-secondary-600" />
                      {item.question}
                    </h4>
                    <p className="text-sm text-neutral-700">{item.answer}</p>
                  </div>
                ))}
              </div>
            </div>
            <SmartImage
              src={arrivalImg}
              alt="Campus Life"
              className="rounded-2xl shadow-elevated w-full"
              aspectRatio="portrait"
              placeholderText="Students Arriving"
            />
          </motion.div>
        </Container>
      </section>

      {/* Packing & Expenses */}
      <section className="section-padding bg-neutral-50">
        <Container>
          <motion.div
            initial="hidden" whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid lg:grid-cols-2 gap-6"
          >
            {/* What to Pack */}
            <motion.div variants={fadeInUp} className="bg-white p-7 rounded-xl border border-neutral-200 border-t-4 border-t-secondary-500">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-secondary-50 rounded-xl flex items-center justify-center">
                  <Briefcase className="w-5 h-5 text-secondary-600" />
                </div>
                <h3 className="text-lg font-bold text-primary-900">What to Pack</h3>
              </div>
              <p className="text-sm text-neutral-600 mb-4">
                Bring one large suitcase and one small one. Max weight per bag on international flights is usually 20 Kg (44 lbs).
              </p>
              <ul className="space-y-3 text-sm text-neutral-600">
                {packingItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary-500 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-5 p-3 bg-amber-50 border border-amber-100 rounded-lg text-xs text-amber-800 flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span><strong>Warning:</strong> Do not travel with large amounts of cash! Use traveler's checks or credit cards.</span>
              </div>
            </motion.div>

            {/* Personal Expenses */}
            <motion.div variants={fadeInUp} className="bg-white p-7 rounded-xl border border-neutral-200 border-t-4 border-t-primary-600">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-primary-50 rounded-xl flex items-center justify-center">
                  <DollarSign className="w-5 h-5 text-primary-900" />
                </div>
                <h3 className="text-lg font-bold text-primary-900">Personal Expenses</h3>
              </div>
              <p className="text-sm text-neutral-600 mb-4">
                Most students get by on $25-$50 per week for personal expenses. Once on campus, expenses include:
              </p>
              <div className="grid grid-cols-2 gap-2">
                {expenseCategories.map((cat, i) => (
                  <div key={i} className="bg-neutral-50 p-2.5 rounded-lg text-xs text-neutral-700 font-medium text-center">
                    {cat}
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* Critical Documents */}
      <section className="section-padding bg-white">
        <Container>
          <motion.div
            initial="hidden" whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="bg-red-50 border border-red-100 p-7 md:p-10 rounded-xl"
          >
            <div className="flex items-start gap-4 mb-6">
              <AlertTriangle className="w-8 h-8 text-red-600 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-display font-bold text-red-800">Critical Documents: Do NOT Check in Baggage!</h3>
                <p className="text-red-700 text-sm mt-1">
                  If your baggage is lost, you will be unable to present these documents at the port of entry and may be denied entry to the U.S. Keep these in your carry-on.
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-3">
              {criticalDocs.map((doc, i) => (
                <div key={i} className="flex items-start gap-2 text-sm text-red-800 font-medium">
                  <CheckCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                  {doc}
                </div>
              ))}
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Travel Tips */}
      <section className="py-16 md:py-20 bg-primary-950 relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-15" />
        <Container className="relative z-10">
          <motion.div
            initial="hidden" whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="w-6 h-6 text-secondary-500" />
              <h3 className="text-xl font-display font-bold text-white">Travel Tips</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-6 text-sm text-neutral-400 leading-relaxed">
              <p>Arrange your flight as soon as you know your report date. Be prepared for fatigue due to time changes.</p>
              <p>Be well rested. Eat lightly and drink plenty of water. Wear layers of clothing to adapt to temperature changes.</p>
              <p>Label your baggage inside and out with your name and both your home and U.S. addresses.</p>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-900">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-2">Preparing to Travel?</h2>
              <p className="text-neutral-300">Check our pre-arrival guide for everything you need before your journey.</p>
            </div>
            <Link
              to="/student-life/pre-arrival"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-secondary-500 hover:bg-secondary-400 text-primary-950 font-bold text-sm rounded-lg transition-all duration-200 shadow-lg shadow-secondary-500/20 flex-shrink-0"
            >
              Pre-Arrival Guide <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
};
