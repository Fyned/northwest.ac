import { Container } from '../components/common/Container';
import { Section, SectionTitle } from '../components/common/Section';
import { Timeline } from '../components/common/Timeline';
import { SmartImage } from '../components/common/SmartImage';
import { useLocation } from 'react-router-dom';

// Görsel (Daha önce eklediğin görsel)
import studentLifeImg from '../assets/images/student-life.jpg';

export const StudentLife = () => {
  const location = useLocation();
  const path = location.pathname.split('/').pop();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const contentMap: Record<string, { title: string; subtitle?: string; type: 'timeline' | 'text'; data: any }> = {
    'pre-arrival': {
      title: "Before You Get Here",
      subtitle: "Preparation Guide",
      type: 'timeline',
      data: [
        { title: "Accept Your Offer", description: "Confirm your place at University of NorthWest by accepting your offer letter officially through the portal." },
        { title: "Apply for Visa", description: "International students must apply for a student visa immediately. Ensure your passport is valid." },
        { title: "Book Accommodation", description: "Secure your living arrangements well in advance. Browse our partner housing options." },
        { title: "Travel Arrangements", description: "Book your flights and plan your travel to the campus. Notify the international office of your arrival date." }
      ]
    },
    'arrival': {
      title: "When You Arrive",
      subtitle: "Welcome to Campus",
      type: 'timeline',
      data: [
        { title: "Airport Pickup", description: "Use our designated airport pickup service for a safe journey to your accommodation." },
        { title: "Check-in to Accommodation", description: "Collect your keys and settle into your new home. Meet your roommates and neighbors." },
        { title: "Campus Registration", description: "Visit the student centre to complete your official registration and enrolment process." },
        { title: "Get Student ID", description: "Obtain your university ID card for library, gym, and building access." }
      ]
    },
    'first-week': {
      title: "Your First Week",
      subtitle: "Orientation & Settling In",
      type: 'timeline',
      data: [
        { title: "Orientation Program", description: "Attend the mandatory orientation sessions to meet faculty, staff, and your fellow peers." },
        { title: "Course Enrolment", description: "Finalise your course selection and timetable with your academic advisor." },
        { title: "IT Setup", description: "Set up your university email, Wi-Fi access, and learning management system account." },
        { title: "Social Events", description: "Join welcome parties, fresher's fair, and explore student clubs and societies." }
      ]
    },
    // Diğer metin tabanlı sayfalar için standart içerik
    'default': {
      title: "Student Life & Support",
      subtitle: "Community & Services",
      type: 'text',
      data: "Experience a vibrant community designed to support your personal and academic growth. From career guidance to health services, we are here for you."
    }
  };

  const currentContent = contentMap[path || ''] || contentMap['default'];

  return (
    <div className="bg-neutral-50 min-h-screen">
      
      {/* Hero / Header */}
      <Section bg="navy" className="py-24">
        <SectionTitle subtitle={currentContent.subtitle} align="center" >
          {currentContent.title}
        </SectionTitle>
      </Section>

      <Container className="py-16 relative z-10 pb-24">
        <div className="bg-white rounded-2xl shadow-card border border-neutral-100 overflow-hidden">
          
          {/* Görsel Banner */}
          <div className="h-64 md:h-80 w-full relative">
             <SmartImage 
               src={studentLifeImg}
               alt="Student Life"
               className="h-full w-full"
               placeholderText="Student Life Activity"
               aspectRatio="wide"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
          </div>

          <div className="p-8 md:p-16">
            {currentContent.type === 'timeline' ? (
              <Timeline items={currentContent.data} />
            ) : (
              <div className="max-w-3xl mx-auto text-center">
                <p className="text-xl text-neutral-600 leading-relaxed">
                  {currentContent.data}
                </p>
                {/* Standart Bilgi Notu */}
                <p className="mt-6 text-neutral-500">
                  Please visit the Student Services office for detailed brochures and personal assistance regarding this topic.
                </p>
              </div>
            )}
          </div>

        </div>
      </Container>
    </div>
  );
};