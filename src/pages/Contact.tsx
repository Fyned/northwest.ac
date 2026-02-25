import { Link } from 'react-router-dom';
import { Container } from '../components/common/Container';
import { PageHeader } from '../components/common/PageHeader';
import { Phone, Mail, MapPin, Clock, ArrowRight, Send } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export const Contact = () => {
  return (
    <div className="bg-white min-h-screen font-sans">
      <PageHeader
        title="Contact Us"
        subtitle="Get in Touch"
        description="We are here to answer your questions and guide you on your academic journey."
      />

      {/* Form & Info */}
      <section className="section-padding bg-white">
        <Container>
          <motion.div
            initial="hidden" whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto"
          >
            {/* Contact Form */}
            <motion.div variants={fadeInUp} className="bg-white p-7 rounded-xl border border-neutral-200">
              <h2 className="text-2xl font-display font-bold text-primary-900 mb-6">Send us a Message</h2>
              <form className="space-y-5" aria-label="Contact form">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="contact-fname" className="block text-sm font-bold text-neutral-700 mb-2">First Name</label>
                    <input
                      id="contact-fname"
                      type="text"
                      autoComplete="given-name"
                      className="w-full px-4 py-3 rounded-lg border border-neutral-200 bg-neutral-50 focus:ring-2 focus:ring-primary-900/20 focus:border-primary-900 outline-none transition-all text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-lname" className="block text-sm font-bold text-neutral-700 mb-2">Last Name</label>
                    <input
                      id="contact-lname"
                      type="text"
                      autoComplete="family-name"
                      className="w-full px-4 py-3 rounded-lg border border-neutral-200 bg-neutral-50 focus:ring-2 focus:ring-primary-900/20 focus:border-primary-900 outline-none transition-all text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-sm font-bold text-neutral-700 mb-2">Email Address</label>
                  <input
                    id="contact-email"
                    type="email"
                    autoComplete="email"
                    className="w-full px-4 py-3 rounded-lg border border-neutral-200 bg-neutral-50 focus:ring-2 focus:ring-primary-900/20 focus:border-primary-900 outline-none transition-all text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="contact-subject" className="block text-sm font-bold text-neutral-700 mb-2">Subject</label>
                  <select
                    id="contact-subject"
                    className="w-full px-4 py-3 rounded-lg border border-neutral-200 bg-neutral-50 focus:ring-2 focus:ring-primary-900/20 focus:border-primary-900 outline-none transition-all text-sm"
                  >
                    <option value="">Select a topic...</option>
                    <option value="admissions">Admissions</option>
                    <option value="academic">Academic Inquiry</option>
                    <option value="financial">Financial Aid</option>
                    <option value="international">International Students</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="contact-message" className="block text-sm font-bold text-neutral-700 mb-2">Message</label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-neutral-200 bg-neutral-50 focus:ring-2 focus:ring-primary-900/20 focus:border-primary-900 outline-none transition-all text-sm resize-none"
                  />
                </div>
                <button
                  type="button"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary-900 hover:bg-primary-800 text-white font-bold text-sm rounded-lg transition-colors w-full justify-center"
                >
                  <Send className="w-4 h-4" /> Send Message
                </button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={fadeInUp} className="space-y-6">
              <div className="bg-primary-900 text-white p-7 rounded-xl">
                <h3 className="text-lg font-bold mb-6 border-b border-white/10 pb-4">Contact Information</h3>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <Phone className="w-5 h-5 text-secondary-500 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-neutral-400 text-xs uppercase tracking-wider mb-1">Toll Free (USA/Canada)</p>
                      <p className="font-bold">1-800-UNW-8960</p>
                      <p className="font-bold">1-800-869-8960</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="w-5 h-5 text-secondary-500 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-neutral-400 text-xs uppercase tracking-wider mb-1">International</p>
                      <p className="font-bold">+1-718-250-4645</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="w-5 h-5 text-secondary-500 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-neutral-400 text-xs uppercase tracking-wider mb-1">General Inquiries</p>
                      <p className="font-bold">info@northwest.ac</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin className="w-5 h-5 text-secondary-500 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-neutral-400 text-xs uppercase tracking-wider mb-1">Mailing Address</p>
                      <p className="font-medium text-sm">45 Main Street, Ste 309, #264</p>
                      <p className="font-medium text-sm">Brooklyn, NY 11201, USA</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl border border-neutral-200 flex items-center gap-4">
                <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary-900" />
                </div>
                <div>
                  <h4 className="font-bold text-primary-900 text-sm">Office Hours</h4>
                  <p className="text-neutral-600 text-sm">Monday - Friday: 9:00 AM - 5:00 PM (EST)</p>
                </div>
              </div>

              <div className="bg-secondary-50 p-5 rounded-xl border border-secondary-100">
                <h4 className="font-bold text-primary-900 text-sm mb-2">Quick Links</h4>
                <div className="space-y-2">
                  <Link to="/apply/undergraduate" className="text-secondary-600 font-bold text-sm flex items-center gap-1 hover:underline">
                    Apply Now <ArrowRight className="w-3 h-3" />
                  </Link>
                  <Link to="/international/how-to-apply" className="text-secondary-600 font-bold text-sm flex items-center gap-1 hover:underline">
                    International Students <ArrowRight className="w-3 h-3" />
                  </Link>
                  <Link to="/student-life/fees" className="text-secondary-600 font-bold text-sm flex items-center gap-1 hover:underline">
                    Tuition & Fees <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-900">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-2">Ready to Start Your Journey?</h2>
              <p className="text-neutral-300">Explore our programmes and take the first step towards your future.</p>
            </div>
            <Link
              to="/academics"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-secondary-500 hover:bg-secondary-400 text-primary-950 font-bold text-sm rounded-lg transition-all duration-200 shadow-lg shadow-secondary-500/20 flex-shrink-0"
            >
              Explore Programmes <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
};
