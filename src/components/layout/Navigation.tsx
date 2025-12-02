import { useState } from 'react';
import { Link } from 'react-router-dom';
import menuConfig from '../../data/menuConfig.json';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navigation = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const renderMenuItem = (item: any) => {
    const hasChildren = item.children && item.children.length > 0;

    if (!hasChildren) {
      return (
        <Link 
          key={item.title} 
          to={item.path} 
          className="block px-4 py-2 text-sm font-medium text-primary-900 hover:text-secondary-600 transition-colors relative group"
        >
          {item.title}
          <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-secondary-500 transition-all duration-300 group-hover:w-full group-hover:left-0 opacity-0 group-hover:opacity-100" />
        </Link>
      );
    }

    return (
      <div 
        key={item.title} 
        className="relative group h-full flex items-center"
        onMouseEnter={() => setOpenDropdown(item.title)}
        onMouseLeave={() => setOpenDropdown(null)}
      >
        <button className="flex items-center px-4 py-2 text-sm font-medium text-primary-900 hover:text-secondary-600 focus:outline-none transition-colors">
          {item.title}
          <ChevronDown className={`ml-1 w-4 h-4 transition-transform duration-200 ${openDropdown === item.title ? 'rotate-180' : ''}`} />
        </button>

        {/* Dropdown Menü */}
        <AnimatePresence>
          {openDropdown === item.title && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
              className="absolute left-0 top-full mt-2 w-64 bg-white rounded-xl shadow-card border border-neutral-100 py-3 z-50 overflow-hidden"
            >
              {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
              {item.children.map((child: any) => (
                <div key={child.title}>
                  {child.children ? (
                    // 3. Seviye Menü Başlığı
                    <div className="px-5 py-2">
                      <span className="block text-xs font-bold text-secondary-600 uppercase tracking-wider mb-2">
                        {child.title}
                      </span>
                      {/* Alt Linkler */}
                      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                      {child.children.map((subChild: any) => (
                        <Link
                          key={subChild.title}
                          to={subChild.path}
                          className="block pl-2 py-1.5 text-sm text-neutral-600 hover:text-primary-900 hover:bg-neutral-50 rounded-md transition-colors"
                        >
                          {subChild.title}
                        </Link>
                      ))}
                    </div>
                  ) : (
                    // Normal Link
                    <Link
                      to={child.path}
                      className="block px-5 py-2.5 text-sm text-neutral-700 hover:bg-neutral-50 hover:text-primary-900 transition-colors border-l-2 border-transparent hover:border-secondary-500"
                    >
                      {child.title}
                    </Link>
                  )}
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  return (
    <nav className="hidden xl:flex items-center h-full">
      {menuConfig.map((item) => renderMenuItem(item))}
    </nav>
  );
};