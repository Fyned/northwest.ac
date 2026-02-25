import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../../components/common/Container';
import { PageHeader } from '../../components/common/PageHeader';
import { SmartImage } from '../../components/common/SmartImage';
import { Check, Search, BookOpen, ArrowRight, Award, Clock, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

import gradImg from '../../assets/images/graduation.jpg';
import { fadeInUp } from '../../utils/animations';
const degrees = [
  "Accounting – MSc",
  "Accounting and Finance – MSc",
  "Accounting (with Placement) – MSc",
  "Adult Critical Care Nursing – MSc",
  "Advanced Midwifery Practice – MSc",
  "Advanced Practice – MSc",
  "Advanced Pre-Hospital Trauma Care – MSc",
  "Animal Behaviour Applications for Conservation – MSc",
  "Applied Linguistics and TESOL – MA",
  "Applied Positive Psychology – MSc",
  "Applied Wildlife Conservation – MSc",
  "Biotechnology – MSc",
  "Cardiac Care – PG Cert",
  "Children and Young People – MSc",
  "Children's Book Illustration – MA",
  "Civil Engineering – MSc",
  "Clinical Child Psychology – MSc",
  "Cognitive and Clinical Neuroscience – MSc",
  "Community Specialist Practitioner (District Nursing) – PG Dip",
  "Computer Games Development (Art) – MA",
  "Computer Games Development (Computing) – MSc",
  "Computer Science – MSc",
  "Conservation of Buildings – MSc",
  "Construction Management – MSc",
  "Construction Management – Graduate Certificate",
  "Construction Project Management – MSc",
  "Creative Writing – MA",
  "Criminology – MA",
  "Critical Care – PG Cert",
  "Data Centre Leadership and Management – MA",
  "Dramatherapy – MA",
  "Early Childhood Education – MA",
  "Education – MA",
  "Educational Leadership and Management – MBA",
  "Electronic and Electrical Engineering – MSc",
  "Emergency Care – PG Cert",
  "Engineering Management – MSc",
  "English Literature – MA",
  "Entrepreneurial Management – MSc",
  "Family Therapy and Systemic Practice – PG Cert",
  "Fashion Design – MA",
  "Film and Television Production – MA",
  "Finance – MSc",
  "Fine Art – MA",
  "Forensic Science – MSc",
  "Foundations in Clinical Psychology – MSc",
  "Graphic Design and Typography – MA",
  "Healthcare Management – MSc",
  "Health Care Management – MBA",
  "Health Economics and Management – MSc",
  "Health Informatics – MSc",
  "Human Resource Management – MA",
  "Human Resource Management (CIPD Block Delivery) – PG Dip",
  "Human Resource Management (CIPD – day release) – PG Dip",
  "Human Resource Management MA Stage 3 only (Top-Up) – MA",
  "Illustration and Book Arts – MA",
  "Information and Communication Technology (Conversion) – MSc",
  "Information Systems Management – MBA",
  "Intercultural Communication – MA",
  "International Business – MSc",
  "International Business Law – LLM",
  "International Commercial Law – LLM",
  "International Hospitality and Tourism Management – MSc",
  "International Nursing Studies (with ONP) – MSc",
  "International Relations – MA",
  "International Social Welfare and Social Policy – MSc",
  "Leadership and Management – MA",
  "Learning and Teaching (Higher Education) – PG Cert",
  "Legal Practice Course – PG Dip",
  "Legal Practice (Top-Up) – LLM",
  "Magnetic Resonance Imaging – MSc",
  "Management – MSc",
  "Manufacturing Systems – MSc",
  "Marketing – MSc",
  "Master of Business Administration – MBA",
  "Mechanical Engineering – MSc",
  "Medical and Healthcare Education – MSc",
  "Medical Law and Ethics – LLM",
  "Medical Technology – MSc",
  "Mental Health – MSc",
  "Military Veterans and Families Studies – MSc",
  "Minimally Invasive and Robotic Surgery – MCh",
  "Mobile Telecommunications – MSc",
  "Music Therapy – MA",
  "Networking – PG Cert",
  "Network Security – MSc",
  "Orthopaedics – MCh",
  "Photography – MA",
  "Plastic and Aesthetic Surgery Practice – MCh",
  "Printmaking – MA",
  "Project Management – MSc",
  "Psychodrama (Top-Up) – MA",
  "Public Health – MSc",
  "Publishing – MA",
  "Research Methods in Psychology – MSc",
  "Social Work – MA",
  "Sociology – MA",
  "Specialist Community Public Health Nursing (Health Visiting or School Nursing) – PG Dip",
  "Sport and Exercise Science – MSc",
  "Student Affairs – MA",
  "Supply Chain Management – MSc",
  "Supply Chain Management (with Placement) – MSc",
  "Surgical Care Practice – MSc",
  "Sustainability – MSc",
  "TESOL and Materials Development – MA",
  "Tourism Management – MSc",
  "Town Planning – MSc",
  "Urban Design – MSc"
];

export const Postgraduate = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredDegrees = degrees.filter(degree =>
    degree.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-white min-h-screen font-sans">
      <PageHeader
        title="Postgraduate Study"
        subtitle="Advance Your Career"
        description="Take your expertise to the next level with our internationally recognised master's and professional programmes."
      />

      {/* Intro Section */}
      <section className="section-padding bg-white">
        <Container>
          <motion.div
            initial="hidden" whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeInUp}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <SmartImage
              src={gradImg}
              alt="Postgraduate Students"
              className="rounded-2xl shadow-elevated w-full"
              aspectRatio="wide"
              placeholderText="Graduation Ceremony"
            />
            <div className="space-y-6">
              <h2 className="text-3xl font-display font-bold text-primary-900">Master Your Future</h2>
              <div className="h-1 w-16 bg-secondary-500 rounded-full" />
              <p className="text-neutral-600 leading-relaxed">
                Postgraduate study is more challenging than undergraduate study; it requires commitment
                and the demonstration of more advanced study skills.
              </p>
              <p className="text-neutral-600 leading-relaxed">
                However, it is important to realise that postgraduate study requires greater independence,
                and students need to use their own initiative in completing course work and undertaking research projects.
              </p>
              <div className="grid sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 bg-purple-50 rounded-xl border border-purple-100 text-center">
                  <Award className="w-6 h-6 text-purple-600 mx-auto mb-2" />
                  <span className="block text-2xl font-bold font-display text-primary-900">{degrees.length}</span>
                  <span className="text-xs text-neutral-500">Programmes</span>
                </div>
                <div className="p-4 bg-secondary-50 rounded-xl border border-secondary-100 text-center">
                  <Clock className="w-6 h-6 text-secondary-600 mx-auto mb-2" />
                  <span className="block text-2xl font-bold font-display text-primary-900">1-2</span>
                  <span className="text-xs text-neutral-500">Years Duration</span>
                </div>
                <div className="p-4 bg-primary-50 rounded-xl border border-primary-100 text-center">
                  <Globe className="w-6 h-6 text-primary-900 mx-auto mb-2" />
                  <span className="block text-2xl font-bold font-display text-primary-900">ISO</span>
                  <span className="text-xs text-neutral-500">Certified</span>
                </div>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Degree List */}
      <section className="section-padding bg-neutral-50">
        <Container>
          <motion.div
            initial="hidden" whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="bg-white p-5 rounded-xl shadow-card border border-neutral-100 flex flex-col sm:flex-row items-center justify-between gap-4 mb-10">
              <div className="flex items-center gap-3">
                <BookOpen className="w-6 h-6 text-secondary-600" />
                <h2 className="text-xl font-display font-bold text-primary-900">
                  Postgraduate Subjects
                  <span className="text-sm font-normal text-neutral-400 ml-2">({filteredDegrees.length})</span>
                </h2>
              </div>
              <div className="relative w-full sm:w-72">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search master's degrees..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-neutral-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary-900/20 focus:border-primary-900 transition-colors"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-3">
              {filteredDegrees.map((degree, index) => (
                <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-white hover:shadow-sm transition-all duration-200 group">
                  <Check className="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-neutral-700 font-medium group-hover:text-primary-900 transition-colors">
                    {degree}
                  </span>
                </div>
              ))}
            </div>

            {filteredDegrees.length === 0 && (
              <div className="text-center py-16">
                <div className="w-14 h-14 rounded-2xl bg-neutral-100 flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-7 h-7 text-neutral-300" />
                </div>
                <p className="text-neutral-500 font-medium">No degrees found matching &ldquo;{searchQuery}&rdquo;</p>
              </div>
            )}
          </motion.div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-900">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-2">Advance Your Career</h2>
              <p className="text-neutral-300">Apply for our postgraduate programmes today.</p>
            </div>
            <Link
              to="/apply/postgraduate"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-secondary-500 hover:bg-secondary-400 text-primary-950 font-bold text-sm rounded-lg transition-all duration-200 shadow-lg shadow-secondary-500/20 flex-shrink-0"
            >
              Apply Now <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
};
