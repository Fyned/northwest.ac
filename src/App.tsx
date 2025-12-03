import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { HelmetProvider } from 'react-helmet-async';

// Layouts & Components
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { PageTransition } from './components/layout/PageTransition';
import { SEO } from './components/common/SEO';
import { NotFound } from './pages/NotFound';

// --- PAGES ---

// Global
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Faculty } from './pages/Faculty';
import { Accreditations } from './pages/Accreditations';
import { Contact } from './pages/Contact';

// Academics (Study)
import { Academics } from './pages/Academics';
import { Undergraduate } from './pages/study/Undergraduate';
import { Postgraduate } from './pages/study/Postgraduate';
import { Phd } from './pages/study/Phd';

// Apply
import { UndergraduateAdmissions } from './pages/apply/UndergraduateAdmissions';
import { PostgraduateAdmissions } from './pages/apply/PostgraduateAdmissions';
import { TransferCredit } from './pages/apply/TransferCredit';

// Validation
import { ValidationServices } from './pages/ValidationServices';

// Business
import { Experts } from './pages/business/Experts';
import { Employing } from './pages/business/Employing';
import { Fundings } from './pages/business/Fundings';
import { DegreesAtWork } from './pages/business/DegreesAtWork';
import { ProfessionalCourses } from './pages/business/ProfessionalCourses';

// International
import { StudentSupport } from './pages/StudentSupport';
import { HowToApply } from './pages/international/HowToApply';
import { EnglishRequirements } from './pages/international/EnglishRequirements';
import { NewStudents } from './pages/international/NewStudents';
import { PlanningTravel } from './pages/international/PlanningTravel';
import { Orientation } from './pages/international/Orientation';

// Student Life
import { Arrival } from './pages/student-life/Arrival';
import { PreArrival } from './pages/student-life/PreArrival';
import { FirstWeek } from './pages/student-life/FirstWeek';
import { Tuition } from './pages/Tuition'; // Fee Payments
import { StudySupport } from './pages/student-life/StudySupport';
import { DisabilitySupport } from './pages/student-life/DisabilitySupport';
import { StudySkills } from './pages/student-life/StudySkills';
import { Careers } from './pages/student-life/Careers';
import { Volunteering } from './pages/student-life/Volunteering';
import { WorkStudy } from './pages/student-life/WorkStudy';

// Research
import { ResearchSupport } from './pages/research/ResearchSupport';
import { ResearchDegrees } from './pages/research/ResearchDegrees';

// Scroll to Top
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Main App Content
const AppContent = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col font-sans text-neutral-900">
      <Header />
      
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            
            {/* --- HOME & GLOBAL --- */}
            <Route path="/" element={
              <PageTransition>
                <SEO title="Home" description="University of NorthWest - Excellence in Higher Education" />
                <Home />
              </PageTransition>
            } />
            <Route path="/about" element={<PageTransition><About /></PageTransition>} />
            <Route path="/faculty" element={<PageTransition><Faculty /></PageTransition>} />
            <Route path="/accreditations" element={<PageTransition><Accreditations /></PageTransition>} />
            <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />

            {/* --- STUDY (ACADEMICS) --- */}
            <Route path="/academics" element={<PageTransition><Academics /></PageTransition>} />
            <Route path="/study/courses/undergraduate" element={<PageTransition><Undergraduate /></PageTransition>} />
            <Route path="/study/courses/postgraduate" element={<PageTransition><Postgraduate /></PageTransition>} />
            <Route path="/study/courses/phd" element={<PageTransition><Phd /></PageTransition>} />

            {/* --- APPLY --- */}
            <Route path="/apply/undergraduate" element={<PageTransition><UndergraduateAdmissions /></PageTransition>} />
            <Route path="/apply/postgraduate" element={<PageTransition><PostgraduateAdmissions /></PageTransition>} />
            <Route path="/apply/transfer-credit" element={<PageTransition><TransferCredit /></PageTransition>} />
            
            {/* --- VALIDATION --- */}
            <Route path="/validation-services" element={<PageTransition><ValidationServices /></PageTransition>} />

            {/* --- BUSINESS --- */}
            <Route path="/business/experts" element={<PageTransition><Experts /></PageTransition>} />
            <Route path="/business/employing" element={<PageTransition><Employing /></PageTransition>} />
            <Route path="/business/fundings" element={<PageTransition><Fundings /></PageTransition>} />
            <Route path="/business/degrees-at-work" element={<PageTransition><DegreesAtWork /></PageTransition>} />
            <Route path="/business/professional-courses" element={<PageTransition><ProfessionalCourses /></PageTransition>} />

            {/* --- INTERNATIONAL --- */}
            <Route path="/international/support" element={<PageTransition><StudentSupport /></PageTransition>} />
            <Route path="/international/application" element={<Navigate to="/apply/undergraduate" replace />} />
            <Route path="/international/courses/undergraduate" element={<Navigate to="/study/courses/undergraduate" replace />} />
            <Route path="/international/courses/postgraduate" element={<Navigate to="/study/courses/postgraduate" replace />} />
            <Route path="/international/courses/phd" element={<Navigate to="/study/courses/phd" replace />} />
            <Route path="/international/how-to-apply" element={<PageTransition><HowToApply /></PageTransition>} />
            <Route path="/international/english-requirements" element={<PageTransition><EnglishRequirements /></PageTransition>} />
            <Route path="/international/new-students" element={<PageTransition><NewStudents /></PageTransition>} />
            <Route path="/international/travel" element={<PageTransition><PlanningTravel /></PageTransition>} />
            <Route path="/international/orientation" element={<PageTransition><Orientation /></PageTransition>} />

            {/* --- STUDENT LIFE --- */}
            <Route path="/student-life/arrival" element={<PageTransition><Arrival /></PageTransition>} />
            <Route path="/student-life/pre-arrival" element={<PageTransition><PreArrival /></PageTransition>} />
            <Route path="/student-life/fees" element={<PageTransition><Tuition /></PageTransition>} />
            <Route path="/student-life/first-week" element={<PageTransition><FirstWeek /></PageTransition>} />
            <Route path="/student-life/support" element={<PageTransition><StudySupport /></PageTransition>} />
            <Route path="/student-life/disability" element={<PageTransition><DisabilitySupport /></PageTransition>} />
            <Route path="/student-life/skills" element={<PageTransition><StudySkills /></PageTransition>} />
            <Route path="/student-life/careers" element={<PageTransition><Careers /></PageTransition>} />
            <Route path="/student-life/volunteering" element={<PageTransition><Volunteering /></PageTransition>} />
            <Route path="/student-life/work-study" element={<PageTransition><WorkStudy /></PageTransition>} />

            {/* --- RESEARCH --- */}
            <Route path="/research/support" element={<PageTransition><ResearchSupport /></PageTransition>} />
            <Route path="/research/degrees" element={<PageTransition><ResearchDegrees /></PageTransition>} />

            {/* 404 - Page Not Found */}
            <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />

          </Routes>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
};

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <AppContent />
      </BrowserRouter>
    </HelmetProvider>
  )
}

export default App;