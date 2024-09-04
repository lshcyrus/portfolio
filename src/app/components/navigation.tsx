'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from './ThemeProvider';
import { useState } from 'react';

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

  return (
    <header className="bg-white dark:bg-gray-800 shadow-md">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-20">
          <Link href="/" className="text-2xl font-bold text-gray-800 dark:text-white">
            LSHCYRUS
          </Link>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-800 dark:text-white focus:outline-none"
            >
              {isMenuOpen ? '✕' : '☰'}
            </button>
          </div>
          <ul className={`md:flex md:items-center md:space-x-8 ${isMenuOpen ? 'block' : 'hidden'} absolute md:relative top-20 md:top-0 left-0 right-0 bg-white dark:bg-gray-800 md:bg-transparent md:dark:bg-transparent p-4 md:p-0`}>
            {navItems.map((item) => (
              <li key={item.path} className="my-4 md:my-0">
                <Link
                  href={item.path}
                  className={`text-sm font-medium uppercase tracking-wider hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 ${
                    pathname === item.path
                      ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400 pb-2'
                      : 'text-gray-600 dark:text-gray-300'
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <li className="my-4 md:my-0">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-white"
              >
                {theme === 'light' ? '🌙' : '☀️'}
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navigation;