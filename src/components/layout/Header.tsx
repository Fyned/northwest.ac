import { useState, useEffect, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Container } from '../common/Container';
import { Navigation } from './Navigation';
import { MobileMenu } from './MobileMenu';
import { TopBar } from './TopBar';
import { Menu, Search, X, ArrowRight, FileText } from 'lucide-react';
import logoHorizontal from '../../assets/images/logo-horizontal.png';
import menuConfig from '../../data/menuConfig.json';
import { AnimatePresence, motion } from 'framer-motion';

interface SearchItem {
  title: string;
  path: string;
  category: string;
}

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isSearchOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isSearchOpen]);

  const searchItems = useMemo(() => {
    const items: SearchItem[] = [];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const traverse = (nodes: any[], category: string) => {
      for (const node of nodes) {
        if (node.path && !node.children) {
          items.push({ title: node.title, path: node.path, category });
        }
        if (node.children) {
          traverse(node.children, node.title);
        }
      }
    };
    traverse(menuConfig, 'Main');
    return items;
  }, []);

  const filteredResults = searchItems.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchResultClick = (path: string) => {
    setIsSearchOpen(false);
    setSearchQuery('');
    navigate(path);
  };

  return (
    <>
      {/* Mobile Menu */}
      <MobileMenu isOpen={isMobileOpen} onClose={() => setIsMobileOpen(false)} />

      {/* Search Overlay */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] bg-white/98 backdrop-blur-2xl flex flex-col font-sans"
            role="dialog"
            aria-modal="true"
            aria-label="Search"
          >
            <Container>
              <div className="flex justify-end pt-6 pb-4">
                <button
                  onClick={() => { setIsSearchOpen(false); setSearchQuery(''); }}
                  className="p-2.5 rounded-full hover:bg-neutral-100 transition-colors text-neutral-400 hover:text-neutral-700"
                  aria-label="Close search"
                >
                  <X className="w-7 h-7" />
                </button>
              </div>

              <div className="max-w-3xl mx-auto w-full mt-4">
                <div className="relative">
                  <Search className="absolute left-0 top-1/2 -translate-y-1/2 w-7 h-7 text-neutral-300" />
                  <input
                    type="text"
                    autoFocus
                    placeholder="Search courses, pages..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-transparent border-b-2 border-neutral-200 text-2xl md:text-4xl font-display font-semibold text-primary-900 py-4 pl-11 focus:outline-none focus:border-secondary-500 placeholder:text-neutral-300 transition-colors"
                  />
                </div>

                <div className="mt-10 max-h-[60vh] overflow-y-auto">
                  {searchQuery.length > 0 ? (
                    <div className="space-y-1">
                      <p className="text-xs font-semibold text-neutral-400 uppercase tracking-widest mb-4">
                        {filteredResults.length} result{filteredResults.length !== 1 ? 's' : ''} found
                      </p>
                      {filteredResults.map((item, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleSearchResultClick(item.path)}
                          className="w-full flex items-center justify-between p-4 hover:bg-neutral-50 rounded-xl group transition-all text-left"
                        >
                          <div className="flex items-center">
                            <div className="w-10 h-10 rounded-lg bg-primary-50 flex items-center justify-center text-primary-700 mr-4 group-hover:bg-primary-900 group-hover:text-white transition-colors">
                              <FileText className="w-5 h-5" />
                            </div>
                            <div>
                              <h4 className="text-base font-semibold text-primary-900">{item.title}</h4>
                              <span className="text-xs text-neutral-500 font-medium">{item.category}</span>
                            </div>
                          </div>
                          <ArrowRight className="w-4 h-4 text-neutral-300 group-hover:text-secondary-500 -translate-x-2 group-hover:translate-x-0 transition-all opacity-0 group-hover:opacity-100" />
                        </button>
                      ))}
                      {filteredResults.length === 0 && (
                        <div className="text-center py-16">
                          <p className="text-neutral-400 text-lg">No results found for &ldquo;{searchQuery}&rdquo;</p>
                          <p className="text-neutral-300 text-sm mt-2">Try a different search term</p>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="text-center py-20">
                      <p className="text-neutral-400">Start typing to discover pages, courses, and more.</p>
                    </div>
                  )}
                </div>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header */}
      <header className="fixed w-full top-0 z-40 flex flex-col font-sans" role="banner">
        {/* Top Bar - hides on scroll */}
        <div className={`transition-all duration-300 overflow-hidden ${isScrolled ? 'max-h-0 opacity-0' : 'max-h-12 opacity-100'}`}>
          <TopBar />
        </div>

        {/* Main Header Bar */}
        <div
          className={`w-full transition-all duration-300 ${
            isScrolled
              ? 'bg-white shadow-nav py-2'
              : 'bg-white py-3 md:py-4'
          }`}
        >
          <Container>
            <div className="flex items-center justify-between">

              {/* Logo */}
              <div className="flex-shrink-0 flex items-center mr-6">
                <Link to="/" className="block relative z-50">
                  <img
                    src={logoHorizontal}
                    alt="University of NorthWest"
                    className={`transition-all duration-300 object-contain h-auto ${
                      isScrolled
                        ? 'w-36 md:w-44'
                        : 'w-44 md:w-64 lg:w-72'
                    }`}
                    style={{ maxHeight: '90px' }}
                  />
                </Link>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden xl:flex flex-1 justify-center px-4">
                <Navigation />
              </div>

              {/* Right Side Actions */}
              <div className="flex-shrink-0 flex items-center gap-3 ml-4">
                {/* Search Button - Desktop */}
                <button
                  onClick={() => setIsSearchOpen(true)}
                  className="hidden xl:flex items-center gap-2 px-3.5 py-2 text-neutral-500 hover:text-primary-900 hover:bg-neutral-50 rounded-full transition-all duration-200"
                  aria-label="Open search"
                >
                  <Search className="w-5 h-5" />
                  <span className="text-sm font-medium">Search</span>
                </button>

                {/* Apply Now CTA - Desktop */}
                <Link
                  to="/apply/undergraduate"
                  className="hidden xl:inline-flex items-center gap-2 px-5 py-2.5 bg-secondary-500 hover:bg-secondary-600 text-white text-sm font-semibold rounded-lg transition-all duration-200 shadow-sm hover:shadow-md btn-shine"
                >
                  Apply Now
                </Link>

                {/* Mobile Menu Toggle */}
                <button
                  onClick={() => setIsMobileOpen(true)}
                  className="xl:hidden p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center text-primary-900 hover:bg-neutral-100 rounded-lg transition-colors"
                  aria-label="Open menu"
                  aria-expanded={isMobileOpen}
                >
                  <Menu className="w-7 h-7" />
                </button>
              </div>

            </div>
          </Container>
        </div>
      </header>
    </>
  );
};
