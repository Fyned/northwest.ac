import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronDown, ChevronRight } from 'lucide-react';
import menuConfig from '../../data/menuConfig.json';
import { Button } from '../common/Button';
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
          {/* Arka Plan Karartma (Backdrop) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-primary-950/50 backdrop-blur-sm z-50"
          />

          {/* Menü Paneli (Drawer) */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 bottom-0 w-full max-w-sm bg-white shadow-2xl z-50 overflow-y-auto border-l border-neutral-200"
          >
            {/* Üst Kısım */}
            <div className="flex items-center justify-between p-6 border-b border-neutral-100">
              <img src={logoHorizontal} alt="UNW" className="h-8 w-auto" />
              <button 
                onClick={onClose}
                className="p-2 text-neutral-500 hover:text-primary-900 hover:bg-neutral-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Menü Linkleri */}
            <div className="p-6 space-y-2">
              {menuConfig.map((item) => (
                <div key={item.title} className="border-b border-neutral-50 last:border-0">
                  {item.children ? (
                    <div>
                      <button
                        onClick={() => toggleSubmenu(item.title)}
                        className="flex items-center justify-between w-full py-4 text-left text-primary-900 font-medium hover:text-secondary-600 transition-colors"
                      >
                        {item.title}
                        {openSubmenu === item.title ? (
                          <ChevronDown className="w-5 h-5 text-secondary-500" />
                        ) : (
                          <ChevronRight className="w-5 h-5 text-neutral-400" />
                        )}
                      </button>
                      
                      {/* Alt Menü (Accordion) */}
                      <AnimatePresence>
                        {openSubmenu === item.title && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden bg-neutral-50 rounded-lg mb-2"
                          >
                            <div className="p-4 space-y-3">
                              {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                              {item.children.map((child: any) => (
                                <div key={child.title}>
                                  {child.children ? (
                                    <div className="mb-3 last:mb-0">
                                      <span className="block text-xs font-bold text-neutral-400 uppercase tracking-wider mb-2 pl-2">
                                        {child.title}
                                      </span>
                                      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                                      {child.children.map((subChild: any) => (
                                        <Link
                                          key={subChild.title}
                                          to={subChild.path}
                                          onClick={onClose}
                                          className="block py-2 pl-4 text-sm text-neutral-600 hover:text-primary-900 border-l-2 border-transparent hover:border-secondary-500 transition-all"
                                        >
                                          {subChild.title}
                                        </Link>
                                      ))}
                                    </div>
                                  ) : (
                                    <Link
                                      to={child.path}
                                      onClick={onClose}
                                      className="block py-2 text-sm text-neutral-700 hover:text-primary-900"
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
                      className="block py-4 text-primary-900 font-medium hover:text-secondary-600 transition-colors"
                    >
                      {item.title}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Alt Aksiyonlar */}
            <div className="p-6 bg-neutral-50 mt-auto">
              <Button className="w-full shadow-lg mb-4">Apply Now</Button>
              <p className="text-center text-xs text-neutral-400">
                © 2022 University of NorthWest
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};