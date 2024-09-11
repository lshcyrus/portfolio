'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from './ThemeProvider';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function Navigation() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Experience', path: '/experience' },
    { name: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  return (
    <header className="bg-white dark:bg-gray-800 shadow-md relative z-50">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="text-2xl font-bold text-gray-800 dark:text-white">
              LSHCYRUS
            </Link>
          </motion.div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-800 dark:text-white focus:outline-none z-50 relative p-2 rounded-md bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                className="w-8 h-8"
              >
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
          <AnimatePresence>
            {(isMenuOpen || window.innerWidth > 768) && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className={`md:flex md:items-center md:space-x-8 ${isMenuOpen ? 'block' : 'hidden'} fixed md:relative inset-0 bg-white dark:bg-gray-800 md:bg-transparent md:dark:bg-transparent p-4 md:p-0 z-40`}
              >
                <ul className="flex flex-col md:flex-row md:items-center md:space-x-8 mt-20 md:mt-0">
                  {navItems.map((item, index) => (
                    <motion.li
                      key={item.path}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="my-4 md:my-0"
                    >
                      <Link
                        href={item.path}
                        className={`text-sm font-medium uppercase tracking-wider hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 ${
                          pathname === item.path
                            ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400 pb-2'
                            : 'text-gray-600 dark:text-gray-300'
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    </motion.li>
                  ))}
                  <motion.li
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: navItems.length * 0.1 }}
                    className="my-4 md:my-0"
                  >
                    <button
                      onClick={toggleTheme}
                      className="p-2 rounded-full bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-white"
                    >
                      {theme === 'light' ? '🌙' : '☀️'}
                    </button>
                  </motion.li>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-30"
            onClick={() => setIsMenuOpen(false)}
          ></motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navigation;