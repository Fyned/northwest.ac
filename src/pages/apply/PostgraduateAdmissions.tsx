import { Link } from 'react-router-dom';
import { Container } from '../../components/common/Container';
import { PageHeader } from '../../components/common/PageHeader';
import { SmartImage } from '../../components/common/SmartImage';
import { CheckCircle, Calendar, FileText, Award, AlertCircle, ArrowRight, PenTool, Users } from 'lucide-react';
import { motion } from 'framer-motion';

import gradImg from '../../assets/images/graduation.jpg';

export const PostgraduateAdmissions = () => {
  return (
    <div className="bg-white min-h-screen font-sans">
      <PageHeader
        title="Postgraduate Admissions"
        subtitle="Take the Next Step"
        description="Detailed information on application requirements, deadlines, and procedures for our graduate programs."
      />

      {/* Intro + Deadlines */}
      <section className="section-padding bg-white">
        <Container>
          <motion.div
            initial="hidden" whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeInUp}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div className="space-y-5">
              <div className="flex items-center gap-3 mb-1">
                <Calendar className="w-6 h-6 text-secondary-500" />
                <h2 className="text-3xl font-display font-bold text-primary-900">Application Deadlines</h2>
              </div>
              <div className="h-1 w-16 bg-secondary-500 rounded-full" />
              <ul className="space-y-4 text-neutral-600 leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-secondary-500 rounded-full mt-2 flex-shrink-0" />
                  Most UNW graduate programs do not have specific deadlines. We recommend submitting early.
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-secondary-500 rounded-full mt-2 flex-shrink-0" />
                  Registration begins several months before the start of a term.
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-secondary-500 rounded-full mt-2 flex-shrink-0" />
                  Please allow <strong>4-6 weeks</strong> for us to review your completed application.
                </li>
              </ul>
              <div className="p-4 bg-primary-50 rounded-lg border border-primary-100 text-sm text-primary-800 flex items-start gap-2">
                <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                You will receive a letter from UNW informing you of your admission decision. We do not release decisions over the phone.
              </div>
            </div>
            <SmartImage
              src={gradImg}
              alt="Graduate Students"
              className="rounded-2xl shadow-elevated w-full"
              aspectRatio="portrait"
              placeholderText="Postgraduate Students"
            />
          </motion.div>
        </Container>
      </section>

      {/* Official Transcripts */}
      <section className="section-padding bg-neutral-50">
        <Container>
          <motion.div
            initial="hidden" whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="bg-white p-7 md:p-10 rounded-xl border border-neutral-200"
          >
            <h3 className="text-xl font-bold text-primary-900 mb-6 flex items-center gap-3">
              <FileText className="w-6 h-6 text-secondary-500" />
              Official Transcripts
            </h3>
            <motion.div
              initial="hidden" whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="grid md:grid-cols-2 gap-x-10 gap-y-3"
            >
              {[
                "Official transcripts are required from each school you have attended.",
                "It is the applicant's responsibility to arrange for transcripts to be sent to UNW.",
                "Transcripts must bear the institution's raised insignia and be individually sealed.",
                "If you studied under a maiden/prior name, indicate both names.",
                "Do not request a transcript from University of Northwest if listed as a previous institution.",
                "Including your U.S. Social Security number will expedite processing.",
                "Applicants with non-U.S. degrees need not submit transcripts (International rules apply).",
              ].map((item, idx) => (
                <motion.div key={idx} variants={fadeInUp} className="flex items-start gap-3 text-sm text-neutral-600">
                  <CheckCircle className="w-4 h-4 text-secondary-500 mt-0.5 flex-shrink-0" />
                  {item}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* Test Scores */}
      <section className="py-16 md:py-20 bg-primary-950 relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-15" />
        <Container className="relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <div className="flex items-center gap-3 mb-4">
              <Award className="w-8 h-8 text-secondary-500" />
              <h2 className="text-2xl font-display font-bold text-white">Standardized Test Scores</h2>
            </div>
            <p className="text-neutral-400 mb-8 max-w-3xl">
              The chart below provides important information regarding the GRE, GMAT, MAT, TOEFL and IELTS institutional codes for score reporting.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="py-4 px-6 text-secondary-400 font-bold uppercase tracking-wider text-xs">Test</th>
                    <th className="py-4 px-6 text-secondary-400 font-bold uppercase tracking-wider text-xs">Institutional Code</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {[
                    { test: 'GRE / TOEFL / IELTS', code: '2520' },
                    { test: 'Miller Analogy Test (MAT)', code: '1400' },
                    { test: 'GMAT: Part time MBA', code: '1T2-NK-80' },
                    { test: 'GMAT: Full time MBA', code: '1T2-NK-86' },
                  ].map((row, idx) => (
                    <tr key={idx} className="hover:bg-white/5 transition-colors">
                      <td className="py-4 px-6 text-neutral-200 font-medium text-sm">{row.test}</td>
                      <td className="py-4 px-6 font-mono text-white text-sm">{row.code}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Essays & Recommendations */}
      <section className="section-padding bg-neutral-50">
        <Container>
          <motion.div
            initial="hidden" whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-2 gap-6"
          >
            <motion.div variants={fadeInUp} className="bg-white p-7 rounded-xl border border-neutral-200">
              <div className="w-10 h-10 rounded-xl bg-secondary-50 flex items-center justify-center mb-4">
                <PenTool className="w-5 h-5 text-secondary-600" />
              </div>
              <h4 className="font-bold text-primary-900 text-lg mb-3">Essays / Statements</h4>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Many of our programs require a written statement or an essay. The statement, in which you present your reasons for your proposed graduate studies, is an important component of the admission decision process. Applications will not be reviewed without it.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white p-7 rounded-xl border border-neutral-200">
              <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center mb-4">
                <Users className="w-5 h-5 text-primary-900" />
              </div>
              <h4 className="font-bold text-primary-900 text-lg mb-3">Letters of Recommendation</h4>
              <p className="text-neutral-600 text-sm leading-relaxed mb-3">
                Recommendations from professors in your undergraduate major field of study who are familiar with your academic work are ideal.
              </p>
              <p className="text-neutral-600 text-sm leading-relaxed">
                If you have been out of school for a considerable period, submit letters from employers or supervisors. Friends and family are not appropriate sources.
              </p>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-900">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-2">Begin Your Graduate Journey</h2>
              <p className="text-neutral-300">Apply for our postgraduate programmes and advance your career.</p>
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
