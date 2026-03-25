import { activities } from "@/data/profile";

export default function ActivitiesSection() {
  return (
    <section
      id="activities"
      className="border-y border-slate-200/70 bg-slate-50 py-16 dark:border-slate-800 dark:bg-slate-900/40"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-8 lg:px-10">
        <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-slate-100 sm:text-4xl">
          Extra-Curricular Activities
        </h2>
        {activities.map((activity) => (
          <article
            key={activity.team}
            className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
          >
            <p className="text-xs font-semibold uppercase tracking-wide text-sky-700 dark:text-sky-300">{activity.period}</p>
            <h3 className="mt-2 text-xl font-semibold text-slate-900 dark:text-slate-100">
              {activity.team} - {activity.role}
            </h3>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-700 dark:text-slate-300">
              {activity.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
