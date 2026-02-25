import { Link } from 'react-router-dom';
import { Container } from '../../components/common/Container';
import { PageHeader } from '../../components/common/PageHeader';
import { SmartImage } from '../../components/common/SmartImage';
import { CheckCircle, TrendingUp, Users, Building2, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

import corporateImg from '../../assets/images/corporate-meeting.jpg';
import { fadeInUp, stagger } from '../../utils/animations';

const supportAreas = [
  'Problem-solving business issues to improve efficiency and aid innovation',
  'Cutting-edge research to develop new products or new techniques',
  'Proof of concept or proof of market projects to establish viability',
  'Laboratory or workshop testing, data analysis, and computer simulation',
  'Conference, exhibition and meeting accommodation - high class facilities',
  'Performance space, recording studios, mock court rooms and hospital wards',
  'Short courses to improve productivity & staff expertise',
];

export const Fundings = () => {
  return (
    <div className="bg-white min-h-screen font-sans">
      <PageHeader
        title="Fundings for Growth"
        subtitle="Business Support"
        description="Every year we help at least 2,000 organisations with knowledge transfer: turning technology and skills into innovative commercial products."
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
              src={corporateImg}
              alt="Business Meeting"
              className="rounded-2xl shadow-elevated w-full"
              aspectRatio="wide"
              placeholderText="Corporate Strategy"
            />
            <div className="space-y-5">
              <h2 className="text-3xl font-display font-bold text-primary-900">Committed to Local Business</h2>
              <div className="h-1 w-16 bg-secondary-500 rounded-full" />
              <p className="text-neutral-600 leading-relaxed">
                We are committed to supporting our local business communities and have a team of experienced business development managers
                to advise on the best solution for your organisation.
              </p>
              <p className="text-neutral-600 leading-relaxed">
                We work closely with a range of partner organisations: local authorities, professional institutes, business networks,
                and government departments to support and deliver relevant services.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="bg-primary-50 p-4 rounded-lg border border-primary-100 text-center">
                  <Users className="w-7 h-7 text-primary-900 mx-auto mb-2" />
                  <p className="font-bold text-primary-900">2,000+</p>
                  <p className="text-xs text-neutral-600">Organisations Helped</p>
                </div>
                <div className="bg-secondary-50 p-4 rounded-lg border border-secondary-100 text-center">
                  <Building2 className="w-7 h-7 text-secondary-600 mx-auto mb-2" />
                  <p className="font-bold text-primary-900">Network</p>
                  <p className="text-xs text-neutral-600">Local Authorities</p>
                </div>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Support Areas */}
      <section className="section-padding bg-neutral-50">
        <Container>
          <motion.div
            initial="hidden" whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid lg:grid-cols-3 gap-6"
          >
            <motion.div variants={fadeInUp} className="lg:col-span-2 bg-white p-7 rounded-xl border border-neutral-200">
              <div className="flex items-center gap-3 mb-5">
                <TrendingUp className="w-6 h-6 text-secondary-500" />
                <h3 className="text-lg font-bold text-primary-900">How We Can Help</h3>
              </div>
              <ul className="space-y-3">
                {supportAreas.map((area, i) => (
                  <li key={i} className="flex items-start gap-2 p-3 rounded-lg hover:bg-neutral-50 transition-colors text-sm text-neutral-700 font-medium">
                    <CheckCircle className="w-4 h-4 text-secondary-500 mt-0.5 flex-shrink-0" />
                    {area}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-primary-900 p-7 rounded-xl text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-secondary-500/20 rounded-full -mr-20 -mt-20 blur-3xl" />
              <h3 className="text-lg font-display font-bold mb-4 relative z-10">Expert Help</h3>
              <p className="text-primary-200 text-sm leading-relaxed mb-6 relative z-10">
                Our business development managers will match your business requirement with the right expertise,
                develop a proposal and assist in writing a research bid to secure funding support.
              </p>
              <Link
                to="/contact"
                className="relative z-10 inline-flex items-center gap-2 px-5 py-2.5 bg-secondary-500 hover:bg-secondary-400 text-primary-950 font-bold text-sm rounded-lg transition-colors w-full justify-center"
              >
                Get Support <ArrowRight className="w-4 h-4" />
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
              <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-2">Looking for Expert Consultancy?</h2>
              <p className="text-neutral-300">Access our team of over 100 academic experts for your business needs.</p>
            </div>
            <Link
              to="/business/experts"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-secondary-500 hover:bg-secondary-400 text-primary-950 font-bold text-sm rounded-lg transition-all duration-200 shadow-lg shadow-secondary-500/20 flex-shrink-0"
            >
              Access Our Experts <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
};
