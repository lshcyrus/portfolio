import Link from "next/link";
import { experiences } from "@/data/experience";

export default function ExperiencePreviewSection() {
  const previewItems = experiences.slice(0, 2);

  return (
    <section id="experience" className="mx-auto max-w-6xl px-4 py-16 sm:px-8 lg:px-10">
      <div className="mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 sm:text-4xl">
            Experience
          </h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 sm:text-base">
            Engineering across web platforms, robotics control, and real-time edge AI.
          </p>
        </div>
        <Link
          href="/experience"
          className="text-sm font-semibold text-sky-700 hover:text-sky-500 dark:text-sky-300"
        >
          View Full Experience
        </Link>
      </div>

      <div className="space-y-4">
        {previewItems.map((item) => (
          <article
            key={`${item.company}-${item.period}`}
            className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900"
          >
            <p className="text-xs font-semibold uppercase tracking-wide text-sky-700 dark:text-sky-300">
              {item.period}
            </p>
            <h3 className="mt-2 text-xl font-semibold text-slate-900 dark:text-slate-100">
              {item.role}
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300">{item.company}</p>
            <p className="mt-3 text-sm text-slate-700 dark:text-slate-300">
              {item.highlights[0]}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

