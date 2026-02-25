import { useState, useRef, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import menuConfig from '../../data/menuConfig.json';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navigation = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const location = useLocation();

  const handleMouseEnter = useCallback((title: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenDropdown(title);
  }, []);

  const handleMouseLeave = useCallback(() => {
    timeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 150);
  }, []);

  const isActive = (path: string) => {
    return location.pathname === path || location.pathname.startsWith(path + '/');
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const isMenuActive = (item: any): boolean => {
    if (item.path && isActive(item.path)) return true;
    if (item.children) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return item.children.some((child: any) => isMenuActive(child));
    }
    return false;
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const isMegaMenu = (item: any) => {
    if (!item.children) return false;
    const totalLinks = item.children.reduce(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (count: number, child: any) =>
        count + (child.children ? child.children.length : 1),
      0
    );
    return totalLinks > 4;
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const renderMenuItem = (item: any) => {
    const hasChildren = item.children && item.children.length > 0;
    const active = isMenuActive(item);

    if (!hasChildren) {
      return (
        <Link
          key={item.title}
          to={item.path}
          className={`relative px-3 py-2 text-[13px] font-semibold uppercase tracking-wide transition-colors duration-200
            ${active ? 'text-secondary-600' : 'text-primary-900 hover:text-secondary-600'}`}
        >
          {item.title}
          {active && (
            <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-secondary-500 rounded-full" />
          )}
        </Link>
      );
    }

    const isMega = isMegaMenu(item);

    return (
      <div
        key={item.title}
        className="relative h-full flex items-center"
        onMouseEnter={() => handleMouseEnter(item.title)}
        onMouseLeave={handleMouseLeave}
      >
        <Link
          to={item.path}
          className={`relative flex items-center gap-1 px-3 py-2 text-[13px] font-semibold uppercase tracking-wide transition-colors duration-200
            ${active ? 'text-secondary-600' : 'text-primary-900 hover:text-secondary-600'}`}
          aria-expanded={openDropdown === item.title}
          aria-haspopup="true"
        >
          {item.title}
          <ChevronDown
            className={`w-3.5 h-3.5 transition-transform duration-200 ${
              openDropdown === item.title ? 'rotate-180' : ''
            }`}
            aria-hidden="true"
          />
          {active && (
            <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-secondary-500 rounded-full" />
          )}
        </Link>

        <AnimatePresence>
          {openDropdown === item.title && (
            <>
              {/* Bridge element to prevent dropdown closing when moving mouse */}
              <div className="absolute left-0 right-0 top-full h-3" />

              {isMega ? (
                /* Mega Menu - Full Width */
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  transition={{ duration: 0.15, ease: 'easeOut' }}
                  className="fixed left-0 right-0 top-full mt-0 z-50"
                  style={{ width: '100vw' }}
                >
                  <div className="bg-white border-t border-neutral-100 shadow-elevated">
                    <div className="max-w-7xl mx-auto px-8 py-8">
                      <div className="grid grid-cols-3 gap-8">
                        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                        {item.children.map((child: any, idx: number) => (
                          <div key={idx}>
                            {child.children ? (
                              <div>
                                <span className="block text-xs font-bold text-secondary-600 uppercase tracking-widest mb-3 pb-2 border-b border-neutral-100">
                                  {child.title}
                                </span>
                                <div className="space-y-1">
                                  {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                                  {child.children.map((subChild: any) => (
                                    <Link
                                      key={subChild.title}
                                      to={subChild.path}
                                      onClick={() => setOpenDropdown(null)}
                                      className={`block py-1.5 text-sm transition-colors duration-150
                                        ${isActive(subChild.path)
                                          ? 'text-secondary-600 font-medium'
                                          : 'text-neutral-600 hover:text-primary-900'
                                        }`}
                                    >
                                      {subChild.title}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ) : (
                              <Link
                                to={child.path}
                                onClick={() => setOpenDropdown(null)}
                                className={`block py-2 text-sm transition-colors duration-150
                                  ${isActive(child.path)
                                    ? 'text-secondary-600 font-medium'
                                    : 'text-neutral-600 hover:text-primary-900'
                                  }`}
                              >
                                {child.title}
                              </Link>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ) : (
                /* Standard Dropdown */
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  transition={{ duration: 0.15, ease: 'easeOut' }}
                  className="absolute left-0 top-full mt-0 w-60 bg-white rounded-xl shadow-card-hover border border-neutral-100 py-2 z-50"
                >
                  {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                  {item.children.map((child: any) => (
                    <div key={child.title}>
                      {child.children ? (
                        <div className="px-4 py-2">
                          <span className="block text-xs font-bold text-secondary-600 uppercase tracking-wider mb-2">
                            {child.title}
                          </span>
                          {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                          {child.children.map((subChild: any) => (
                            <Link
                              key={subChild.title}
                              to={subChild.path}
                              onClick={() => setOpenDropdown(null)}
                              className={`block py-1.5 pl-2 text-sm rounded-md transition-colors duration-150
                                ${isActive(subChild.path)
                                  ? 'text-secondary-600 font-medium bg-secondary-50'
                                  : 'text-neutral-600 hover:text-primary-900 hover:bg-neutral-50'
                                }`}
                            >
                              {subChild.title}
                            </Link>
                          ))}
                        </div>
                      ) : (
                        <Link
                          to={child.path}
                          onClick={() => setOpenDropdown(null)}
                          className={`block px-4 py-2.5 text-sm transition-colors duration-150
                            ${isActive(child.path)
                              ? 'text-secondary-600 font-medium bg-secondary-50/50'
                              : 'text-neutral-600 hover:text-primary-900 hover:bg-neutral-50'
                            }`}
                        >
                          {child.title}
                        </Link>
                      )}
                    </div>
                  ))}
                </motion.div>
              )}
            </>
          )}
        </AnimatePresence>
      </div>
    );
  };

  return (
    <nav className="hidden xl:flex items-center h-full gap-1" aria-label="Main navigation">
      {menuConfig.map((item) => renderMenuItem(item))}
    </nav>
  );
};
