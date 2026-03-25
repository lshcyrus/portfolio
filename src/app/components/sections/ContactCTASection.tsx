import Link from "next/link";
import { profile } from "@/data/profile";

export default function ContactCTASection() {
  return (
    <section id="contact-cta" className="mx-auto max-w-6xl px-4 py-16 sm:px-8 lg:px-10">
      <div className="rounded-2xl border border-sky-500/30 bg-gradient-to-br from-sky-500/10 to-blue-500/10 p-8 dark:from-sky-500/15 dark:to-blue-600/15">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 sm:text-4xl">Let&apos;s Build Together</h2>
        <p className="mt-3 max-w-3xl text-sm text-slate-700 dark:text-slate-300 sm:text-base">
          Open to full-time engineering roles, robotics software opportunities, and technically ambitious collaborations.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="rounded-lg bg-sky-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-500"
          >
            Contact Me
          </Link>
          <Link
            href={profile.contact.resumePath}
            target="_blank"
            className="rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-sky-400 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
          >
            Download Resume
          </Link>
        </div>
      </div>
    </section>
  );
}
