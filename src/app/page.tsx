'use client'
import Link from "next/link";
import TypingHeading from "./components/TypingHeading";
import AdvancedTypingHeading from "./components/AdvancedTypingHeading";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex items-center justify-center min-h-screen p-4 sm:p-8 bg-gray-50 dark:bg-gray-900"
    >
      <div className="max-w-3xl w-full text-center sm:text-left">
        <div className="mb-4">
          <TypingHeading 
            text="LEE SHING HEI, CYRUS" 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-white"
            speed={100}
          />
        </div>
        <div className="mb-6">
          <AdvancedTypingHeading
            phrases={[
              "Computer Engineering Student",
              "Web Developer",
              "Robotics Enthusiast"
            ]}
            className="text-2xl sm:text-2xl lg:text-3xl font-bold text-blue-900 dark:text-blue-400"
            speed={100}
            pauseDuration={2000}
          />
        </div>
        <motion.p 
          whileHover={{ scale: 1.02 }}
          className="text-1xl sm:text-2xl mb-8 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto sm:mx-0 cursor-pointer"
        >
          With a keen eye for detail and a love for problem-solving, I am passionate about creating innovative web solutions and exploring the world of robotics.
        </motion.p>
        <div className="flex flex-wrap justify-center sm:justify-start gap-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/projects" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 text-lg inline-flex items-center group">
              View Projects
              <svg 
                className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/contact" className="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-white font-bold py-3 px-6 rounded-lg transition duration-300 text-lg inline-flex items-center group">
              Contact Me
              <svg 
                className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
