import { Container } from '../components/common/Container';
import { Section } from '../components/common/Section'; // SectionTitle silindi
import { SmartImage } from '../components/common/SmartImage';
import { Quote, Award, Globe } from 'lucide-react'; // CheckCircle silindi
import { motion } from 'framer-motion';

// Görseller
import campusImg from '../assets/images/campus-building.jpg';

export const About = () => {
  return (
    <div className="bg-neutral-50 min-h-screen font-sans">
      
      {/* Hero Kısmı */}
      <div className="relative bg-primary-900 text-white py-32 overflow-hidden">
        <div className="absolute inset-0 bg-primary-900/90 z-10" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 z-0" />
        <Container className="relative z-20 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-serif font-bold mb-6"
          >
            About University of NorthWest
          </motion.h1>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto font-light leading-relaxed">
            An ISO certified, international university dedicated to excellence, creativity, and an innovative approach to learning.
          </p>
        </Container>
      </div>

      {/* Genel Bakış & Görsel */}
      <Section>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <span className="text-secondary-600 font-bold tracking-widest uppercase text-sm">Our Identity</span>
              <h2 className="text-3xl font-serif font-bold text-primary-900 mt-2 mb-4">Who We Are</h2>
              <div className="h-1 w-20 bg-secondary-500 rounded-full mb-6" />
            </div>
            <p className="text-neutral-600 leading-relaxed text-lg">
              University of NorthWest is rapidly becoming a pioneer in the field of online and distance education. 
              With students from all religions, races, and nationalities, we are proud to offer opportunities 
              for lifelong learning through quality higher education.
            </p>
            <p className="text-neutral-600 leading-relaxed">
              We offer multiple modes of study including On-Campus, Off-Campus (Distance Learning), and Executive Programmes 
              across various disciplines, ensuring education is accessible to everyone, everywhere.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="p-4 bg-primary-50 rounded-lg border-l-4 border-primary-900">
                <Globe className="w-8 h-8 text-primary-900 mb-2" />
                <h3 className="font-bold text-primary-900">Global Reach</h3>
                <p className="text-sm text-neutral-600">Presence in over 25 countries</p>
              </div>
              <div className="p-4 bg-secondary-50 rounded-lg border-l-4 border-secondary-500">
                <Award className="w-8 h-8 text-secondary-600 mb-2" />
                <h3 className="font-bold text-primary-900">ISO Certified</h3>
                <p className="text-sm text-neutral-600">International quality standards</p>
              </div>
            </div>
          </div>
          
          {/* Görsel Alanı */}
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-secondary-100 rounded-full z-0" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary-100 rounded-full z-0" />
            <SmartImage 
              src={campusImg} 
              alt="University Building" 
              className="relative z-10 shadow-2xl rounded-lg transform rotate-2 hover:rotate-0 transition-transform duration-500"
              aspectRatio="portrait"
              placeholderText="Modern Campus Building"
            />
          </div>
        </div>
      </Section>

      {/* Misyon ve Vizyon (Renkli Blok) */}
      <Section bg="navy" className="relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-16 -mt-16 blur-3xl" />
        <div className="grid md:grid-cols-1 gap-12 max-w-4xl mx-auto text-center">
          <div>
            <Award className="w-16 h-16 text-secondary-500 mx-auto mb-6" />
            <h2 className="text-4xl font-serif font-bold mb-6">Our Mission</h2>
            <blockquote className="text-2xl md:text-3xl font-serif italic leading-relaxed text-secondary-100 mb-8">
              "Education is the power to think clearly, the power to act well in the working world, and the power to appreciate life."
            </blockquote>
            <p className="text-lg text-neutral-300 leading-relaxed">
              We believe that a strong higher education system is the cornerstone of an autonomous society. 
              We are committed to providing equal educational opportunities for all segments of society, 
              empowering individuals to achieve their full potential.
            </p>
          </div>
        </div>
      </Section>

      {/* Rektör Mesajı */}
      <Section>
        <Container>
          <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-card border border-neutral-100 overflow-hidden flex flex-col md:flex-row">
            <div className="bg-secondary-500 p-8 md:p-12 md:w-1/3 flex flex-col justify-center items-center text-center text-primary-900">
              <div className="w-32 h-32 bg-white/30 rounded-full flex items-center justify-center mb-6 backdrop-blur-sm">
                <Quote className="w-16 h-16 text-primary-900" />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-2">The Rector</h3>
              <p className="font-medium opacity-80">University of NorthWest</p>
            </div>
            <div className="p-8 md:p-12 md:w-2/3 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-primary-900 mb-6">A Message of Welcome</h3>
              <p className="text-neutral-600 text-lg leading-relaxed mb-6">
                "We thank you for your interest in University of NorthWest. We are proud to offer you the opportunity 
                to pursue your academic goals with us. Our exceptional faculty and staff are dedicated to each 
                student's success, providing a supportive and innovative environment."
              </p>
              <div className="flex items-center space-x-2 text-secondary-600 font-serif font-bold text-xl">
                <span>With Pride and Honour!</span>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
};