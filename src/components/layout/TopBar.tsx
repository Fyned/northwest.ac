import { Container } from '../common/Container';
import { Phone, Mail, MapPin } from 'lucide-react';

export const TopBar = () => {
  return (
    <div className="bg-primary-950 text-primary-200 py-2 text-[11px] uppercase tracking-widest font-medium border-b border-white/5 hidden lg:block">
      <Container>
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <a href="#" className="flex items-center hover:text-white transition-colors">
              <MapPin className="w-3 h-3 mr-2 text-secondary-500" />
              <span>Brooklyn, NY</span>
            </a>
            <a href="tel:18008698960" className="flex items-center hover:text-white transition-colors">
              <Phone className="w-3 h-3 mr-2 text-secondary-500" />
              <span>1-800-UNW-8960</span>
            </a>
            <a href="mailto:info@northwest.ac" className="flex items-center hover:text-white transition-colors">
              <Mail className="w-3 h-3 mr-2 text-secondary-500" />
              <span>info@northwest.ac</span>
            </a>
          </div>
          <div className="flex items-center space-x-6">
            <a href="#" className="hover:text-secondary-400 transition-colors">Alumni</a>
            <a href="#" className="hover:text-secondary-400 transition-colors">Library</a>
            <a href="#" className="hover:text-secondary-400 transition-colors">Staff Portal</a>
          </div>
        </div>
      </Container>
    </div>
  );
};