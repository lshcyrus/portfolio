import "./globals.css";
import Navigation from "./components/navigation";
import { ThemeProvider } from "./components/ThemeProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full">
        <ThemeProvider>
          <div className="min-h-screen flex flex-col">
            <Navigation />
            <main className="flex-grow">
              {children}
            </main>
            <footer className="py-6 bg-gray-100 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
              <div className="container mx-auto px-4 text-center">
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  © {new Date().getFullYear()} Lee Shing Hei Cyrus. All rights reserved.
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
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
