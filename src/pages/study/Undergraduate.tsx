import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../../components/common/Container';
import { PageHeader } from '../../components/common/PageHeader';
import { SmartImage } from '../../components/common/SmartImage';
import { Check, Search, BookOpen, ArrowRight, GraduationCap, Clock, Users } from 'lucide-react';
import { motion } from 'framer-motion';

import studentLifeImg from '../../assets/images/student-life.jpg';
const degrees = [
  "Accounting and Finance – BSc (Hons)",
  "Accounting and Financial Management (Top-Up) – BSc (Hons)",
  "Archaeology and Landscape History – BA (Hons)",
  "Architectural Technology – BSc (Hons)",
  "Architecture – BSc (Hons)",
  "Audio and Music Technology – BSc (Hons)",
  "Banking and Finance – BSc (Hons)",
  "Banking and Finance (Top-Up) – BSc (Hons)",
  "Biomedical Science – BSc (Hons)",
  "Bioscience – FdSc",
  "Building Surveying – BSc (Hons)",
  "Business Administration (Top-Up) – BSc (Hons)",
  "Business and Finance (Top-Up) – BSc (Hons)",
  "Business and Human Resource Management – BSc (Hons)",
  "Business Economics – BSc (Hons)",
  "Business Information Systems – BSc (Hons)",
  "Business Management – BA (Hons)",
  "Business Management – BSc (Hons)",
  "Business Management and Finance – BSc (Hons)",
  "Business Management and Leadership – BSc (Hons)",
  "Civil Engineering – BSc (Hons)",
  "Civil Engineering – BEng (Hons)",
  "Civil Engineering – FdSc",
  "Coaching for Performance in Football – BSc (Hons)",
  "Community Specialist Practitioner (District Nursing) – BSc (Hons)",
  "Computer Games Art – BA (Hons)",
  "Computer Gaming Technology – BSc (Hons)",
  "Computer Gaming Technology with Foundation Year – BSc (Hons)",
  "Computer Science – FdSc",
  "Computer Science – BSc (Hons)",
  "Computing and Information Systems – BSc (Hons)",
  "Construction – FdSc",
  "Construction Management – BSc (Hons)",
  "Construction Management (Top-Up) – BSc (Hons)",
  "Counselling (Child and Young Person) – DipHE",
  "Creative Music Technology – BA (Hons)",
  "Criminology and Sociology – BA (Hons)",
  "Decontamination Sciences – FdSc",
  "Drama – BA (Hons)",
  "Drama and English Literature – BA (Hons)",
  "Drama and Film Studies – BA (Hons)",
  "Early Childhood Professional Studies – BA (Hons)",
  "Early Childhood Professional Studies (Top-Up) – BA (Hons)",
  "Early Years, Playwork and Education – FdA",
  "Early Years Professional Practice (Top-up) – BA (Hons)",
  "Education and Childhood Studies – BA (Hons)",
  "Education Studies – BA (Hons)",
  "Education (Top-Up) – BA (Hons)",
  "Electronics – BEng (Hons)",
  "Engineering – FdSc",
  "English Language and English Language Teaching – BA (Hons)",
  "English Language and Linguistics – BA (Hons)",
  "English Language Studies (For Non-native Speakers of English) – BA (Hons)",
  "English Literature – BA (Hons)",
  "Equine Science with Rehabilitation Therapies – BSc (Hons)",
  "Equine Science with Rehabilitation Therapies – FdSc",
  "Fashion Design – BA (Hons)",
  "Film and Television Production – BA (Hons)",
  "Film Studies – BA (Hons)",
  "Film Studies and Media Studies – BA (Hons)",
  "Finance and Economics – BSc (Hons)",
  "Fine Art – BA (Hons)",
  "Forensic Science – BSc (Hons)",
  "Forensic Science with Foundation Year – BSc (Hons)",
  "Graphic Design – BA (Hons)",
  "Graphic Design – FdA",
  "Health and Social Care – FdSc",
  "Healthcare Science – BSc (Hons)",
  "Hearing Aid Audiology – FdSc",
  "History – BA (Hons)",
  "History and English – BA (Hons)",
  "History and Sociology – BA (Hons)",
  "Illustration – BA (Hons)",
  "Illustration and Animation – BA (Hons)",
  "Integrated Engineering (Top-Up) – BEng (Hons)",
  "Interior Design – BA (Hons)",
  "International Business English (Non-native Speakers) – BA (Hons)",
  "International Business Management – BSc (Hons)",
  "International Business Management (Accelerated) – BSc (Hons)",
  "International Nursing Studies (with option of Overseas Nursing Programme) – BSc (Hons)",
  "Journalism (Multimedia) – BA (Hons)",
  "Leadership and Management in Health and Social Care – FdSc",
  "Leading Business Change – University Diploma",
  "Leading Business Development – University Diploma",
  "Management – BA (Hons)",
  "Management – FdA",
  "Management and Leadership in Health and Social Care (Top up) – BSc (Hons)",
  "Management of Social and Affordable Housing – FdSc",
  "Management (Work-Based) – FdA",
  "Marine Biology with Biodiversity and Conservation – BSc (Hons)",
  "Marketing – BA (Hons)",
  "Mechanical Engineering – BEng (Hons)",
  "Media Studies – BA (Hons)",
  "Medical Science – BSc (Hons)",
  "Midwifery – BSc (Hons)",
  "Motorsport Engineering – FdSc",
  "Music – BA (Hons)",
  "Network Infrastructure and Security – BSc (Hons)",
  "Nursing – Adult – BSc (Hons)",
  "Nursing – Child – BSc (Hons)",
  "Nursing – Mental Health – BSc (Hons)",
  "Nutrition – BSc (Hons)",
  "Performing Arts – BA (Hons)",
  "Philosophy and English Literature – BA (Hons)",
  "Photography – BA (Hons)",
  "Politics – BA (Hons)",
  "Popular Music – BA (Hons)",
  "Primary and Community Care (Top-Up) – BSc (Hons)",
  "Professional Practice in International Trade – FdA",
  "Psychology – BSc (Hons)",
  "Public Health – BSc (Hons)",
  "Public Service – FdA",
  "Quantity Surveying – BSc (Hons)",
  "Social Policy – BA (Hons)",
  "Social Work – BA (Hons)",
  "Sociology – BA (Hons)",
  "Specialist Community Public Health Nursing (Top-Up) – BSc (Hons)",
  "Sports Coaching and Physical Education – BSc (Hons)",
  "Sports Coaching and Physical Education with Foundation Year – BSc (Hons)",
  "Sports Journalism – FdA",
  "Sports Science – BSc (Hons)",
  "Sports Science with Foundation Year – BSc (Hons)",
  "Tourism Management – BSc (Hons)",
  "Writing and English Literature – BA (Hons)",
  "Writing and Film Studies – BA (Hons)"
];

