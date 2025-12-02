import { Container } from '../common/Container';
import { MapPin, Mail, Phone, ArrowRight } from 'lucide-react';
import logoHorizontal from '../../assets/images/logo-horizontal.png';

export const Footer = () => {
  return (
    <footer className="bg-primary-950 text-white pt-20 pb-10 border-t-4 border-secondary-600 relative overflow-hidden">
      
      {/* Arka Plan Deseni */}
      <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid md:grid-cols-12 gap-12 mb-16">
          
          {/* Marka Alanı (4 Kolon) */}
          <div className="md:col-span-4 space-y-6">
            <div className="bg-white p-4 rounded-lg inline-block w-48">
              <img src={logoHorizontal} alt="UNW Logo" className="w-full h-auto" />
            </div>
            <p className="text-primary-200 text-sm leading-relaxed">
              Since 1999, University of NorthWest has been a pioneer in distance learning, 
              empowering students globally through ISO-certified education.
            </p>
            <div className="pt-4">
               <a href="/apply" className="inline-flex items-center text-secondary-500 font-bold hover:text-white transition-colors">
                  Start Your Application <ArrowRight className="ml-2 w-4 h-4" />
               </a>
            </div>
          </div>

          {/* Linkler (2+2 Kolon) */}
          <div className="md:col-span-2">
            <h4 className="font-serif font-bold text-lg mb-6 text-secondary-500">Study</h4>
            <ul className="space-y-3 text-sm text-primary-200">
              <li><a href="#" className="hover:text-white transition-colors">Undergraduate</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Postgraduate</a></li>
              <li><a href="#" className="hover:text-white transition-colors">PhD Research</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Professional</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-serif font-bold text-lg mb-6 text-secondary-500">University</h4>
            <ul className="space-y-3 text-sm text-primary-200">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Faculty</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Accreditations</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* İletişim (4 Kolon) */}
          <div className="md:col-span-4">
            <h4 className="font-serif font-bold text-lg mb-6 text-secondary-500">Contact Us</h4>
            <ul className="space-y-4 text-sm text-primary-200">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-secondary-600 mr-3 shrink-0" />
                <span>45 Main Street, Ste 309, #264<br/>Brooklyn, NY 11201, USA</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-secondary-600 mr-3 shrink-0" />
                <a href="tel:18008698960" className="hover:text-white">1-800-UNW-8960</a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-secondary-600 mr-3 shrink-0" />
                <a href="mailto:info@northwest.ac" className="hover:text-white">info@northwest.ac</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Alt Çizgi */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-primary-400">
          <p>&copy; 2022 Northwest University. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
             <a href="#" className="hover:text-white">Privacy Policy</a>
             <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </Container>
    </footer>
  );
};