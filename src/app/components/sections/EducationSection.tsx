import { education } from "@/data/profile";

export default function EducationSection() {
  return (
    <section id="education" className="mx-auto max-w-6xl px-4 py-16 sm:px-8 lg:px-10">
      <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-slate-100 sm:text-4xl">Education</h2>
      {education.map((item) => (
        <article
          key={item.school}
          className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
        >
          <p className="text-xs font-semibold uppercase tracking-wide text-sky-700 dark:text-sky-300">{item.period}</p>
          <h3 className="mt-2 text-xl font-semibold text-slate-900 dark:text-slate-100">{item.school}</h3>
          <p className="mt-1 text-sm text-slate-700 dark:text-slate-300">{item.degree}</p>
          <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-slate-700 dark:text-slate-300">
            {item.achievements.map((achievement) => (
              <li key={achievement}>{achievement}</li>
            ))}
          </ul>
        </article>
      ))}
    </section>
  );
}
