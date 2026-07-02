import { motion, useReducedMotion } from "framer-motion";
import { skillCategories, profile } from "../data/site";
import { useSEO } from "../hooks/useSEO";
import PageHeader from "../components/PageHeader";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};
const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
};

export default function Skills() {
  const reduce = useReducedMotion();
  useSEO({
    title: `Skills — ${profile.name}`,
    description:
      "Skills across business, technology, AI, programming, research, leadership, marketing, finance, communication and languages.",
    path: "/skills",
  });

  return (
    <>
      <PageHeader
        eyebrow="Skills"
        title="A working toolkit, grouped by discipline."
        lead="Not a wall of logos — the areas I actually work and keep learning in."
      />

      <section className="container-page py-24">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat, i) => (
            <motion.article
              key={cat.name}
              variants={reduce ? undefined : container}
              initial={reduce ? false : "hidden"}
              whileInView="show"
              viewport={{ once: true, margin: "-10%" }}
              className="group relative flex flex-col rounded-2xl border border-cloud bg-snow p-7 transition-all duration-500 hover:-translate-y-1 hover:border-brass/40 hover:shadow-[0_24px_60px_-40px_rgba(24,36,32,0.4)]"
            >
              <div className="mb-5 flex items-center justify-between">
                <h2 className="font-display text-xl text-ink">{cat.name}</h2>
                <span className="font-mono text-xs text-brass">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <ul className="flex flex-wrap gap-2">
                {cat.items.map((skill) => (
                  <motion.li
                    key={skill}
                    variants={item}
                    className="rounded-full border border-cloud bg-mist/40 px-3 py-1.5 text-sm text-slate transition-colors group-hover:border-brass/30"
                  >
                    {skill}
                  </motion.li>
                ))}
              </ul>
              <span
                aria-hidden
                className="mt-6 h-px w-full origin-left scale-x-0 bg-brass/50 transition-transform duration-700 ease-himalaya group-hover:scale-x-100"
              />
            </motion.article>
          ))}
        </div>
      </section>
    </>
  );
}
