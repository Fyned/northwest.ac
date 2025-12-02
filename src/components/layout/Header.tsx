import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../common/Container';
import { Navigation } from './Navigation';
import { TopBar } from './TopBar';
import { MobileMenu } from './MobileMenu'; // YENİ İMPORT
import { Menu, Search } from 'lucide-react';
import { Button } from '../common/Button';
import logoHorizontal from '../../assets/images/logo-horizontal.png';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false); // YENİ STATE

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Mobil Menü Bileşeni */}
      <MobileMenu isOpen={isMobileOpen} onClose={() => setIsMobileOpen(false)} />

      <header className="fixed w-full top-0 z-40 flex flex-col">
        <div className={`transition-all duration-500 ease-in-out overflow-hidden ${isScrolled ? 'max-h-0 opacity-0' : 'max-h-10 opacity-100'}`}>
          <TopBar />
        </div>
        
        <div className={`w-full border-b border-white/10 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' 
            : 'bg-white py-5'
        }`}>
          <Container>
            <div className="flex justify-between items-center">
              {/* Logo */}
              <Link to="/" className="group flex items-center gap-3">
                <img 
                  src={logoHorizontal} 
                  alt="UNW" 
                  className={`transition-all duration-300 object-contain ${isScrolled ? 'h-10' : 'h-16'}`}
                />
              </Link>

              {/* Navigasyon (Masaüstü) */}
              <Navigation />

              {/* Sağ Taraf */}
              <div className="hidden xl:flex items-center space-x-4">
                <button className="p-2 text-primary-800 hover:bg-primary-50 rounded-full transition-colors">
                  <Search className="w-5 h-5" />
                </button>
                <Button 
                  size={isScrolled ? "sm" : "md"} 
                  className="bg-primary-900 text-white shadow-lg shadow-primary-900/20 hover:shadow-primary-900/40 transition-all"
                >
                  Apply Now
                </Button>
              </div>

              {/* Mobil Buton (Tetikleyici) */}
              <button 
                onClick={() => setIsMobileOpen(true)} // YENİ AKSİYON
                className="xl:hidden p-2 text-primary-900 hover:bg-neutral-100 rounded-lg transition-colors"
              >
                <Menu className="w-7 h-7" />
              </button>
            </div>
          </Container>
        </div>
      </header>
    </>
  );
};