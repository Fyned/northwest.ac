import { Link } from 'react-router-dom';
import { Container } from '../components/common/Container';
import { Section, SectionTitle } from '../components/common/Section';
import { Card } from '../components/common/Card';
import { SmartImage } from '../components/common/SmartImage';
import { Button } from '../components/common/Button';
import { Hero } from '../components/sections/Hero';
import { programmes } from '../data/programmes';
import { ArrowRight, CheckCircle, Globe, Laptop, Clock, Award } from 'lucide-react';

// Görseller (Mevcut görsellerden)
import studentImg from '../assets/images/student-life.jpg';
import campusImg from '../assets/images/campus-building.jpg';

export const Home = () => {
  // Öne çıkan 3 programı seçelim (Her seviyeden bir tane)
  const featuredProgrammes = [
    programmes.find(p => p.id === 'bsc-cs'), // Bachelor
    programmes.find(p => p.id === 'mba-exec'), // Master
    programmes.find(p => p.id === 'phd-polsci') // PhD
  ].filter(Boolean); // Boş (undefined) varsa filtrele

  const features = [
    { title: "Globally Recognized", desc: "Programs recognized by top institutions and employers worldwide.", icon: Globe },
    { title: "Flexible Learning", desc: "Study from anywhere, fitting education into your lifestyle.", icon: Laptop },
    { title: "Accredited Degrees", desc: "Internationally accredited programs ensuring worldwide acceptance.", icon: Award },
    { title: "Self-Paced", desc: "Start at any time and proceed at your own pace.", icon: Clock },
  ];

  return (
    <div className="bg-neutral-50 font-sans">
      
      {/* 1. HERO BÖLÜMÜ */}
      <Hero />

      {/* 2. ÜNİVERSİTE TANITIMI (About Teaser) */}
      <Section>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-secondary-100 rounded-full z-0" />
            <SmartImage 
              src={campusImg} 
              alt="University Building" 
              className="relative z-10 shadow-2xl rounded-lg transform -rotate-2 hover:rotate-0 transition-transform duration-500"
              placeholderText="Main Campus"
              aspectRatio="square"
            />
          </div>
          <div className="space-y-6">
            <span className="text-secondary-600 font-bold tracking-widest uppercase text-sm">Discover NorthWest</span>
            <h2 className="text-4xl font-serif font-bold text-primary-900 leading-tight">
              An ISO Certified, International University
            </h2>
            <p className="text-lg text-neutral-600 leading-relaxed">
              University of NorthWest is rapidly becoming a pioneer in the field of online education. 
              We cater to students from all religions, races, and nationalities, offering opportunities 
              for lifelong learning through quality higher education.
            </p>
            <ul className="space-y-3">
              {[
                "Excellence, creativity and innovative approach",
                "On-Campus and Off-Campus (Distance Learning)",
                "Strong career support and counseling"
              ].map((item, i) => (
                <li key={i} className="flex items-center text-primary-800 font-medium">
                  <CheckCircle className="w-5 h-5 text-secondary-500 mr-3 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="pt-4">
              <Link to="/about">
                <Button variant="outline" className="border-primary-900 text-primary-900 hover:bg-primary-900 hover:text-white">
                  Read More About Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* 3. ÖNE ÇIKAN PROGRAMLAR (Academic Highlights) */}
      <Section bg="gray">
        <SectionTitle subtitle="Academic Excellence">Featured Programmes</SectionTitle>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
          {featuredProgrammes.map((prog: any) => (
            <Card
              key={prog.id}
              title={prog.title}
              subtitle={prog.level}
              className="bg-white"
              footer={
                <Link to="/academics" className="text-secondary-600 font-bold text-sm hover:text-secondary-700 flex items-center">
                  View Details <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              }
            >
              <p className="line-clamp-3">{prog.description}</p>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Link to="/academics">
            <Button size="lg" className="shadow-lg shadow-primary-900/20">
              View All 478+ Programmes
            </Button>
          </Link>
        </div>
      </Section>

      {/* 4. NEDEN BİZ? (Why Choose Us - Features) */}
      <Section bg="navy" className="relative overflow-hidden">
        {/* Arka plan deseni */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
        
        <Container className="relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">Why Choose University of NorthWest?</h2>
            <p className="text-primary-200 text-lg">
              We provide a supportive and innovative environment dedicated to your success.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feat, idx) => (
              <div key={idx} className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-colors group">
                <div className="w-12 h-12 bg-secondary-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feat.icon className="w-6 h-6 text-primary-950" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feat.title}</h3>
                <p className="text-primary-200 text-sm leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 5. ÖĞRENCİ YAŞAMI (Student Life Teaser) */}
      <Section>
        <div className="bg-primary-50 rounded-3xl p-8 md:p-12 border border-primary-100">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-serif font-bold text-primary-900 mb-6">Student Life & Community</h2>
              <p className="text-neutral-600 mb-6 leading-relaxed">
                From your first week to graduation, we are here to support you. 
                Whether you are studying on campus or online, you are part of a vibrant global community.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                   <div className="w-2 h-2 bg-secondary-500 rounded-full" />
                   <span className="text-primary-900 font-medium">Comprehensive Academic Support</span>
                </div>
                <div className="flex items-center space-x-3">
                   <div className="w-2 h-2 bg-secondary-500 rounded-full" />
                   <span className="text-primary-900 font-medium">Global Alumni Network</span>
                </div>
                <div className="flex items-center space-x-3">
                   <div className="w-2 h-2 bg-secondary-500 rounded-full" />
                   <span className="text-primary-900 font-medium">Career Guidance & Mentorship</span>
                </div>
              </div>
              <Link to="/student-life/support">
                <Button>Explore Student Services</Button>
              </Link>
            </div>
            <div className="order-1 md:order-2 relative">
              <SmartImage 
                src={studentImg}
                alt="Student Life"
                className="rounded-2xl shadow-lg rotate-2 hover:rotate-0 transition-transform duration-500"
                placeholderText="Students on Campus"
                aspectRatio="video"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* 6. CALL TO ACTION (Başvuru) */}
      <div className="bg-secondary-500 py-16 text-center">
        <Container>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-950 mb-6">
            Ready to Shape Your Future?
          </h2>
          <p className="text-primary-900/80 text-lg max-w-2xl mx-auto mb-8 font-medium">
            Join over 9,000 successful graduates. Applications for the 2026 academic year are now open.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/apply/undergraduate">
              <Button size="lg" className="bg-primary-900 text-white hover:bg-primary-800 border-none w-full sm:w-auto">
                Apply Online
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-primary-900 text-primary-900 hover:bg-primary-900 hover:text-white w-full sm:w-auto">
                Contact Admissions
              </Button>
            </Link>
          </div>
        </Container>
      </div>

    </div>
  );
};