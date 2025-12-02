import { Container } from '../components/common/Container';
import { Section, SectionTitle } from '../components/common/Section';
import { Card } from '../components/common/Card';
import { facultyMembers } from '../data/faculty';
import { Mail, Linkedin } from 'lucide-react';

export const Faculty = () => {
  return (
    <div className="bg-neutral-50 min-h-screen">
      <Section bg="white" className="pt-32">
        <SectionTitle subtitle="World-Class Educators">Eminent Faculty Members</SectionTitle>
        <p className="text-center text-neutral-600 max-w-2xl mx-auto mb-12">
           Our diverse and internationally acclaimed faculty brings a wealth of knowledge, research, and industry experience to University of NorthWest.
        </p>
      </Section>

      <Container className="pb-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {facultyMembers.map((member) => (
            <Card
              key={member.id}
              // imageSrc özelliği ekleyebiliriz eğer hoca fotoğrafları varsa.
              // Şimdilik 'SmartImage'in placeholder özelliği Card içinde devreye girecek (imageSrc yoksa)
              // Ancak Card bileşenimiz şu an imageSrc yoksa görsel alanı göstermiyor.
              // Bu yüzden 'title' prop'una ismi veriyoruz, görsel olmasa bile şık duracak.
              title={member.name}
              subtitle={member.title}
              footer={
                <div className="flex justify-end space-x-3">
                  <button className="p-2 rounded-full bg-neutral-100 hover:bg-primary-50 text-neutral-600 hover:text-primary-900 transition-colors">
                    <Mail className="w-4 h-4" />
                  </button>
                  <button className="p-2 rounded-full bg-neutral-100 hover:bg-blue-50 text-neutral-600 hover:text-blue-700 transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </button>
                </div>
              }
            >
              <div className="flex items-center mb-2">
                <span className="w-1.5 h-1.5 bg-secondary-500 rounded-full mr-2"></span>
                <span className="text-primary-800 font-medium">{member.department}</span>
              </div>
              <p className="text-xs text-neutral-500">
                Dedicated to research and student mentorship in the field of {member.department}.
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </div>
  );
};