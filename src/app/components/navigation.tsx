'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from './ThemeProvider';

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
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 shadow-sm backdrop-blur dark:border-slate-700 dark:bg-slate-900/80">
      <div className="container mx-auto px-4">
        <nav className="flex min-h-20 items-center justify-between py-3">
          <Link href="/" className="text-lg font-bold tracking-wide text-slate-800 dark:text-white sm:text-xl">
            Cyrus Lee
          </Link>
          <div className="flex items-center gap-3">
            <ul className="flex items-center gap-2 sm:gap-4 lg:gap-6">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    className={`text-[10px] font-semibold uppercase tracking-wider transition-colors duration-200 sm:text-xs md:text-sm ${
                      pathname === item.path
                        ? 'border-b-2 border-sky-600 pb-1 text-sky-600 dark:border-sky-400 dark:text-sky-400'
                        : 'text-slate-600 hover:text-sky-600 dark:text-slate-300 dark:hover:text-sky-300'
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/resume.pdf"
                  target="_blank"
                  className="rounded border border-slate-300 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-slate-600 transition hover:border-sky-400 hover:text-sky-600 dark:border-slate-600 dark:text-slate-300 dark:hover:text-sky-300 sm:text-xs"
                >
                  Resume
                </Link>
              </li>
              <li>
                <button
                  onClick={toggleTheme}
                  aria-label="Toggle theme"
                  className="rounded-full bg-slate-200 p-1 text-xs text-slate-800 dark:bg-slate-600 dark:text-white sm:p-2 sm:text-sm"
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