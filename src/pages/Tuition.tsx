import { Link } from 'react-router-dom';
import { Container } from '../components/common/Container';
import { PageHeader } from '../components/common/PageHeader';
import { SmartImage } from '../components/common/SmartImage';
import { CreditCard, Calendar, Globe, DollarSign, ShieldCheck, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

import financeImg from '../assets/images/corporate-meeting.jpg';
import { fadeInUp, stagger } from '../utils/animations';

const paymentOptions = [
  {
    title: 'Student Loans',
    icon: DollarSign,
    color: 'secondary',
    desc: 'Full-time US undergraduate students can defer tuition fee payments by taking out a Student Loan for Tuition fees.',
    cta: { label: 'Learn about Financial Aid', href: '/contact' },
  },
  {
    title: 'Pay by Instalments',
    icon: Calendar,
    color: 'primary',
    desc: 'If you choose not to defer, you can pay your fees in instalments. You have the option to pay in three or six instalments.',
  },
  {
    title: 'Recurring Card Payment',
    icon: CreditCard,
    color: 'amber',
    desc: 'Set up a recurring card payment with your credit or debit card for hassle-free instalment payments.',
  },
];

export const Tuition = () => {
  const bgMap: Record<string, string> = { secondary: 'bg-secondary-50', primary: 'bg-primary-50', amber: 'bg-amber-50' };
  const iconMap: Record<string, string> = { secondary: 'text-secondary-600', primary: 'text-primary-900', amber: 'text-amber-600' };
  const borderMap: Record<string, string> = { secondary: 'border-t-secondary-500', primary: 'border-t-primary-600', amber: 'border-t-amber-500' };

  return (
    <div className="bg-white min-h-screen font-sans">
      <PageHeader
        title="Fee Payments"
        subtitle="Financial Services"
        description="Flexible payment options to support your education."
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
              <h2 className="text-3xl font-display font-bold text-primary-900">Managing Your Fees</h2>
              <div className="h-1 w-16 bg-secondary-500 rounded-full" />
              <p className="text-neutral-600 leading-relaxed">
                We understand that managing finances is a crucial part of your university experience.
                We offer various methods for fee payment, including student loans, instalments, and direct payments.
              </p>
              <div className="flex items-center gap-2 text-sm font-bold text-secondary-600">
                <ShieldCheck className="w-5 h-5" />
                <span>Secure & Flexible Payment Gateway</span>
              </div>
            </div>
            <SmartImage
              src={financeImg}
              alt="Financial Planning"
              className="rounded-2xl shadow-elevated w-full"
              aspectRatio="wide"
              placeholderText="Finance & Payments"
            />
          </motion.div>
        </Container>
      </section>

      {/* Payment Options */}
      <section className="section-padding bg-neutral-50">
        <Container>
          <motion.div
            initial="hidden" whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-8"
          >
            <p className="text-secondary-600 font-bold text-sm uppercase tracking-wider mb-2">Domestic</p>
            <h2 className="text-2xl font-display font-bold text-primary-900">US Students</h2>
          </motion.div>
          <motion.div
            initial="hidden" whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-3 gap-6"
          >
            {paymentOptions.map((opt, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className={`bg-white p-7 rounded-xl border border-neutral-200 border-t-4 ${borderMap[opt.color]} hover:shadow-card transition-all duration-300`}
              >
                <div className={`w-12 h-12 ${bgMap[opt.color]} rounded-xl flex items-center justify-center mb-5`}>
                  <opt.icon className={`w-6 h-6 ${iconMap[opt.color]}`} />
                </div>
                <h3 className="text-lg font-bold text-primary-900 mb-3">{opt.title}</h3>
                <p className="text-sm text-neutral-600 leading-relaxed mb-3">{opt.desc}</p>
                {opt.cta && (
                  <Link to={opt.cta.href} className="text-secondary-600 font-bold text-sm flex items-center gap-1 hover:underline">
                    {opt.cta.label} <ArrowRight className="w-3 h-3" />
                  </Link>
                )}
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* International Students */}
      <section className="py-16 md:py-20 bg-primary-950 relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-15" />
        <Container className="relative z-10">
          <motion.div
            initial="hidden" whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="flex flex-col md:flex-row items-center justify-between gap-6"
          >
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 bg-secondary-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <Globe className="w-7 h-7 text-secondary-500" />
              </div>
              <div>
                <h3 className="text-2xl font-display font-bold text-white mb-2">International Students</h3>
                <p className="text-neutral-400 text-sm max-w-md">
                  Please visit our International Students section for detailed information about paying your fees, deposit requirements, and transfer methods.
                </p>
              </div>
            </div>
            <Link
              to="/international/how-to-apply"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-secondary-500 hover:bg-secondary-400 text-primary-950 font-bold text-sm rounded-lg transition-all duration-200 shadow-lg shadow-secondary-500/20 flex-shrink-0"
            >
              International Fees Info <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-900">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-2">Need Financial Guidance?</h2>
              <p className="text-neutral-300">Our team is here to help you with any questions about fees and payments.</p>
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
