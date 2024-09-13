'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from './ThemeProvider';
import { useState, useEffect } from 'react';

function Navigation() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Experience', path: '/experience' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="bg-white dark:bg-gray-800 shadow-md relative z-50">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-20">
          <Link href="/" className="text-2xl font-bold text-gray-800 dark:text-white">
            
          </Link>
          <div className="flex items-center space-x-4">
            <ul className="flex items-center space-x-2 sm:space-x-4 md:space-x-8">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    className={`text-xs sm:text-sm md:text-base font-medium uppercase tracking-wider hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 ${
                      pathname === item.path
                        ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400 pb-2'
                        : 'text-gray-600 dark:text-gray-300'
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <button
                  onClick={toggleTheme}
                  className="p-1 sm:p-2 rounded-full bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-white text-xs sm:text-sm md:text-base"
                >
                  {theme === 'light' ? '🌙' : '☀️'}
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navigation;