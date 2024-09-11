'use client'
import Link from "next/link";
import DevelopmentNotice from "./components/DevelopmentNotice";

export default function Home() {
  return (
    <div className="relative flex items-center justify-center min-h-screen p-4 sm:p-8 bg-gray-50 dark:bg-gray-900 overflow-hidden">
      <div className="max-w-3xl w-full text-center sm:text-left z-10 relative">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-gray-800 dark:text-white">
          LEE SHING HEI, CYRUS
        </h1>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-6 text-blue-600 dark:text-blue-400">
          Web Developer & Robotics Enthusiast
        </h2>
        <p className="text-lg sm:text-xl mb-8 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto sm:mx-0">
          With a keen eye for detail and a love for problem-solving, I am passionate about creating innovative web solutions and exploring the world of robotics.
        </p>
        <div className="flex flex-wrap justify-center sm:justify-start gap-4">
          <Link href="/projects" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 text-lg">
            View Projects
          </Link>
          <Link href="/contact" className="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-white font-bold py-3 px-6 rounded-lg transition duration-300 text-lg">
            Contact Me
          </Link>
        </div>
      </div>
      <DevelopmentNotice />
    </div>
  );
}
