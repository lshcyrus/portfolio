import { experiences } from "@/data/experience";

export default function ExperiencePage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-5xl px-4 py-12 sm:px-8 lg:px-10">
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-100 sm:text-5xl">Experience</h1>
        <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 sm:text-base">
          Building robust software and robotic systems across web, edge, and AI domains.
        </p>
      </header>

      <div className="relative space-y-6 before:absolute before:bottom-0 before:left-2 before:top-3 before:w-px before:bg-sky-600/30 sm:before:left-28">
        {experiences.map((experience) => (
          <article key={`${experience.company}-${experience.period}`} className="relative pl-8 sm:pl-36">
            <span className="absolute left-0 top-2 h-4 w-4 rounded-full border-2 border-white bg-sky-500 dark:border-slate-950 sm:left-[106px]" />
            <time className="mb-2 block text-xs font-semibold uppercase tracking-wide text-sky-700 dark:text-sky-300 sm:absolute sm:left-0 sm:top-1 sm:w-24">
              {experience.period}
            </time>

            <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900">
              <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">{experience.role}</h2>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{experience.company}</p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-700 dark:text-slate-300">
                {experience.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                {experience.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-sky-500/30 bg-sky-100/60 px-2 py-1 text-xs text-sky-800 dark:bg-sky-500/10 dark:text-sky-200"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}