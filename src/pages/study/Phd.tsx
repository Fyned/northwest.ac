import { Container } from '../../components/common/Container';
import { Section, SectionTitle } from '../../components/common/Section';
import { SmartImage } from '../../components/common/SmartImage';
import { Microscope } from 'lucide-react';

// Görsel
import researchImg from '../../assets/images/research-lab.jpg';

export const Phd = () => {
  const researchTopics = [
    "Qualty, Management and Policy",
    "Global Power",
    "Innovation",
    "Consultancy"
  ];

  return (
    <div className="bg-neutral-50 min-h-screen">
      
      <Section bg="pattern" className="py-24">
        <SectionTitle subtitle="The Highest Level of Scholarship">Doctoral (Ph.D.) Research</SectionTitle>
      </Section>

      {/* İçerik - Çakışma düzeltildi */}
      <Container className="py-16 relative z-10 pb-24">
        <div className="bg-white p-8 md:p-12 rounded-xl shadow-card border border-neutral-100">
          
          <div className="flex flex-col md:flex-row gap-10">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-primary-900 mb-4">The Process</h3>
              <p className="text-neutral-600 leading-relaxed mb-6">
                The doctoral programme involves a cycle of coursework, comprehensive exams, and the dissertation process. 
                The completion of the dissertation signifies that the student is able to make significant independent 
                contributions to the field.
              </p>
              
              <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200">
                 <div className="flex items-center mb-4">
                    <Microscope className="w-6 h-6 text-secondary-600 mr-2" />
                    <h4 className="font-bold text-primary-900 m-0">Key Research Areas</h4>
                 </div>
                 <ul className="space-y-3">
                  {researchTopics.map((topic, index) => (
                    <li key={index} className="flex items-center text-neutral-700 bg-white px-4 py-2 rounded border border-neutral-100 shadow-sm">
                      <span className="w-2 h-2 bg-secondary-500 rounded-full mr-3"></span>
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="md:w-1/2">
              <SmartImage 
                src={researchImg} 
                alt="Research Laboratory" 
                className="h-full w-full rounded-lg shadow-md min-h-[300px]"
                placeholderText="Research & Lab Work"
                aspectRatio="square"
              />
            </div>
          </div>

        </div>
      </Container>
    </div>
  );
};