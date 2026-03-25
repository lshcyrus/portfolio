import { profile } from "@/data/profile";

export default function AboutSection() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-16 sm:px-8 lg:px-10">
      <h2 className="mb-4 text-3xl font-bold text-slate-900 dark:text-slate-100 sm:text-4xl">About Me</h2>
      <p className="mb-4 max-w-4xl text-base leading-relaxed text-slate-700 dark:text-slate-300 sm:text-lg">
        {profile.introduction}
      </p>
      <p className="max-w-4xl text-base leading-relaxed text-slate-700 dark:text-slate-300 sm:text-lg">
        {profile.about}
      </p>
    </section>
  );
}
