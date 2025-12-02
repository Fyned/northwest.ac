// import { Container } silindi
import { Section, SectionTitle } from '../../components/common/Section';
import { SmartImage } from '../../components/common/SmartImage';
import { BookOpen } from 'lucide-react';

// Görsel
import gradImg from '../../assets/images/graduation.jpg';

export const Postgraduate = () => {
  return (
    <div className="bg-neutral-50 min-h-screen">
      <Section bg="white" className="pt-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          <div className="order-2 md:order-1">
            <SectionTitle align="left" subtitle="Advance Your Career">Postgraduate Programmes</SectionTitle>
            
            <div className="prose max-w-none text-neutral-600 leading-relaxed space-y-6">
              <p className="text-lg">
                Postgraduate programmes offer the opportunity to undertake in-depth study in a particular area of interest.
                Whether you are looking to advance your career, deepen your expertise, or pursue academic research, 
                our degrees are structured to provide the rigorous foundation you need.
              </p>
              
              <div className="bg-primary-50 border-l-4 border-primary-900 p-6 rounded-r-lg">
                <BookOpen className="w-8 h-8 text-primary-900 mb-3 opacity-50" />
                <p className="italic text-primary-900 font-medium text-lg">
                  "Postgraduate study is also more challenging than undergraduate study; it requires commitment 
                  and the demonstration of more advanced study skills."
                </p>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="relative">
              <div className="absolute -top-4 -right-4 w-full h-full border-2 border-secondary-500 rounded-lg z-0" />
              <SmartImage 
                src={gradImg} 
                alt="Postgraduate Students" 
                className="relative z-10 shadow-xl rounded-lg"
                placeholderText="Graduation Ceremony"
                aspectRatio="square"
              />
            </div>
          </div>

        </div>
      </Section>
    </div>
  );
};