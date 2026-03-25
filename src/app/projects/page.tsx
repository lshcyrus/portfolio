import Link from "next/link";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-6xl px-4 py-12 sm:px-8 lg:px-10">
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-100 sm:text-5xl">Projects</h1>
        <p className="mt-3 max-w-3xl text-sm text-slate-600 dark:text-slate-300 sm:text-base">
          Selected projects focused on robotics intelligence, AI systems, and low-latency edge deployment.
        </p>
      </header>

      <div className="space-y-6">
        {projects.map((project) => (
          <article
            key={project.title}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900"
          >
            <div>
              <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100 sm:text-2xl">{project.title}</h2>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{project.subtitle}</p>

              <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-slate-700 dark:text-slate-300">
                {project.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>

              {!!project.metrics?.length && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.metrics.map((metric) => (
                    <span
                      key={metric}
                      className="rounded-full border border-emerald-500/30 bg-emerald-100/60 px-3 py-1 text-xs text-emerald-800 dark:bg-emerald-500/10 dark:text-emerald-200"
                    >
                      {metric}
                    </span>
                  ))}
                </div>
              )}

              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-sky-500/30 bg-sky-100/60 px-2 py-1 text-xs text-sky-800 dark:bg-sky-500/10 dark:text-sky-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {!!project.links?.length && (
                <div className="mt-4 flex flex-wrap gap-3">
                  {project.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-sky-700 hover:text-sky-500 dark:text-sky-300"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
