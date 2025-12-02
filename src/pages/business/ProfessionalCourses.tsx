import { Container } from '../../components/common/Container';
import { Section, SectionTitle } from '../../components/common/Section';
import { CircularProgress } from '../../components/common/CircularProgress';

export const ProfessionalCourses = () => {
  const stats = [
    { label: "International Student Success", value: 93 },
    { label: "Improve the Educational Process", value: 96 },
    { label: "Project Planning and Development", value: 90 },
    { label: "Personal Development", value: 85 },
  ];

  return (
    <div className="bg-neutral-50 min-h-screen">
      <Section className="pt-24 pb-12">
        <Container>
           <div className="bg-white p-12 rounded-2xl shadow-card border border-neutral-100 mb-16">
              <div className="max-w-3xl mx-auto text-center mb-16">
                <SectionTitle>Professional Courses</SectionTitle>
                <p className="text-lg text-neutral-600 leading-relaxed">
                  We offer a comprehensive range of short courses designed for professional development. 
                  These courses are tailored to meet the evolving needs of industries and individuals 
                  seeking to enhance their skill sets.
                </p>
              </div>

              <div className="border-t border-neutral-100 pt-12">
                <h3 className="text-center text-xl font-bold text-primary-900 mb-12 font-serif">Performance Indicators</h3>
                
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 justify-items-center">
                  {stats.map((stat, index) => (
                    <CircularProgress 
                      key={index}
                      value={stat.value}
                      label={stat.label}
                    />
                  ))}
                </div>
              </div>
           </div>
        </Container>
      </Section>
    </div>
  );
};