import Link from "next/link";
import { FaEnvelope, FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";
import { profile } from "@/data/profile";

const contactLinks = [
  { name: "Email", url: `mailto:${profile.contact.email}`, icon: FaEnvelope },
  { name: "Phone", url: `tel:${profile.contact.phone}`, icon: FaPhone },
  { name: "LinkedIn", url: profile.contact.linkedin, icon: FaLinkedin },
  { name: "GitHub", url: profile.contact.github, icon: FaGithub },
];

export default function ContactPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-6xl px-4 py-12 sm:px-8 lg:px-10">
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-100 sm:text-5xl">Contact</h1>
        <p className="mt-3 max-w-3xl text-sm text-slate-600 dark:text-slate-300 sm:text-base">
          Reach out for full-time opportunities, collaboration, or technical discussions in software, robotics, and AI.
        </p>
      </header>

      <div className="grid gap-6 lg:grid-cols-2">
        <section className="grid gap-4 sm:grid-cols-2">
          {contactLinks.map((link) => (
            <Link
              key={link.name}
              href={link.url}
              target={link.url.startsWith("http") ? "_blank" : undefined}
              rel={link.url.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-glow dark:border-slate-700 dark:bg-slate-900"
            >
              <link.icon className="text-2xl text-sky-600 transition group-hover:text-sky-500 dark:text-sky-300" />
              <p className="mt-3 text-sm font-semibold text-slate-900 dark:text-slate-100">{link.name}</p>
              <p className="mt-1 break-all text-xs text-slate-600 dark:text-slate-300">{link.url.replace("mailto:", "").replace("tel:", "")}</p>
            </Link>
          ))}
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">Send a Message</h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
            This form opens your email client with pre-filled details.
          </p>
          <form
            className="mt-5 space-y-3"
            action={`mailto:${profile.contact.email}`}
            method="post"
            encType="text/plain"
          >
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm outline-none ring-sky-400 transition focus:ring dark:border-slate-700 dark:bg-slate-950"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm outline-none ring-sky-400 transition focus:ring dark:border-slate-700 dark:bg-slate-950"
            />
            <textarea
              name="message"
              placeholder="Message"
              rows={5}
              required
              className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm outline-none ring-sky-400 transition focus:ring dark:border-slate-700 dark:bg-slate-950"
            />
            <button
              type="submit"
              className="rounded-lg bg-sky-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-sky-500"
            >
              Send Message
            </button>
          </form>
        </section>
      </div>
    </main>
  );
}
