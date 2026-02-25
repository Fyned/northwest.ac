import { Container } from '../common/Container';
import { Phone, Mail, MapPin, ExternalLink } from 'lucide-react';

export const TopBar = () => {
  return (
    <div className="bg-primary-950 text-neutral-300 py-2 text-[11px] uppercase tracking-widest font-medium border-b border-white/5 hidden lg:block">
      <Container>
        <div className="flex justify-between items-center">
          {/* Sol: İletişim Bilgileri */}
          <div className="flex items-center space-x-5">
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-white transition-colors duration-200"
            >
              <MapPin className="w-3 h-3 text-secondary-400 flex-shrink-0" />
              <span>Brooklyn, NY 11201</span>
            </a>
            <span className="w-px h-3 bg-white/15" aria-hidden="true" />
            <a
              href="tel:18008698960"
              className="flex items-center gap-1.5 hover:text-white transition-colors duration-200"
            >
              <Phone className="w-3 h-3 text-secondary-400 flex-shrink-0" />
              <span>1-800-UNW-8960</span>
            </a>
            <span className="w-px h-3 bg-white/15" aria-hidden="true" />
            <a
              href="mailto:info@northwest.ac"
              className="flex items-center gap-1.5 hover:text-white transition-colors duration-200"
            >
              <Mail className="w-3 h-3 text-secondary-400 flex-shrink-0" />
              <span>info@northwest.ac</span>
            </a>
          </div>

          {/* Sağ: Portal Linkleri */}
          <div className="flex items-center space-x-5">
            <a href="#" className="flex items-center gap-1 hover:text-secondary-400 transition-colors duration-200">
              Alumni
            </a>
            <span className="w-px h-3 bg-white/15" aria-hidden="true" />
            <a href="#" className="flex items-center gap-1 hover:text-secondary-400 transition-colors duration-200">
              Library
            </a>
            <span className="w-px h-3 bg-white/15" aria-hidden="true" />
            <a href="#" className="flex items-center gap-1 hover:text-secondary-400 transition-colors duration-200">
              Staff Portal
            </a>
            <span className="w-px h-3 bg-white/15" aria-hidden="true" />
            <a
              href="#"
              className="flex items-center gap-1 text-secondary-400 hover:text-secondary-300 transition-colors duration-200 font-semibold"
            >
              Student Portal
              <ExternalLink className="w-2.5 h-2.5" />
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
};
