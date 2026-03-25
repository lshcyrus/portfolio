'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import TypingHeading from "../TypingHeading";
import { profile } from "@/data/profile";

export default function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden border-b border-slate-200/60 dark:border-slate-800">
      <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/85 to-white dark:from-slate-950/90 dark:via-slate-950/85 dark:to-slate-950" />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        className="relative mx-auto flex min-h-[80vh] max-w-6xl flex-col justify-center px-4 py-16 sm:px-8 lg:px-10"
      >
        <TypingHeading
          text={profile.name.toUpperCase()}
          className="mb-3 text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-50 sm:text-5xl lg:text-6xl"
          speed={70}
        />
        <p className="mb-4 text-xl font-semibold text-sky-700 dark:text-sky-300 sm:text-2xl">{profile.role}</p>
        <p className="mb-8 max-w-3xl text-base text-slate-700 dark:text-slate-300 sm:text-lg">{profile.slogan}</p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/projects"
            className="rounded-lg bg-sky-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
          >
            View My Work
          </Link>
          <Link
            href="/#about"
            className="rounded-lg border border-sky-600/40 bg-white/90 px-5 py-3 text-sm font-semibold text-slate-800 transition hover:border-sky-500 hover:text-sky-700 dark:bg-slate-900/80 dark:text-slate-100 dark:hover:text-sky-300"
          >
            Learn More
          </Link>
          <Link
            href="/contact"
            className="rounded-lg border border-slate-300 bg-slate-50 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
          >
            Contact Me
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
