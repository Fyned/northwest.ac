import { Container } from '../components/common/Container';
import { PageHeader } from '../components/common/PageHeader';
import { CheckSquare, Server, Code, Users, ClipboardCheck, FileText, Send } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const services = [
  { title: 'Interface Support', icon: CheckSquare, color: 'secondary', desc: 'Comprehensive testing and validation of user interfaces.' },
  { title: 'Application Support', icon: Server, color: 'primary', desc: 'Ongoing maintenance and validation for enterprise applications.' },
  { title: 'Project Planning', icon: ClipboardCheck, color: 'amber', desc: 'Strategic validation roadmaps and project milestones.' },
  { title: 'Software Engineering', icon: Code, color: 'secondary', desc: 'Rigorous code validation and quality assurance processes.' },
  { title: 'Personnel Support', icon: Users, color: 'primary', desc: 'Training and support for technical staff.' },
];

export const ValidationServices = () => {
  const bgMap: Record<string, string> = { secondary: 'bg-secondary-50', primary: 'bg-primary-50', amber: 'bg-amber-50' };
  const iconMap: Record<string, string> = { secondary: 'text-secondary-600', primary: 'text-primary-900', amber: 'text-amber-600' };

  return (
    <div className="bg-white min-h-screen font-sans">
      <PageHeader
        title="Validation Services"
        subtitle="Quality Assurance"
        description="Services from configuration to validation. We ensure your systems meet the highest standards of quality and compliance."
      />

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <Container>
          <motion.div
            initial="hidden" whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-0"
          >
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="flex items-start gap-4 p-5 rounded-xl bg-white border border-neutral-200 hover:shadow-card transition-all duration-300"
              >
                <div className={`w-12 h-12 ${bgMap[service.color]} rounded-xl flex items-center justify-center flex-shrink-0`}>
                  <service.icon className={`w-6 h-6 ${iconMap[service.color]}`} />
                </div>
                <div>
                  <h3 className="font-bold text-primary-900 mb-1">{service.title}</h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Order Form */}
      <section className="section-padding bg-neutral-50">
        <Container>
          <motion.div
            initial="hidden" whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid lg:grid-cols-3 gap-8"
          >
            {/* Info Sidebar */}
            <motion.div variants={fadeInUp} className="lg:col-span-1">
              <div className="bg-primary-900 text-white p-7 rounded-xl sticky top-24">
                <FileText className="w-8 h-8 text-secondary-500 mb-4" />
                <h3 className="text-lg font-display font-bold mb-4">Order Form</h3>
                <p className="text-primary-200 text-sm leading-relaxed mb-6">
                  Fill out this application, and then send it with the required documents to initiate your validation service request.
                </p>
                <div className="border-t border-white/10 pt-5">
                  <p className="text-xs text-primary-400 uppercase tracking-wider font-bold mb-2">Need Help?</p>
                  <p className="font-bold">info@northwest.ac</p>
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div variants={fadeInUp} className="lg:col-span-2">
              <div className="bg-white p-7 md:p-10 rounded-xl border border-neutral-200">
                <h2 className="text-xl font-bold text-primary-900 mb-6">Application Details</h2>
                <form className="space-y-5" aria-label="Validation service application">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="vs-name" className="block text-sm font-bold text-neutral-700 mb-2">Full Name *</label>
                      <input id="vs-name" type="text" required autoComplete="name" className="w-full px-4 py-3 rounded-lg border border-neutral-200 bg-neutral-50 focus:ring-2 focus:ring-primary-900/20 focus:border-primary-900 outline-none transition-all text-sm" />
                    </div>
                    <div>
                      <label htmlFor="vs-email" className="block text-sm font-bold text-neutral-700 mb-2">Your Email *</label>
                      <input id="vs-email" type="email" required autoComplete="email" className="w-full px-4 py-3 rounded-lg border border-neutral-200 bg-neutral-50 focus:ring-2 focus:ring-primary-900/20 focus:border-primary-900 outline-none transition-all text-sm" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="vs-address" className="block text-sm font-bold text-neutral-700 mb-2">Full Shipping Address *</label>
                    <textarea id="vs-address" rows={3} required className="w-full px-4 py-3 rounded-lg border border-neutral-200 bg-neutral-50 focus:ring-2 focus:ring-primary-900/20 focus:border-primary-900 outline-none transition-all text-sm resize-none" />
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="vs-phone" className="block text-sm font-bold text-neutral-700 mb-2">Contact Phone Number *</label>
                      <input id="vs-phone" type="tel" required autoComplete="tel" className="w-full px-4 py-3 rounded-lg border border-neutral-200 bg-neutral-50 focus:ring-2 focus:ring-primary-900/20 focus:border-primary-900 outline-none transition-all text-sm" />
                    </div>
                    <div>
                      <label htmlFor="vs-degree" className="block text-sm font-bold text-neutral-700 mb-2">Degree & Specialization *</label>
                      <input id="vs-degree" type="text" required className="w-full px-4 py-3 rounded-lg border border-neutral-200 bg-neutral-50 focus:ring-2 focus:ring-primary-900/20 focus:border-primary-900 outline-none transition-all text-sm" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="vs-date" className="block text-sm font-bold text-neutral-700 mb-2">Date Issued *</label>
                      <input id="vs-date" type="date" required className="w-full px-4 py-3 rounded-lg border border-neutral-200 bg-neutral-50 focus:ring-2 focus:ring-primary-900/20 focus:border-primary-900 outline-none transition-all text-sm" />
                    </div>
                    <div>
                      <label htmlFor="vs-credits" className="block text-sm font-bold text-neutral-700 mb-2">Total Credits Earned *</label>
                      <input id="vs-credits" type="text" required className="w-full px-4 py-3 rounded-lg border border-neutral-200 bg-neutral-50 focus:ring-2 focus:ring-primary-900/20 focus:border-primary-900 outline-none transition-all text-sm" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="vs-institution" className="block text-sm font-bold text-neutral-700 mb-2">Name of the Education Institution *</label>
                    <input id="vs-institution" type="text" required className="w-full px-4 py-3 rounded-lg border border-neutral-200 bg-neutral-50 focus:ring-2 focus:ring-primary-900/20 focus:border-primary-900 outline-none transition-all text-sm" />
                  </div>

                  <div className="pt-2">
                    <button
                      type="button"
                      className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary-900 hover:bg-primary-800 text-white font-bold text-sm rounded-lg transition-colors"
                    >
                      <Send className="w-4 h-4" /> Send Application
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          </motion.div>
        </Container>
      </section>
    </div>
  );
};
