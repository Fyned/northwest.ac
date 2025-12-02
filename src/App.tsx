import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { HelmetProvider } from 'react-helmet-async'; // SEO Altyapısı

// Layouts & Components
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { PagePlaceholder } from './components/common/PagePlaceholder';
import { PageTransition } from './components/layout/PageTransition';
import { SEO } from './components/common/SEO'; // SEO Bileşeni

// Pages - Home
import { Home } from './pages/Home';

// Pages - 404
import { NotFound } from './pages/NotFound'; // 404 Sayfası

// Pages - Phase 2 (Academic Core)
import { Academics } from './pages/Academics';
import { Undergraduate } from './pages/study/Undergraduate';
import { Postgraduate } from './pages/study/Postgraduate';
import { Phd } from './pages/study/Phd';

// Pages - Phase 3 (Corporate)
import { About } from './pages/About';
import { Faculty } from './pages/Faculty';
import { Accreditations } from './pages/Accreditations';

// Pages - Phase 4 (Admissions & Contact)
import { Admissions } from './pages/Admissions';
import { Tuition } from './pages/Tuition';
import { Contact } from './pages/Contact';

// Pages - Phase 5 (Business & Validation)
import { ValidationServices } from './pages/ValidationServices';
import { Experts } from './pages/business/Experts';
import { Employing } from './pages/business/Employing';
import { Fundings } from './pages/business/Fundings';
import { DegreesAtWork } from './pages/business/DegreesAtWork';
import { ProfessionalCourses } from './pages/business/ProfessionalCourses';

// Pages - Phase 6 & 8 (Student Life & Generic)
import { StudentLife } from './pages/StudentLife';
import { GenericContent } from './pages/GenericContent';

// Scroll to Top: Sayfa değişimlerinde en üste atar
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// İçerik Sarmalayıcı (Router Context içinde çalışması için)
const AppContent = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col font-sans text-neutral-900">
      <Header />
      
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            
            {/* --- GLOBAL PAGES --- */}
            <Route path="/" element={
              <PageTransition>
                <SEO 
                  title="Home" 
                  description="Welcome to University of NorthWest. Explore our accredited programmes and global campus network." 
                />
                <Home />
              </PageTransition>
            } />
            
            <Route path="/about" element={<PageTransition><About /></PageTransition>} />
            <Route path="/faculty" element={<PageTransition><Faculty /></PageTransition>} />
            <Route path="/accreditations" element={<PageTransition><Accreditations /></PageTransition>} />
            <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />

            {/* --- ACADEMIC PAGES --- */}
            <Route path="/academics" element={<PageTransition><Academics /></PageTransition>} />
            
            <Route path="/study/courses/undergraduate" element={<PageTransition><Undergraduate /></PageTransition>} />
            <Route path="/study/courses/postgraduate" element={<PageTransition><Postgraduate /></PageTransition>} />
            <Route path="/study/courses/phd" element={<PageTransition><Phd /></PageTransition>} />

            {/* International (Tekrarlı içerik) */}
            <Route path="/international/courses/undergraduate" element={<PageTransition><Undergraduate /></PageTransition>} />
            <Route path="/international/courses/postgraduate" element={<PageTransition><Postgraduate /></PageTransition>} />
            <Route path="/international/courses/phd" element={<PageTransition><Phd /></PageTransition>} />

            {/* --- ADMISSIONS & FEES --- */}
            <Route path="/admissions" element={<PageTransition><Admissions /></PageTransition>} />
            <Route path="/tuition" element={<PageTransition><Tuition /></PageTransition>} />
            
            {/* Apply Alt Rotaları */}
            <Route path="/apply/undergraduate" element={<PageTransition><PagePlaceholder title="Undergraduate Admissions" /></PageTransition>} />
            <Route path="/apply/postgraduate" element={<PageTransition><PagePlaceholder title="Postgraduate Admissions" /></PageTransition>} />
            <Route path="/apply/transfer-credit" element={<PageTransition><PagePlaceholder title="Transfer Credit" /></PageTransition>} />

            {/* --- BUSINESS & VALIDATION --- */}
            <Route path="/validation-services" element={<PageTransition><ValidationServices /></PageTransition>} />
            
            <Route path="/business/experts" element={<PageTransition><Experts /></PageTransition>} />
            <Route path="/business/employing" element={<PageTransition><Employing /></PageTransition>} />
            <Route path="/business/fundings" element={<PageTransition><Fundings /></PageTransition>} />
            <Route path="/business/degrees-at-work" element={<PageTransition><DegreesAtWork /></PageTransition>} />
            <Route path="/business/professional-courses" element={<PageTransition><ProfessionalCourses /></PageTransition>} />

            {/* --- INTERNATIONAL --- */}
            <Route path="/international/support" element={<PageTransition><GenericContent /></PageTransition>} />
            <Route path="/international/application" element={<PageTransition><GenericContent /></PageTransition>} />
            <Route path="/international/how-to-apply" element={<PageTransition><GenericContent /></PageTransition>} />
            <Route path="/international/english-requirements" element={<PageTransition><GenericContent /></PageTransition>} />
            <Route path="/international/new-students" element={<PageTransition><GenericContent /></PageTransition>} />
            <Route path="/international/travel" element={<PageTransition><GenericContent /></PageTransition>} />
            <Route path="/international/orientation" element={<PageTransition><GenericContent /></PageTransition>} />

            {/* --- STUDENT LIFE --- */}
            <Route path="/student-life/pre-arrival" element={<PageTransition><StudentLife /></PageTransition>} />
            <Route path="/student-life/arrival" element={<PageTransition><StudentLife /></PageTransition>} />
            <Route path="/student-life/first-week" element={<PageTransition><StudentLife /></PageTransition>} />
            
            <Route path="/student-life/support" element={<PageTransition><StudentLife /></PageTransition>} />
            <Route path="/student-life/disability" element={<PageTransition><StudentLife /></PageTransition>} />
            <Route path="/student-life/skills" element={<PageTransition><StudentLife /></PageTransition>} />
            <Route path="/student-life/careers" element={<PageTransition><StudentLife /></PageTransition>} />
            <Route path="/student-life/volunteering" element={<PageTransition><StudentLife /></PageTransition>} />
            <Route path="/student-life/work-study" element={<PageTransition><StudentLife /></PageTransition>} />
            
            <Route path="/student-life/fees" element={<PageTransition><Tuition /></PageTransition>} /> 

            {/* --- RESEARCH --- */}
            <Route path="/research/support" element={<PageTransition><GenericContent /></PageTransition>} />
            <Route path="/research/degrees" element={<PageTransition><GenericContent /></PageTransition>} />

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