import { Link } from 'react-router-dom';
import { Container } from '../../components/common/Container';
import { PageHeader } from '../../components/common/PageHeader';
import { SmartImage } from '../../components/common/SmartImage';
import { Award, FileText, GraduationCap, CheckCircle, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

import researchImg from '../../assets/images/research-lab.jpg';
import { fadeInUp, stagger } from '../../utils/animations';

const doctoralSubjects = [
  'Science and Technology',
  'Business Administration (DBA)',
  'Education (EdD)',
  'Health and Social Care',
  'Laws',
  'Practical Theology',
];

const trainingTopics = [
  'Philosophy & methodology of research',
  'Formulating research questions',
  'Data collection & analysis methods',
  'Research ethics',
];

export const ResearchDegrees = () => {
  return (
    <div className="bg-white min-h-screen font-sans">
      <PageHeader
        title="Research Degrees"
        subtitle="Advanced Study"
        description="Explore our range of research degree options, from PhDs to Professional Doctorates, designed for ambitious scholars and professionals."
      />

      {/* Degree Types */}
      <section className="section-padding bg-white">
        <Container>
          <motion.div
            initial="hidden" whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeInUp}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div className="space-y-6">
              <h2 className="text-3xl font-display font-bold text-primary-900">Degree Types</h2>
              <div className="h-1 w-16 bg-secondary-500 rounded-full" />

              <div className="space-y-5">
                <div>
                  <h3 className="font-bold text-lg text-primary-900 flex items-center gap-2 mb-2">
                    <GraduationCap className="w-5 h-5 text-secondary-600" />
                    PhD & MPhil
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    PhD candidates critically investigate an approved topic resulting in an independent contribution to knowledge.
                    Full-time PhD students normally complete within 3-4 years, whilst part-time candidates may take up to 6 years.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-lg text-primary-900 flex items-center gap-2 mb-2">
                    <FileText className="w-5 h-5 text-secondary-600" />
                    PhD by Published Work
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    Candidates who have already published work demonstrating an original contribution to knowledge
                    may submit an application to establish a case to submit a thesis for examination.
                  </p>
                </div>
              </div>
            </div>
            <SmartImage
              src={researchImg}
              alt="Research Degrees"
              className="rounded-2xl shadow-elevated w-full"
              aspectRatio="wide"
              placeholderText="Academic Research"
            />
          </motion.div>
        </Container>
      </section>

      {/* Professional Doctorate & Training */}
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
                <Award className="w-6 h-6 text-primary-900" />
                <h3 className="text-lg font-bold text-primary-900">Professional Doctorate</h3>
              </div>
              <p className="text-sm text-neutral-600 leading-relaxed mb-5">
                Designed for busy senior professionals, focusing on the candidate&apos;s own professional practice.
                Stage 1 involves workshops on methodology, leading to Stage 2: original research and thesis.
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {doctoralSubjects.map((subject, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-primary-800 bg-primary-50 p-3 rounded-lg">
                    <CheckCircle className="w-4 h-4 text-secondary-500 flex-shrink-0" />
                    {subject}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-secondary-50 p-7 rounded-xl border border-secondary-100">
              <h3 className="text-lg font-bold text-primary-900 mb-4">Training Programme</h3>
              <p className="text-sm text-neutral-700 mb-5 leading-relaxed">
                Developed for potential research candidates who wish to be considered for entry but may lack research experience.
              </p>
              <ul className="space-y-3 mb-6">
                {trainingTopics.map((topic, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-neutral-600">
                    <CheckCircle className="w-4 h-4 text-secondary-500 mt-0.5 flex-shrink-0" />
                    {topic}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white hover:bg-neutral-50 text-primary-900 font-bold text-sm rounded-lg border border-neutral-200 transition-colors w-full justify-center"
              >
                Download Application Form
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
              <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-2">Explore Research Areas</h2>
              <p className="text-neutral-300">Discover the wide range of disciplines where we offer research supervision.</p>
            </div>
            <Link
              to="/research/support"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-secondary-500 hover:bg-secondary-400 text-primary-950 font-bold text-sm rounded-lg transition-all duration-200 shadow-lg shadow-secondary-500/20 flex-shrink-0"
            >
              Research Support <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
};
