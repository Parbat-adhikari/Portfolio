import { useMemo, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import { posts, blogCategories, profile } from "../data/site";
import { useSEO } from "../hooks/useSEO";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";

export default function Blog() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState<string>("All");
  useSEO({
    title: `Blog — ${profile.name}`,
    description:
      "Notes and articles on AI, technology, business, finance, research, career and leadership.",
    path: "/blog",
  });

  const filters = useMemo(() => ["All", ...blogCategories], []);
  const visible = active === "All" ? posts : posts.filter((p) => p.category === active);

  return (
    <>
      <PageHeader
        eyebrow="Blog"
        title="Notes from an ongoing education."
        lead="Short, honest pieces on what I'm learning across technology, business and research."
      />

      <section className="container-page py-16">
        {/* Filter chips */}
        <div className="flex flex-wrap gap-2.5">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setActive(f)}
              aria-pressed={active === f}
              className={`rounded-full border px-4 py-1.5 text-sm transition-colors duration-300 ${
                active === f
                  ? "border-pine bg-pine text-snow"
                  : "border-cloud text-slate hover:border-ink/40 hover:text-ink"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </section>

      <section className="container-page pb-24">
        <AnimatePresence mode="popLayout">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {visible.map((post, i) => (
              <motion.article
                key={post.title}
                layout
                initial={reduce ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduce ? undefined : { opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.45, delay: i * 0.04, ease: [0.16, 1, 0.3, 1] }}
                className="group flex flex-col rounded-2xl border border-cloud bg-snow p-7 transition-all duration-500 hover:-translate-y-1 hover:border-brass/40 hover:shadow-[0_26px_70px_-45px_rgba(24,36,32,0.45)]"
              >
                <div className="flex items-center gap-2 text-xs">
                  <span className="rounded-full bg-brass-soft/50 px-2.5 py-1 font-mono uppercase tracking-eyebrow text-[10px] text-pine">
                    {post.category}
                  </span>
                </div>
                <h2 className="mt-4 font-display text-xl leading-snug text-ink">
                  {post.title}
                </h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate">
                  {post.excerpt}
                </p>
                <div className="mt-6 flex items-center justify-between border-t border-cloud pt-4 text-xs text-stone">
                  <span className="inline-flex items-center gap-1.5">
                    <Clock size={13} /> {post.readingTime ?? "— min"}
                  </span>
                  <span className="inline-flex items-center gap-1 font-medium text-slate transition-colors group-hover:text-brass">
                    Read <ArrowRight size={13} />
                  </span>
                </div>
              </motion.article>
            ))}
          </div>
        </AnimatePresence>

        {visible.length === 0 && (
          <Reveal className="rounded-2xl border border-dashed border-cloud bg-mist/30 p-12 text-center">
            <p className="text-slate">No articles in this category yet — more are coming.</p>
          </Reveal>
        )}
      </section>
    </>
  );
}
