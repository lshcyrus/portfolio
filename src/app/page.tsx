'use client'
import Link from "next/link";
import BackgroundAnimation from "./components/BackgroundAnimation";

export default function Home() {
  return (
    <div className="relative flex items-center justify-center min-h-screen p-4 sm:p-8 overflow-hidden">
      <BackgroundAnimation />
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
          <Link href="/projects" className="group relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold rounded-lg text-white bg-blue-600 transition-all duration-300 ease-out hover:bg-blue-700">
            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-blue-700 group-hover:translate-x-0 ease">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </span>
            <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">View Projects</span>
            <span className="relative invisible">View Projects</span>
          </Link>
          <Link href="/experience" className="group relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold rounded-lg text-gray-800 dark:text-white bg-gray-200 dark:bg-gray-700 transition-all duration-300 ease-out hover:bg-gray-300 dark:hover:bg-gray-600">
            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-gray-800 dark:text-white duration-300 -translate-x-full bg-gray-300 dark:bg-gray-600 group-hover:translate-x-0 ease">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
            </span>
            <span className="absolute flex items-center justify-center w-full h-full text-gray-800 dark:text-white transition-all duration-300 transform group-hover:translate-x-full ease">Experience</span>
            <span className="relative invisible">Experience</span>
          </Link>
          <Link href="/contact" className="group relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold rounded-lg text-gray-800 dark:text-white bg-gray-200 dark:bg-gray-700 transition-all duration-300 ease-out hover:bg-gray-300 dark:hover:bg-gray-600">
            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-gray-800 dark:text-white duration-300 -translate-x-full bg-gray-300 dark:bg-gray-600 group-hover:translate-x-0 ease">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
            </span>
            <span className="absolute flex items-center justify-center w-full h-full text-gray-800 dark:text-white transition-all duration-300 transform group-hover:translate-x-full ease">Contact Me</span>
            <span className="relative invisible">Contact Me</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
