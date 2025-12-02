import { Container } from '../../components/common/Container';
import { Section, SectionTitle } from '../../components/common/Section';
import { SmartImage } from '../../components/common/SmartImage';
import { Check } from 'lucide-react';

// Görsel
import studentLifeImg from '../../assets/images/student-life.jpg';

export const Undergraduate = () => {
  const degrees = [
    "Bachelor of Arts (B.A.)",
    "Bachelor of Science (B.S.)",
    "Bachelor of Fine Arts (B.F.A.)",
    "Bachelor of Social Work (B.S.W.)",
    "Bachelor of Engineering (B. Eng.)",
    "Bachelor of Science in Public Affairs (B.S.P.A)",
    "Bachelor of Science in Nursing (B.S.N.)",
    "Bachelor of Philosophy (B. Phil.)",
    "Bachelor of Architecture Degree (B. Arch.)",
    "Master of Architecture degree (M. Arch.)"
  ];

  return (
    <div className="bg-neutral-50 min-h-screen">
      
      {/* Header */}
      <Section bg="navy" className="py-20">
        <SectionTitle align="center" subtitle="Start Your Journey">Undergraduate Study</SectionTitle>
        <p className="text-center text-neutral-300 max-w-2xl mx-auto text-lg">
          Build a strong foundation for your future with our comprehensive bachelor degree programmes.
        </p>
      </Section>

      {/* İçerik - Çakışma düzeltildi */}
      <Container className="py-16 relative z-10 pb-20">
        <div className="bg-white rounded-xl shadow-card border border-neutral-100 overflow-hidden">
          <div className="grid md:grid-cols-2">
            
            {/* Sol Taraf: Görsel */}
            <div className="relative h-64 md:h-auto min-h-[400px]">
              <SmartImage 
                src={studentLifeImg} 
                alt="Students on Campus" 
                className="h-full w-full"
                placeholderText="Happy Students Group"
                aspectRatio="portrait"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary-900/50 to-transparent md:hidden" />
            </div>

            {/* Sağ Taraf: İçerik */}
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h2 className="text-2xl font-serif font-bold text-primary-900 mb-6">The American Undergraduate System</h2>
              <div className="space-y-4 text-neutral-600 leading-relaxed">
                <p>
                  In the United States of America undergraduate refers to those who are studying for a bachelor's degree. 
                  The most common method consists of four years of study leading to a Bachelor of Arts (B.A.), 
                  a Bachelor of Science (B.S.), or sometimes another bachelor's degree.
                </p>
                <p>
                  Professional degrees such as law, medicine, pharmacy, and dentistry, are offered as graduate study 
                  after earning at least three years of undergraduate schooling or after earning a bachelor's degree 
                  depending on the program.
                </p>
              </div>

              <div className="mt-8 pt-8 border-t border-neutral-100">
                <h3 className="font-bold text-primary-900 mb-4 flex items-center">
                  <span className="w-8 h-1 bg-secondary-500 mr-3"></span>
                  Available Degrees
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {degrees.map((degree, index) => (
                    <li key={index} className="flex items-start text-sm text-neutral-700">
                      <Check className="w-4 h-4 text-secondary-600 mt-1 mr-2 flex-shrink-0" />
                      {degree}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>
      </Container>
    </div>
  );
};