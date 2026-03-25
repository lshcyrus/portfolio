import Link from "next/link";
import { projects } from "@/data/projects";

export default function ProjectsPreviewSection() {
  return (
    <section
      id="projects"
      className="border-y border-slate-200/70 bg-slate-50 py-16 dark:border-slate-800 dark:bg-slate-900/40"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-8 lg:px-10">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 sm:text-4xl">Featured Projects</h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 sm:text-base">
              Applied AI, robotics, and embedded systems projects with measurable outcomes.
            </p>
          </div>
          <Link href="/projects" className="text-sm font-semibold text-sky-700 hover:text-sky-500 dark:text-sky-300">
            View All Projects
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-glow dark:border-slate-700 dark:bg-slate-900"
            >
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{project.title}</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{project.subtitle}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-sky-500/30 bg-sky-100/60 px-2 py-1 text-xs text-sky-800 dark:bg-sky-500/10 dark:text-sky-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
