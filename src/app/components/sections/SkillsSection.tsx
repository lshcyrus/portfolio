import { skillCategories } from "@/data/profile";

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="border-y border-slate-200/70 bg-slate-50 py-16 dark:border-slate-800 dark:bg-slate-900/40"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-8 lg:px-10">
        <h2 className="mb-4 text-3xl font-bold text-slate-900 dark:text-slate-100 sm:text-4xl">
          Skills
        </h2>
        <div className="space-y-6">
          {skillCategories.map((category) => (
            <div key={category.title}>
              <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-sky-700 dark:text-sky-300">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-sky-500/30 bg-white px-3 py-1 text-sm text-slate-700 shadow-sm dark:bg-slate-950 dark:text-slate-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

