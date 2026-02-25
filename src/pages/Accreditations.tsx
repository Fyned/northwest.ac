import { Link } from 'react-router-dom';
import { Container } from '../components/common/Container';
import { PageHeader } from '../components/common/PageHeader';
import { ShieldCheck, CheckCircle, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const accreditations = [
  'Accreditation Governing Commission (AGC-USA)',
  'Commission for Consistent Learning (CCL-UK)',
  'American Library Association (ALA)',
  'International Accreditation Organization (IAO)',
  'American Council of United Nations University',
  'United Nations Association (UNA-USA)',
  'National Association of Distance Education & Open Learning in South Africa (NADEOSA)',
  'World Association of Persons with Disabilities (WAPD)',
  'International Council for Open and Distance Education (ICDE)',
];

export const Accreditations = () => {
  return (
    <div className="bg-white min-h-screen font-sans">
      <PageHeader
        title="Accreditations & Memberships"
        subtitle="Quality Assurance"
        description="University of NorthWest is proud to be recognized by and associated with leading international organizations."
      />

      {/* Intro */}
      <section className="section-padding bg-white">
        <Container>
          <motion.div
            initial="hidden" whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeInUp}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="w-16 h-16 bg-secondary-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <ShieldCheck className="w-8 h-8 text-secondary-600" />
            </div>
            <p className="text-neutral-600 leading-relaxed max-w-2xl mx-auto">
              Accreditation is a voluntary, independent review of educational programs to determine
              that the education provided is of uniform and sound quality. We continuously strive to maintain
              the highest standards of education and adhere to global quality assurance protocols.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Accreditations List */}
      <section className="section-padding bg-neutral-50">
        <Container>
          <motion.div
            initial="hidden" whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white rounded-xl border border-neutral-200 overflow-hidden">
              <div className="bg-primary-900 p-5 text-white">
                <h2 className="text-lg font-bold text-center">Recognized Bodies & Affiliations</h2>
              </div>
              <div className="p-7">
                <ul className="space-y-3">
                  {accreditations.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-neutral-50 transition-colors border-b border-neutral-100 last:border-0">
                      <CheckCircle className="w-5 h-5 text-secondary-500 flex-shrink-0 mt-0.5" />
                      <span className="text-primary-900 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-900">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-2">Learn More About UNW</h2>
              <p className="text-neutral-300">Discover our mission, vision, and commitment to academic excellence.</p>
            </div>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-secondary-500 hover:bg-secondary-400 text-primary-950 font-bold text-sm rounded-lg transition-all duration-200 shadow-lg shadow-secondary-500/20 flex-shrink-0"
            >
              About UNW <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
};
