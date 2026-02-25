import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronDown, Phone, Mail } from 'lucide-react';
import menuConfig from '../../data/menuConfig.json';
import logoHorizontal from '../../assets/images/logo-horizontal.png';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const toggleSubmenu = (title: string) => {
    setOpenSubmenu(openSubmenu === title ? null : title);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-primary-950/60 backdrop-blur-sm z-50"
          />

          {/* Menu Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 220 }}
            className="fixed right-0 top-0 bottom-0 w-full max-w-sm bg-white shadow-2xl z-50 flex flex-col"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-5 border-b border-neutral-100">
              <img src={logoHorizontal} alt="University of NorthWest" className="h-9 w-auto" />
              <button
                onClick={onClose}
                className="p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center text-neutral-400 hover:text-primary-900 hover:bg-neutral-100 rounded-full transition-colors"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Navigation Links */}
            <div className="flex-1 overflow-y-auto py-4 px-5">
              <div className="space-y-1">
                {menuConfig.map((item) => (
                  <div key={item.title}>
                    {item.children ? (
                      <div>
                        <button
                          onClick={() => toggleSubmenu(item.title)}
                          className="flex items-center justify-between w-full py-3.5 min-h-[44px] text-left text-primary-900 font-medium text-[15px] hover:text-secondary-600 transition-colors"
                          aria-expanded={openSubmenu === item.title}
                        >
                          {item.title}
                          <ChevronDown
                            className={`w-4 h-4 text-neutral-400 transition-transform duration-200 ${
                              openSubmenu === item.title ? 'rotate-180 text-secondary-500' : ''
                            }`}
                          />
                        </button>

                        {/* Submenu Accordion */}
                        <AnimatePresence>
                          {openSubmenu === item.title && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden"
                            >
                              <div className="pl-3 pb-3 border-l-2 border-neutral-100 ml-1 space-y-0.5">
                                {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                                {item.children.map((child: any) => (
                                  <div key={child.title}>
                                    {child.children ? (
                                      <div className="mb-2">
                                        <span className="block text-xs font-bold text-neutral-400 uppercase tracking-wider mt-3 mb-1.5 pl-3">
                                          {child.title}
                                        </span>
                                        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                                        {child.children.map((subChild: any) => (
                                          <Link
                                            key={subChild.title}
                                            to={subChild.path}
                                            onClick={onClose}
                                            className="block py-2 pl-3 text-sm text-neutral-600 hover:text-primary-900 hover:bg-neutral-50 rounded-lg transition-colors"
                                          >
                                            {subChild.title}
                                          </Link>
                                        ))}
                                      </div>
                                    ) : (
                                      <Link
                                        to={child.path}
                                        onClick={onClose}
                                        className="block py-2 pl-3 text-sm text-neutral-600 hover:text-primary-900 hover:bg-neutral-50 rounded-lg transition-colors"
                                      >
                                        {child.title}
                                      </Link>
                                    )}
                                  </div>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        to={item.path}
                        onClick={onClose}
                        className="block py-3.5 text-primary-900 font-medium text-[15px] hover:text-secondary-600 transition-colors"
                      >
                        {item.title}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Footer Actions */}
            <div className="border-t border-neutral-100 p-5 bg-neutral-50">
              <Link
                to="/apply/undergraduate"
                onClick={onClose}
                className="block w-full py-3 bg-secondary-500 hover:bg-secondary-600 text-white text-center font-semibold rounded-lg transition-colors shadow-sm"
              >
                Apply Now
              </Link>
              <div className="flex items-center justify-center gap-6 mt-4 text-xs text-neutral-500">
                <a href="tel:18008698960" className="flex items-center gap-1.5 hover:text-primary-900 transition-colors">
                  <Phone className="w-3 h-3" />
                  1-800-UNW-8960
                </a>
                <a href="mailto:info@northwest.ac" className="flex items-center gap-1.5 hover:text-primary-900 transition-colors">
                  <Mail className="w-3 h-3" />
                  info@northwest.ac
                </a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
