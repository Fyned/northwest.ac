import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../../components/common/Container';
import { PageHeader } from '../../components/common/PageHeader';
import { SmartImage } from '../../components/common/SmartImage';
import { Microscope, Search, Beaker, BookOpen, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

import researchImg from '../../assets/images/research-lab.jpg';
import { fadeInUp } from '../../utils/animations';
const researchAreas = [
  'Analytical Chemistry – MPhil, PhD',
  'Animal and Environmental Sciences – MPhil, PhD',
  'Applied Linguistics – DProf',
  'Art and Design – MPhil, PhD',
  'Audiology and Hearing Disability Research – MPhil, PhD',
  'Biomedical Science – MPhil, PhD',
  'Biotechnology – MPhil, PhD',
  'Built Environment – MPhil, PhD',
  'Business Management – MPhil, PhD',
  'Children\'s Book Illustration – MPhil, PhD',
  'Computer Science – MPhil, PhD',
  'Creative Writing – MPhil, PhD',
  'Criminology – MPhil, PhD',
  'Doctor of Medicine by Research – MD (Res)',
  'Dramatherapy – MPhil, PhD, MA',
  'Engineering and Tribology – MPhil, PhD',
  'English Language and Intercultural Communication – MPhil, PhD',
  'English Language and Linguistics – MPhil, PhD',
  'English Literature – MPhil, PhD',
  'Equine Science – MPhil, PhD',
  'Film and Television Production – MPhil, PhD',
  'Film Studies and Media Studies – MPhil, PhD',
  'Fine Art – MPhil, PhD',
  'Forensic Science – MPhil, PhD',
  'Graphic Design and Typography – MPhil, PhD',
  'History – MPhil, PhD',
  'International Relations – MPhil, PhD',
  'Law – MPhil, PhD',
  'Mechanical Engineering – MPhil, PhD',
  'Medical Engineering – MPhil, PhD',
  'Molecular Biology – MPhil, PhD',
  'Early Childhood Education – MA',
  'Musicology – MPhil, PhD',
  'Music Technology, Sonic Arts and Composition – MPhil, PhD',
  'Music Therapy – MPhil, PhD',
  'Optometry and Vision Sciences – MPhil, PhD',
  'Philosophy – MPhil, PhD',
  'Professional Doctorate in Business and Management – DBA',
  'Professional Doctorate in Education – EdD',
  'Professional Doctorate in Health and Social Care – DProf',
  'Professional Doctorate in Laws – DProf',
  'Psychology – MPhil, PhD',
  'Publishing – MPhil, PhD',
  'Science and Technology – DProf',
  'Sociology – MPhil, PhD',
  'Sound Engineering – MPhil, PhD',
  'Sport and Exercise Sciences – MPhil, PhD',
  'Sustainability – MPhil, PhD',
  'Telecommunications – MPhil, PhD',
  'Theatre and Performance – MPhil, PhD',
  'Vision and Eye Research Unit – MPhil, PhD',
  'Zoology – MPhil, PhD',
];

export const ResearchSupport = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredAreas = researchAreas.filter(area =>
    area.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-white min-h-screen font-sans">
      <PageHeader
        title="Research Support"
        subtitle="Innovation & Discovery"
        description="Explore the wide range of research areas where University of NorthWest offers supervision and support for postgraduate researchers."
      />

      {/* Intro & Search */}
      <section className="section-padding bg-white">
        <Container>
          <motion.div
            initial="hidden" whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeInUp}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div className="space-y-5">
              <h2 className="text-3xl font-display font-bold text-primary-900">Supported Research Areas</h2>
              <div className="h-1 w-16 bg-secondary-500 rounded-full" />
              <p className="text-neutral-600 leading-relaxed">
                We offer MPhil, PhD, and Professional Doctorate supervision across a diverse range of disciplines.
                Use the search tool to find your area of interest.
              </p>
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search research topics..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-lg border border-neutral-200 bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-primary-900/20 focus:border-primary-900 transition-all text-sm"
                />
              </div>
            </div>
            <SmartImage
              src={researchImg}
              alt="Research Laboratory"
              className="rounded-2xl shadow-elevated w-full"
              aspectRatio="wide"
              placeholderText="Research Facility"
            />
          </motion.div>
        </Container>
      </section>

      {/* Research Areas List */}
      <section className="section-padding bg-neutral-50">
        <Container>
          <motion.div
            initial="hidden" whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="bg-white p-7 md:p-10 rounded-xl border border-neutral-200"
          >
            <div className="flex items-center mb-8 pb-4 border-b border-neutral-100">
              <Microscope className="w-7 h-7 text-secondary-600 mr-3" />
              <h3 className="text-xl font-bold text-primary-900">Available Disciplines</h3>
              <span className="ml-auto bg-primary-50 text-primary-900 px-3 py-1 rounded-full text-sm font-bold">
                {filteredAreas.length} Areas
              </span>
            </div>

            {filteredAreas.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-3">
                {filteredAreas.map((area, index) => (
                  <div key={index} className="flex items-start group p-2 rounded hover:bg-neutral-50 transition-colors">
                    <div className="mt-1 mr-3 flex-shrink-0">
                      {area.includes('Science') || area.includes('Chemistry') || area.includes('Biology') || area.includes('Engineering') ? (
                        <Beaker className="w-4 h-4 text-secondary-500" />
                      ) : (
                        <BookOpen className="w-4 h-4 text-primary-400" />
                      )}
                    </div>
                    <span className="text-sm text-neutral-700 font-medium group-hover:text-primary-900">
                      {area}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 text-neutral-500">
                <p>No research areas found matching &ldquo;{searchQuery}&rdquo;.</p>
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
              <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-2">Interested in a Research Degree?</h2>
              <p className="text-neutral-300">Learn about our PhD, MPhil, and Professional Doctorate programmes.</p>
            </div>
            <Link
              to="/research/degrees"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-secondary-500 hover:bg-secondary-400 text-primary-950 font-bold text-sm rounded-lg transition-all duration-200 shadow-lg shadow-secondary-500/20 flex-shrink-0"
            >
              Research Degrees <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
};
