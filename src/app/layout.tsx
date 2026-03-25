import "./globals.css";
import Navigation from "./components/navigation";
import { ThemeProvider } from "./components/ThemeProvider";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lee Shing Hei, Cyrus | Full Stack Engineer",
  description:
    "Portfolio of Lee Shing Hei (Cyrus): full-stack engineering, robotics systems, AI integration, and embedded development.",
  openGraph: {
    title: "Lee Shing Hei, Cyrus Portfolio",
    description:
      "Professional portfolio highlighting projects, experience, and technical capabilities in software, robotics, and AI.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full bg-white text-slate-900 antialiased dark:bg-slate-950 dark:text-slate-100">
        <ThemeProvider>
          <div className="min-h-screen flex flex-col">
            <Navigation />
            <main className="flex-grow">
                {children}
            </main>
            <footer className="border-t border-slate-200 bg-slate-100 py-6 dark:border-slate-700 dark:bg-slate-900">
              <div className="container mx-auto px-4 text-center">
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  © {new Date().getFullYear()} Lee Shing Hei Cyrus. All rights reserved.
                </p>
                <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
                  cyruslshei@gmail.com | lshcyrus@link.cuhk.edu.hk | +852 6802 6678
                </p>
              </div>
            </footer>
          </div>
        </ThemeProvider>

      </body>
    </html>
  );
}