export const Undergraduate = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredDegrees = degrees.filter(degree =>
    degree.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-white min-h-screen font-sans">
      <PageHeader
        title="Undergraduate Study"
        subtitle="Start Your Journey"
        description="Explore our comprehensive range of bachelor's degrees designed to prepare you for a successful career."
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
            <div className="space-y-6">
              <h2 className="text-3xl font-display font-bold text-primary-900">The Undergraduate Experience</h2>
              <div className="h-1 w-16 bg-secondary-500 rounded-full" />
              <p className="text-neutral-600 leading-relaxed">
                The most common method consists of four years of study leading to a Bachelor of Arts (B.A.),
                a Bachelor of Science (B.S.), or sometimes another bachelor's degree.
              </p>
              <p className="text-neutral-600 leading-relaxed">
                Professional degrees such as law, medicine, pharmacy, and dentistry, are offered as graduate study
                after earning at least three years of undergraduate schooling.
              </p>
              <div className="grid sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 bg-primary-50 rounded-xl border border-primary-100 text-center">
                  <GraduationCap className="w-6 h-6 text-primary-900 mx-auto mb-2" />
                  <span className="block text-2xl font-bold font-display text-primary-900">{degrees.length}</span>
                  <span className="text-xs text-neutral-500">Programmes</span>
                </div>
                <div className="p-4 bg-secondary-50 rounded-xl border border-secondary-100 text-center">
                  <Clock className="w-6 h-6 text-secondary-600 mx-auto mb-2" />
                  <span className="block text-2xl font-bold font-display text-primary-900">3-4</span>
                  <span className="text-xs text-neutral-500">Years Duration</span>
                </div>
                <div className="p-4 bg-blue-50 rounded-xl border border-blue-100 text-center">
                  <Users className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                  <span className="block text-2xl font-bold font-display text-primary-900">25+</span>
                  <span className="text-xs text-neutral-500">Countries</span>
                </div>
              </div>
            </div>
            <SmartImage
              src={studentLifeImg}
              alt="Students on Campus"
              className="rounded-2xl shadow-elevated w-full"
              aspectRatio="landscape"
              placeholderText="Happy Students Group"
            />
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
            {/* Search */}
            <div className="bg-white p-5 rounded-xl shadow-card border border-neutral-100 flex flex-col sm:flex-row items-center justify-between gap-4 mb-10">
              <div className="flex items-center gap-3">
                <BookOpen className="w-6 h-6 text-secondary-600" />
                <h2 className="text-xl font-display font-bold text-primary-900">
                  Undergraduate Subjects
                  <span className="text-sm font-normal text-neutral-400 ml-2">({filteredDegrees.length})</span>
                </h2>
              </div>
              <div className="relative w-full sm:w-72">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search degrees..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-neutral-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary-900/20 focus:border-primary-900 transition-colors"
                />
              </div>
            </div>

            {/* Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-3">
              {filteredDegrees.map((degree, index) => (
                <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-white hover:shadow-sm transition-all duration-200 group">
                  <Check className="w-4 h-4 text-secondary-500 mt-0.5 flex-shrink-0" />
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
              <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-2">Ready to Apply?</h2>
              <p className="text-neutral-300">Start your undergraduate application today.</p>
            </div>
            <Link
              to="/apply/undergraduate"
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
