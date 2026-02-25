import { Link } from 'react-router-dom';
import { Container } from '../../components/common/Container';
import { PageHeader } from '../../components/common/PageHeader';
import { SmartImage } from '../../components/common/SmartImage';
import { CheckCircle, AlertCircle, Globe, HelpCircle, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

import admissionImg from '../../assets/images/student-life.jpg';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export const UndergraduateAdmissions = () => {
  return (
    <div className="bg-white min-h-screen font-sans">
      <PageHeader
        title="Undergraduate Admissions"
        subtitle="Join Our Community"
        description="UNW encourages applications from all individuals who have the capacity and determination to complete a degree program."
      />

      {/* Intro */}
      <section className="section-padding bg-white">
        <Container>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={fadeInUp}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div className="space-y-5">
              <h2 className="text-3xl font-display font-bold text-primary-900">Application for Admission</h2>
              <div className="h-1 w-16 bg-secondary-500 rounded-full" />
              <p className="text-neutral-600 leading-relaxed">
                We appreciate the opportunity to review your application to determine whether UNW is a good fit for you and, if it is, help you through the enrollment process.
              </p>
              <p className="text-neutral-600 leading-relaxed">
                Submitting your application begins the official part of the UNW enrollment process. We will review your application and contact you within two business days to discuss your status.
              </p>
            </div>
            <SmartImage
              src={admissionImg}
              alt="Students Applying"
              className="rounded-2xl shadow-elevated w-full"
              aspectRatio="landscape"
              placeholderText="Students Studying"
            />
          </motion.div>
        </Container>
      </section>

      {/* Freshman Details */}
      <section className="section-padding bg-neutral-50">
        <Container>
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              {/* Who is a Freshman? */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                className="bg-white p-7 rounded-xl border border-neutral-200"
              >
                <h3 className="text-lg font-bold text-primary-900 mb-3 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-secondary-500" />
                  Who is a Freshman Applicant?
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  Most students enter University Northwest as freshmen (first-year students) after graduating from high school.
                  If you have not attended another accredited college or university, you should apply as a freshman.
                  (Note: This does not apply to high school students who have taken courses at a college or university as part of their high school coursework.)
                </p>
              </motion.div>

              {/* Requirements */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                className="bg-white p-7 rounded-xl border border-neutral-200"
              >
                <h3 className="text-lg font-bold text-primary-900 mb-5">Freshman Application Requirements</h3>
                <ul className="space-y-3 mb-6">
                  {[
                    "A completed application.",
                    "A $65 non-refundable application fee.",
                    "A completed Admissions Essay.",
                    "An official high school transcript (to be sent by your guidance counselor).",
                    "A letter of recommendation from your guidance counselor.",
                    "Official SAT or ACT scores are optional."
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-neutral-600">
                      <CheckCircle className="w-4 h-4 text-secondary-500 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-100 text-sm text-blue-800">
                  <p className="flex items-start gap-2 mb-1">
                    <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <strong>Arts Programs Note:</strong>
                  </p>
                  <p className="ml-6">
                    If applying for Fine Arts, Music, Theatre, Dance, Communication Studies or Broadcasting, you are required to complete an interview, audition or portfolio review.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Admission Standards */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
              className="lg:col-span-1"
            >
              <div className="bg-white p-7 rounded-xl border border-neutral-200 h-full">
                <h3 className="text-lg font-bold text-primary-900 mb-5">Admission Standards</h3>
                <p className="text-sm text-neutral-600 mb-5 leading-relaxed">
                  University Of Northwest considers academic performance (GPA, rigor) as the most important factor. We also review letters of recommendation, essay, and extra-curricular engagement.
                </p>
                <div className="mb-6">
                  <h4 className="font-bold text-primary-800 text-sm mb-3 pb-2 border-b border-neutral-100">Required Coursework (16 Units)</h4>
                  <ul className="space-y-2 text-xs text-neutral-600">
                    <li className="flex items-center gap-2"><span className="w-1 h-1 bg-secondary-500 rounded-full" />4 units of English</li>
                    <li className="flex items-center gap-2"><span className="w-1 h-1 bg-secondary-500 rounded-full" />3 units of Mathematics</li>
                    <li className="flex items-center gap-2"><span className="w-1 h-1 bg-secondary-500 rounded-full" />2 units of the same foreign language</li>
                    <li className="flex items-center gap-2"><span className="w-1 h-1 bg-secondary-500 rounded-full" />2 units of a laboratory science</li>
                    <li className="flex items-center gap-2"><span className="w-1 h-1 bg-secondary-500 rounded-full" />2 units of social sciences</li>
                    <li className="flex items-center gap-2"><span className="w-1 h-1 bg-secondary-500 rounded-full" />3 additional units</li>
                  </ul>
                </div>
                <div className="mb-6">
                  <h4 className="font-bold text-primary-800 text-sm mb-3 pb-2 border-b border-neutral-100">Challenging Curriculum</h4>
                  <ul className="space-y-2 text-xs text-neutral-600">
                    <li className="flex items-center gap-2"><span className="w-1 h-1 bg-primary-400 rounded-full" />Math beyond Algebra II</li>
                    <li className="flex items-center gap-2"><span className="w-1 h-1 bg-primary-400 rounded-full" />Lab science beyond Chemistry</li>
                    <li className="flex items-center gap-2"><span className="w-1 h-1 bg-primary-400 rounded-full" />3rd/4th year foreign language</li>
                    <li className="flex items-center gap-2"><span className="w-1 h-1 bg-primary-400 rounded-full" />AP &amp; Honors courses</li>
                  </ul>
                </div>
                <div className="pt-5 border-t border-neutral-100 text-center">
                  <span className="block text-2xl font-bold font-display text-primary-900">3.2+</span>
                  <span className="text-xs text-neutral-500">Target GPA (4.0 scale)</span>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* International */}
      <section className="py-16 md:py-20 bg-primary-950 relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-15" />
        <Container className="relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <div className="flex items-center gap-3 mb-8">
              <Globe className="w-8 h-8 text-secondary-500" />
              <h2 className="text-2xl font-display font-bold text-white">International Student Admission</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <h4 className="font-bold text-secondary-400 mb-4 uppercase tracking-wider text-xs">Requirements</h4>
                <ul className="space-y-3 text-neutral-300 text-sm">
                  {[
                    "A completed application (International type).",
                    "A $65 non-refundable application fee.",
                    "Academic evaluation and English translation of all coursework."
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-secondary-500 rounded-full mt-1.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-secondary-400 mb-4 uppercase tracking-wider text-xs">Language Competency</h4>
                <div className="bg-white/10 p-5 rounded-xl backdrop-blur-sm border border-white/10">
                  <p className="mb-3 font-bold text-white text-sm">TOEFL Score Requirements:</p>
                  <ul className="space-y-1.5 text-neutral-300 text-sm mb-3">
                    <li>80 (Internet-based)</li>
                    <li>213 (Computer-based)</li>
                    <li>550 (Paper-based)</li>
                  </ul>
                  <p className="text-sm text-white"><strong>IELTS:</strong> A score of 6.5 or better is also acceptable.</p>
                  <p className="text-xs text-neutral-400 mt-2 italic">
                    *Waived if native English speaker or completed college English Comp with &apos;C&apos; or better.
                  </p>
                </div>
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
              <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-2">Start Your Application</h2>
              <p className="text-neutral-300">Take the first step toward your future at University of NorthWest.</p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-secondary-500 hover:bg-secondary-400 text-primary-950 font-bold text-sm rounded-lg transition-all duration-200 shadow-lg shadow-secondary-500/20 flex-shrink-0"
            >
              Contact Admissions <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
};
