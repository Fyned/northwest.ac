import { Link } from 'react-router-dom';
import { Container } from '../common/Container';
import { MapPin, Mail, Phone, Facebook, Twitter, Linkedin, Instagram, Youtube, ArrowRight, ChevronRight } from 'lucide-react';
import logoHorizontal from '../../assets/images/logo-horizontal.png';

export const Footer = () => {
  return (
    <footer className="bg-primary-950 text-white font-sans relative overflow-hidden" role="contentinfo">

      {/* Background pattern */}
      <div className="absolute inset-0 dot-pattern opacity-[0.03] pointer-events-none" />

      {/* Main Footer Content */}
      <div className="relative z-10 pt-16 pb-12 md:pt-20 md:pb-16">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">

            {/* Column 1: Brand - 3 cols */}
            <div className="lg:col-span-3 space-y-5">
              <Link to="/" className="inline-block">
                <div className="bg-white p-2.5 rounded-lg inline-block">
                  <img src={logoHorizontal} alt="University of NorthWest" className="w-36 h-auto" />
                </div>
              </Link>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Pioneering distance learning since 1999. Empowering students globally through
                ISO-certified education and innovation across 25+ countries.
              </p>
              <div className="flex gap-2">
                <SocialIcon Icon={Facebook} label="Facebook" />
                <SocialIcon Icon={Twitter} label="Twitter" />
                <SocialIcon Icon={Linkedin} label="LinkedIn" />
                <SocialIcon Icon={Instagram} label="Instagram" />
                <SocialIcon Icon={Youtube} label="YouTube" />
              </div>
            </div>

            {/* Column 2: Study - 2 cols */}
            <div className="lg:col-span-2">
              <FooterHeading>Study</FooterHeading>
              <ul className="space-y-2.5">
                <FooterLink to="/study/courses/undergraduate">Undergraduate Courses</FooterLink>
                <FooterLink to="/study/courses/postgraduate">Postgraduate Degrees</FooterLink>
                <FooterLink to="/study/courses/phd">PhD &amp; Research</FooterLink>
                <FooterLink to="/business/professional-courses">Professional Training</FooterLink>
                <FooterLink to="/academics">All Programmes</FooterLink>
              </ul>
            </div>

            {/* Column 3: About - 2 cols */}
            <div className="lg:col-span-2">
              <FooterHeading>About</FooterHeading>
              <ul className="space-y-2.5">
                <FooterLink to="/about">About University</FooterLink>
                <FooterLink to="/faculty">Our Faculty</FooterLink>
                <FooterLink to="/research/support">Research</FooterLink>
                <FooterLink to="/accreditations">Accreditations</FooterLink>
                <FooterLink to="/validation-services">Validation Services</FooterLink>
              </ul>
            </div>

            {/* Column 4: Student Life - 2 cols */}
            <div className="lg:col-span-2">
              <FooterHeading>Student Life</FooterHeading>
              <ul className="space-y-2.5">
                <FooterLink to="/student-life/support">Student Support</FooterLink>
                <FooterLink to="/student-life/careers">Careers</FooterLink>
                <FooterLink to="/student-life/fees">Fees &amp; Funding</FooterLink>
                <FooterLink to="/student-life/accommodation">Accommodation</FooterLink>
                <FooterLink to="/international/how-to-apply">International</FooterLink>
              </ul>
            </div>

            {/* Column 5: Contact - 3 cols */}
            <div className="lg:col-span-3">
              <FooterHeading>Contact Us</FooterHeading>
              <ul className="space-y-3.5">
                <li className="flex items-start gap-3 text-sm">
                  <MapPin className="w-4 h-4 text-secondary-500 mt-0.5 flex-shrink-0" />
                  <span className="text-neutral-400">45 Main Street, Ste 309<br />Brooklyn, NY 11201, USA</span>
                </li>
                <li className="flex items-center gap-3 text-sm">
                  <Phone className="w-4 h-4 text-secondary-500 flex-shrink-0" />
                  <a href="tel:18008698960" className="text-neutral-400 hover:text-white transition-colors">1-800-UNW-8960</a>
                </li>
                <li className="flex items-center gap-3 text-sm">
                  <Mail className="w-4 h-4 text-secondary-500 flex-shrink-0" />
                  <a href="mailto:info@northwest.ac" className="text-neutral-400 hover:text-white transition-colors">info@northwest.ac</a>
                </li>
              </ul>
              <div className="mt-5">
                <Link
                  to="/apply/undergraduate"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-secondary-500 hover:bg-secondary-400 text-primary-950 font-bold text-xs uppercase tracking-wider rounded-lg transition-all duration-200"
                >
                  Apply Today
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

          </div>
        </Container>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 border-t border-white/10">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-center py-6 gap-4">
            <p className="text-xs text-neutral-500">
              &copy; {new Date().getFullYear()} University of NorthWest. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-neutral-500">
              <Link to="#" className="hover:text-neutral-300 transition-colors">Privacy Policy</Link>
              <Link to="#" className="hover:text-neutral-300 transition-colors">Terms of Service</Link>
              <Link to="#" className="hover:text-neutral-300 transition-colors">Accessibility</Link>
              <Link to="#" className="hover:text-neutral-300 transition-colors">Sitemap</Link>
            </div>
          </div>
          <div className="border-t border-white/5 py-4 text-center">
            <p className="text-[11px] text-neutral-600">
              Designed by{' '}
              <a
                href="https://dmckreatif.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-500 hover:text-secondary-400 transition-colors"
              >
                DMC Kreatif
              </a>
            </p>
          </div>
        </Container>
      </div>
    </footer>
  );
};

// Helper Components
const FooterHeading = ({ children }: { children: React.ReactNode }) => (
  <h4 className="text-sm font-bold uppercase tracking-[0.15em] text-white mb-5 pb-3 border-b border-white/10">
    {children}
  </h4>
);

const FooterLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <li>
    <Link
      to={to}
      className="text-sm text-neutral-400 hover:text-white hover:pl-1 transition-all duration-200 flex items-center gap-1.5 group"
    >
      <ChevronRight className="w-3 h-3 text-neutral-600 group-hover:text-secondary-500 transition-colors" />
      {children}
    </Link>
  </li>
);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SocialIcon = ({ Icon, label }: { Icon: any; label: string }) => (
  <a
    href="#"
    aria-label={label}
    className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400 hover:bg-secondary-500 hover:text-primary-950 hover:border-secondary-500 transition-all duration-200"
  >
    <Icon className="w-4 h-4" />
  </a>
);
