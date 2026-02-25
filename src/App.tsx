import { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { HelmetProvider } from 'react-helmet-async';

// Layouts & Components (always loaded)
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { PageTransition } from './components/layout/PageTransition';
import { SEO } from './components/common/SEO';

// Lazy loaded pages
const Home = lazy(() => import('./pages/Home').then(m => ({ default: m.Home })));
const About = lazy(() => import('./pages/About').then(m => ({ default: m.About })));
const Faculty = lazy(() => import('./pages/Faculty').then(m => ({ default: m.Faculty })));
const Accreditations = lazy(() => import('./pages/Accreditations').then(m => ({ default: m.Accreditations })));
const Contact = lazy(() => import('./pages/Contact').then(m => ({ default: m.Contact })));
const Academics = lazy(() => import('./pages/Academics').then(m => ({ default: m.Academics })));
const Undergraduate = lazy(() => import('./pages/study/Undergraduate').then(m => ({ default: m.Undergraduate })));
const Postgraduate = lazy(() => import('./pages/study/Postgraduate').then(m => ({ default: m.Postgraduate })));
const Phd = lazy(() => import('./pages/study/Phd').then(m => ({ default: m.Phd })));
const UndergraduateAdmissions = lazy(() => import('./pages/apply/UndergraduateAdmissions').then(m => ({ default: m.UndergraduateAdmissions })));
const PostgraduateAdmissions = lazy(() => import('./pages/apply/PostgraduateAdmissions').then(m => ({ default: m.PostgraduateAdmissions })));
const TransferCredit = lazy(() => import('./pages/apply/TransferCredit').then(m => ({ default: m.TransferCredit })));
const ValidationServices = lazy(() => import('./pages/ValidationServices').then(m => ({ default: m.ValidationServices })));
const Experts = lazy(() => import('./pages/business/Experts').then(m => ({ default: m.Experts })));
const Employing = lazy(() => import('./pages/business/Employing').then(m => ({ default: m.Employing })));
const Fundings = lazy(() => import('./pages/business/Fundings').then(m => ({ default: m.Fundings })));
const DegreesAtWork = lazy(() => import('./pages/business/DegreesAtWork').then(m => ({ default: m.DegreesAtWork })));
const ProfessionalCourses = lazy(() => import('./pages/business/ProfessionalCourses').then(m => ({ default: m.ProfessionalCourses })));
const StudentSupport = lazy(() => import('./pages/StudentSupport').then(m => ({ default: m.StudentSupport })));
const HowToApply = lazy(() => import('./pages/international/HowToApply').then(m => ({ default: m.HowToApply })));
const EnglishRequirements = lazy(() => import('./pages/international/EnglishRequirements').then(m => ({ default: m.EnglishRequirements })));
const NewStudents = lazy(() => import('./pages/international/NewStudents').then(m => ({ default: m.NewStudents })));
const PlanningTravel = lazy(() => import('./pages/international/PlanningTravel').then(m => ({ default: m.PlanningTravel })));
const Orientation = lazy(() => import('./pages/international/Orientation').then(m => ({ default: m.Orientation })));
const Arrival = lazy(() => import('./pages/student-life/Arrival').then(m => ({ default: m.Arrival })));
const PreArrival = lazy(() => import('./pages/student-life/PreArrival').then(m => ({ default: m.PreArrival })));
const FirstWeek = lazy(() => import('./pages/student-life/FirstWeek').then(m => ({ default: m.FirstWeek })));
const Tuition = lazy(() => import('./pages/Tuition').then(m => ({ default: m.Tuition })));
const StudySupport = lazy(() => import('./pages/student-life/StudySupport').then(m => ({ default: m.StudySupport })));
const DisabilitySupport = lazy(() => import('./pages/student-life/DisabilitySupport').then(m => ({ default: m.DisabilitySupport })));
const StudySkills = lazy(() => import('./pages/student-life/StudySkills').then(m => ({ default: m.StudySkills })));
const Careers = lazy(() => import('./pages/student-life/Careers').then(m => ({ default: m.Careers })));
const Volunteering = lazy(() => import('./pages/student-life/Volunteering').then(m => ({ default: m.Volunteering })));
const WorkStudy = lazy(() => import('./pages/student-life/WorkStudy').then(m => ({ default: m.WorkStudy })));
const ResearchSupport = lazy(() => import('./pages/research/ResearchSupport').then(m => ({ default: m.ResearchSupport })));
const ResearchDegrees = lazy(() => import('./pages/research/ResearchDegrees').then(m => ({ default: m.ResearchDegrees })));
const NotFound = lazy(() => import('./pages/NotFound').then(m => ({ default: m.NotFound })));

// Loading fallback
const PageLoader = () => (
  <div className="min-h-[60vh] flex items-center justify-center">
    <div className="w-10 h-10 border-3 border-neutral-200 border-t-primary-900 rounded-full animate-spin" />
  </div>
);

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const AppContent = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col font-sans text-neutral-900">
      {/* Skip to main content - Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-6 focus:py-3 focus:bg-secondary-500 focus:text-primary-950 focus:font-bold focus:text-sm focus:rounded-lg focus:shadow-lg focus:outline-none"
      >
        Skip to main content
      </a>

      <Header />

      <main id="main-content" className="flex-grow pt-[72px] md:pt-[100px] lg:pt-[130px]" role="main">
        <Suspense fallback={<PageLoader />}>
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              {/* HOME */}
              <Route path="/" element={
                <PageTransition>
                  <SEO title="Home" description="University of NorthWest - Pioneering distance learning since 1999. ISO certified international university offering undergraduate, postgraduate and PhD programmes to students in 25+ countries." />
                  <Home />
                </PageTransition>
              } />

              {/* ABOUT & GENERAL */}
              <Route path="/about" element={
                <PageTransition>
                  <SEO title="About Us" description="Learn about the University of NorthWest's history, mission, vision and commitment to academic excellence in distance education." />
                  <About />
                </PageTransition>
              } />
              <Route path="/faculty" element={
                <PageTransition>
                  <SEO title="Our Faculty" description="Meet the distinguished faculty members at the University of NorthWest. Experienced academics dedicated to student success." />
                  <Faculty />
                </PageTransition>
              } />
              <Route path="/accreditations" element={
                <PageTransition>
                  <SEO title="Accreditations" description="University of NorthWest accreditations, certifications and quality assurance standards including ISO certification." />
                  <Accreditations />
                </PageTransition>
              } />
              <Route path="/contact" element={
                <PageTransition>
                  <SEO title="Contact Us" description="Get in touch with the University of NorthWest. Contact our admissions team, academic advisors and support staff." />
                  <Contact />
                </PageTransition>
              } />

              {/* ACADEMICS */}
              <Route path="/academics" element={
                <PageTransition>
                  <SEO title="Academic Programmes" description="Explore our full range of academic programmes including undergraduate, postgraduate and doctoral degrees." />
                  <Academics />
                </PageTransition>
              } />

              {/* STUDY */}
              <Route path="/study/courses/undergraduate" element={
                <PageTransition>
                  <SEO title="Undergraduate Courses" description="Browse undergraduate degree programmes at the University of NorthWest. Flexible distance learning bachelor's degrees." />
                  <Undergraduate />
                </PageTransition>
              } />
              <Route path="/study/courses/postgraduate" element={
                <PageTransition>
                  <SEO title="Postgraduate Courses" description="Advance your career with postgraduate programmes. Master's degrees designed for working professionals." />
                  <Postgraduate />
                </PageTransition>
              } />
              <Route path="/study/courses/phd" element={
                <PageTransition>
                  <SEO title="PhD & Research Degrees" description="Pursue doctoral research at the University of NorthWest. PhD programmes with expert supervision." />
                  <Phd />
                </PageTransition>
              } />

              {/* APPLY */}
              <Route path="/apply/undergraduate" element={
                <PageTransition>
                  <SEO title="Undergraduate Admissions" description="Apply for undergraduate programmes. Admission requirements, deadlines and application process." />
                  <UndergraduateAdmissions />
                </PageTransition>
              } />
              <Route path="/apply/postgraduate" element={
                <PageTransition>
                  <SEO title="Postgraduate Admissions" description="Apply for postgraduate programmes. Entry requirements and how to submit your application." />
                  <PostgraduateAdmissions />
                </PageTransition>
              } />
              <Route path="/apply/transfer-credit" element={
                <PageTransition>
                  <SEO title="Transfer Credit" description="Transfer your existing credits to the University of NorthWest. Credit evaluation and transfer policies." />
                  <TransferCredit />
                </PageTransition>
              } />

              {/* VALIDATION */}
              <Route path="/validation-services" element={
                <PageTransition>
                  <SEO title="Validation Services" description="Degree validation and credential evaluation services provided by the University of NorthWest." />
                  <ValidationServices />
                </PageTransition>
              } />

              {/* BUSINESS */}
              <Route path="/business/experts" element={
                <PageTransition>
                  <SEO title="Access Our Experts" description="Collaborate with University of NorthWest experts. Consulting, research partnerships and knowledge exchange." />
                  <Experts />
                </PageTransition>
              } />
              <Route path="/business/employing" element={
                <PageTransition>
                  <SEO title="Employing Our Students" description="Recruit talented graduates and students from the University of NorthWest for your organisation." />
                  <Employing />
                </PageTransition>
              } />
              <Route path="/business/fundings" element={
                <PageTransition>
                  <SEO title="Funding Opportunities" description="Explore funding, grants and sponsorship opportunities available through the University of NorthWest." />
                  <Fundings />
                </PageTransition>
              } />
              <Route path="/business/degrees-at-work" element={
                <PageTransition>
                  <SEO title="Degrees at Work" description="Work-based learning programmes. Earn your degree while gaining professional experience." />
                  <DegreesAtWork />
                </PageTransition>
              } />
              <Route path="/business/professional-courses" element={
                <PageTransition>
                  <SEO title="Professional Courses" description="Professional development courses and training programmes for career advancement." />
                  <ProfessionalCourses />
                </PageTransition>
              } />

              {/* INTERNATIONAL */}
              <Route path="/international/support" element={
                <PageTransition>
                  <SEO title="International Student Support" description="Comprehensive support services for international students at the University of NorthWest." />
                  <StudentSupport />
                </PageTransition>
              } />
              <Route path="/international/application" element={<Navigate to="/apply/undergraduate" replace />} />
              <Route path="/international/courses/undergraduate" element={<Navigate to="/study/courses/undergraduate" replace />} />
              <Route path="/international/courses/postgraduate" element={<Navigate to="/study/courses/postgraduate" replace />} />
              <Route path="/international/courses/phd" element={<Navigate to="/study/courses/phd" replace />} />
              <Route path="/international/how-to-apply" element={
                <PageTransition>
                  <SEO title="How to Apply - International" description="Step-by-step guide for international students applying to the University of NorthWest." />
                  <HowToApply />
                </PageTransition>
              } />
              <Route path="/international/english-requirements" element={
                <PageTransition>
                  <SEO title="English Language Requirements" description="English proficiency requirements for international applicants. IELTS, TOEFL and accepted test scores." />
                  <EnglishRequirements />
                </PageTransition>
              } />
              <Route path="/international/new-students" element={
                <PageTransition>
                  <SEO title="New International Students" description="Essential information and guidance for new international students joining the University of NorthWest." />
                  <NewStudents />
                </PageTransition>
              } />
              <Route path="/international/travel" element={
                <PageTransition>
                  <SEO title="Planning Your Travel" description="Travel planning guide for international students coming to study at the University of NorthWest." />
                  <PlanningTravel />
                </PageTransition>
              } />
              <Route path="/international/orientation" element={
                <PageTransition>
                  <SEO title="Orientation Programme" description="Orientation programme details for new students. Get settled and start your academic journey." />
                  <Orientation />
                </PageTransition>
              } />

              {/* STUDENT LIFE */}
              <Route path="/student-life/arrival" element={
                <PageTransition>
                  <SEO title="Arrival Information" description="Everything you need to know about arriving at the University of NorthWest as a new student." />
                  <Arrival />
                </PageTransition>
              } />
              <Route path="/student-life/pre-arrival" element={
                <PageTransition>
                  <SEO title="Pre-Arrival Checklist" description="Prepare for your studies with our pre-arrival checklist and essential information guide." />
                  <PreArrival />
                </PageTransition>
              } />
              <Route path="/student-life/fees" element={
                <PageTransition>
                  <SEO title="Tuition & Fees" description="Tuition fees, payment plans and financial information for University of NorthWest programmes." />
                  <Tuition />
                </PageTransition>
              } />
              <Route path="/student-life/first-week" element={
                <PageTransition>
                  <SEO title="Your First Week" description="Guide to your first week at the University of NorthWest. Activities, registration and getting started." />
                  <FirstWeek />
                </PageTransition>
              } />
              <Route path="/student-life/support" element={
                <PageTransition>
                  <SEO title="Study Support" description="Academic support services including tutoring, study skills workshops and learning resources." />
                  <StudySupport />
                </PageTransition>
              } />
              <Route path="/student-life/disability" element={
                <PageTransition>
                  <SEO title="Disability Support" description="Disability support services and reasonable adjustments for students with additional needs." />
                  <DisabilitySupport />
                </PageTransition>
              } />
              <Route path="/student-life/skills" element={
                <PageTransition>
                  <SEO title="Study Skills" description="Develop essential study skills. Academic writing, research methods and exam preparation resources." />
                  <StudySkills />
                </PageTransition>
              } />
              <Route path="/student-life/careers" element={
                <PageTransition>
                  <SEO title="Careers & Employment" description="Career services, job placement support and professional development for students and graduates." />
                  <Careers />
                </PageTransition>
              } />
              <Route path="/student-life/volunteering" element={
                <PageTransition>
                  <SEO title="Volunteering" description="Volunteering opportunities for University of NorthWest students. Make a difference in your community." />
                  <Volunteering />
                </PageTransition>
              } />
              <Route path="/student-life/work-study" element={
                <PageTransition>
                  <SEO title="Work & Study" description="Balance work and study with flexible learning options at the University of NorthWest." />
                  <WorkStudy />
                </PageTransition>
              } />

              {/* RESEARCH */}
              <Route path="/research/support" element={
                <PageTransition>
                  <SEO title="Research Support" description="Research support services, funding opportunities and resources for academic researchers." />
                  <ResearchSupport />
                </PageTransition>
              } />
              <Route path="/research/degrees" element={
                <PageTransition>
                  <SEO title="Research Degrees" description="Research degree programmes including MPhil and PhD. Pursue cutting-edge research with expert guidance." />
                  <ResearchDegrees />
                </PageTransition>
              } />

              {/* 404 */}
              <Route path="*" element={
                <PageTransition>
                  <SEO title="Page Not Found" description="The page you are looking for could not be found." />
                  <NotFound />
                </PageTransition>
              } />
            </Routes>
          </AnimatePresence>
        </Suspense>
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
