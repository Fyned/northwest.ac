import { Link } from 'react-router-dom';
import { Container } from '../../components/common/Container';
import { PageHeader } from '../../components/common/PageHeader';
import { SmartImage } from '../../components/common/SmartImage';
import { CheckCircle, Map, FileText, Home, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

import preArrivalImg from '../../assets/images/student-life.jpg';

const registrationBenefits = [
  'Attend lectures & seminars',
  'Receive tuition',
  'Access library facilities',
  'Use campus Wi-Fi & IT services',
];

export const PreArrival = () => {
  return (
    <div className="bg-white min-h-screen font-sans">
      <PageHeader
        title="Before You Get Here"
        subtitle="Preparation Guide"
        description="If you decide to come and study with us, find everything you need to prepare for your arrival."
      />

      {/* Welcome Guide */}
      <section className="section-padding bg-white">
        <Container>
          <motion.div
            initial="hidden" whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeInUp}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <SmartImage
              src={preArrivalImg}
              alt="Students on Campus"
              className="rounded-2xl shadow-elevated w-full"
              aspectRatio="landscape"
              placeholderText="Campus Life"
            />
            <div className="space-y-5">
              <h2 className="text-3xl font-display font-bold text-primary-900">Your Welcome Guide</h2>
              <div className="h-1 w-16 bg-secondary-500 rounded-full" />
              <p className="text-neutral-600 leading-relaxed">
                We have prepared resources to help you find your way around, including maps and information on Welcome events (Get Engaged).
                You&apos;ll also find our Student Charter which explains what you can expect of us, and what we expect of you.
              </p>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Important Steps */}
      <section className="section-padding bg-neutral-50">
        <Container>
          <motion.div
            initial="hidden" whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid lg:grid-cols-2 gap-6"
          >
            {/* Registering Online */}
            <motion.div variants={fadeInUp} className="bg-white p-7 rounded-xl border border-neutral-200 border-t-4 border-t-secondary-500">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-secondary-50 rounded-xl flex items-center justify-center">
                  <FileText className="w-5 h-5 text-secondary-600" />
                </div>
                <h3 className="text-lg font-bold text-primary-900">Registering Online</h3>
              </div>
              <p className="text-sm text-neutral-600 mb-4 leading-relaxed">
                You&apos;ll receive details of how to register in your Welcome email from our Admissions Office once you&apos;ve met the terms of your offer.
              </p>
              <div className="bg-neutral-50 p-4 rounded-lg">
                <p className="text-xs font-bold text-primary-800 mb-3">Why Register?</p>
                <ul className="space-y-2">
                  {registrationBenefits.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-neutral-600">
                      <CheckCircle className="w-3.5 h-3.5 text-secondary-500 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Accommodation */}
            <motion.div variants={fadeInUp} className="bg-white p-7 rounded-xl border border-neutral-200 border-t-4 border-t-primary-600">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-primary-50 rounded-xl flex items-center justify-center">
                  <Home className="w-5 h-5 text-primary-900" />
                </div>
                <h3 className="text-lg font-bold text-primary-900">Student Accommodation</h3>
              </div>
              <p className="text-sm text-neutral-600 mb-6 leading-relaxed">
                If you&apos;re moving into our university-managed accommodation, you&apos;ll need to pre-book your arrival slot to ensure a smooth move-in process.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary-900 hover:bg-primary-800 text-white font-bold text-sm rounded-lg transition-colors"
              >
                View Accommodation Details <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* Campus Maps */}
      <section className="section-padding bg-white">
        <Container>
          <motion.div
            initial="hidden" whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="bg-secondary-50 border border-secondary-100 p-7 rounded-xl flex items-start gap-4"
          >
            <div className="w-12 h-12 bg-secondary-100 rounded-xl flex items-center justify-center flex-shrink-0">
              <Map className="w-6 h-6 text-secondary-600" />
            </div>
            <div>
              <h4 className="font-bold text-lg text-primary-900 mb-2">Campus Maps</h4>
              <p className="text-sm text-neutral-700 mb-3">
                Don&apos;t get lost on your first day! Download our campus maps to find your way around lecture halls, libraries, and student centers.
              </p>
              <span className="text-secondary-700 font-bold text-sm hover:underline cursor-pointer">
                Download PDF Map &rarr;
              </span>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-900">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-2">Ready for Your First Week?</h2>
              <p className="text-neutral-300">Find out what happens during Welcome Week at UNW.</p>
            </div>
            <Link
              to="/student-life/first-week"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-secondary-500 hover:bg-secondary-400 text-primary-950 font-bold text-sm rounded-lg transition-all duration-200 shadow-lg shadow-secondary-500/20 flex-shrink-0"
            >
              Welcome Week <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
};
