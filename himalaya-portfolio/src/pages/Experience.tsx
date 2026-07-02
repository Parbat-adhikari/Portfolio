import { motion, useReducedMotion } from "framer-motion";
import { Check } from "lucide-react";
import { experiences, profile } from "../data/site";
import { useSEO } from "../hooks/useSEO";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";

export default function Experience() {
  const reduce = useReducedMotion();
  useSEO({
    title: `Experience — ${profile.name}`,
    description:
      "Professional roles across marketing, education counseling, documentation and translation.",
    path: "/experience",
  });

  return (
    <>
      <PageHeader
        eyebrow="Experience"
        title="A timeline of roles and responsibilities."
        lead="Different titles, one thread: understanding people and communicating clearly."
      />

      <section className="container-page py-24">
        <div className="relative">
          {/* animated spine */}
          <motion.span
            aria-hidden
            className="absolute left-3 top-2 hidden w-px origin-top bg-cloud sm:block"
            style={{ height: "calc(100% - 1rem)" }}
            initial={reduce ? false : { scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          />

          <ol className="space-y-6">
            {experiences.map((exp, i) => (
              <Reveal
                key={`${exp.role}-${i}`}
                as="li"
                delay={i * 0.08}
                className="relative sm:pl-14"
              >
                {/* node */}
                <span
                  aria-hidden
                  className="absolute left-1 top-8 hidden h-4 w-4 rounded-full border-2 border-brass bg-snow sm:block"
                />

                <article className="group rounded-2xl border border-cloud bg-snow p-8 transition-all duration-500 hover:border-brass/40 hover:shadow-[0_24px_70px_-40px_rgba(24,36,32,0.45)]">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h2 className="font-display text-2xl text-ink">{exp.role}</h2>
                    <span className="font-mono text-xs uppercase tracking-eyebrow text-brass">
                      {exp.period}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-slate">{exp.org}</p>
                  <p className="mt-4 max-w-prose leading-relaxed text-slate">
                    {exp.summary}
                  </p>

                  <div className="mt-7 grid gap-8 md:grid-cols-[1.5fr_1fr]">
                    <div>
                      <h3 className="mb-3 font-mono text-[11px] uppercase tracking-eyebrow text-stone">
                        Responsibilities
                      </h3>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((r) => (
                          <li key={r} className="flex items-start gap-2.5 text-sm text-slate">
                            <Check size={15} className="mt-0.5 shrink-0 text-pine" />
                            {r}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h3 className="mb-3 font-mono text-[11px] uppercase tracking-eyebrow text-stone">
                          Skills
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((s) => (
                            <span
                              key={s}
                              className="rounded-full border border-cloud bg-mist/50 px-3 py-1 text-xs text-ink"
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>
                      {exp.technologies && exp.technologies.length > 0 && (
                        <div>
                          <h3 className="mb-3 font-mono text-[11px] uppercase tracking-eyebrow text-stone">
                            Tools
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((t) => (
                              <span
                                key={t}
                                className="rounded-full bg-pine/5 px-3 py-1 text-xs text-pine"
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
