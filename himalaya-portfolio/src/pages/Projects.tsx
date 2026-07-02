import { Github, ExternalLink, Star } from "lucide-react";
import { projects, profile } from "../data/site";
import { useSEO } from "../hooks/useSEO";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";

export default function Projects() {
  useSEO({
    title: `Projects — ${profile.name}`,
    description:
      "Selected and upcoming projects across technology, AI and business.",
    path: "/projects",
  });

  return (
    <>
      <PageHeader
        eyebrow="Projects"
        title="Things built, and things on the way."
        lead="This grid grows as work ships. Each card links to the code and a live demo when there is one."
      />

      <section className="container-page py-24">
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal
              key={p.title}
              delay={i * 0.08}
              className="group flex flex-col overflow-hidden rounded-2xl border border-cloud bg-snow transition-all duration-500 hover:-translate-y-1.5 hover:border-brass/40 hover:shadow-[0_30px_80px_-45px_rgba(24,36,32,0.5)]"
            >
              {/* image placeholder */}
              <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-mist to-cloud">
                <svg
                  viewBox="0 0 400 250"
                  className="absolute inset-0 h-full w-full opacity-60"
                  aria-hidden
                >
                  <path
                    d="M0 190 L90 120 L150 160 L220 90 L290 150 L340 110 L400 160 L400 250 L0 250 Z"
                    fill="#1E4034"
                    opacity="0.08"
                  />
                  <path
                    d="M0 200 L100 130 L160 170 L230 100 L300 160 L360 120 L400 170"
                    stroke="#B08535"
                    strokeWidth="1.5"
                    fill="none"
                    opacity="0.4"
                  />
                </svg>
                {p.featured && (
                  <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-brass px-3 py-1 text-[11px] font-medium text-pine-deep">
                    <Star size={12} /> Featured
                  </span>
                )}
                {p.status && (
                  <span className="absolute right-4 top-4 rounded-full border border-ink/10 bg-snow/80 px-3 py-1 font-mono text-[10px] uppercase tracking-eyebrow text-slate backdrop-blur">
                    {p.status}
                  </span>
                )}
              </div>

              <div className="flex flex-1 flex-col p-8">
                <h2 className="font-display text-2xl text-ink">{p.title}</h2>
                <p className="mt-3 flex-1 leading-relaxed text-slate">
                  {p.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {p.technologies.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-cloud bg-mist/40 px-3 py-1 text-xs text-ink"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-7 flex items-center gap-3">
                  <a
                    href={p.github ?? "#"}
                    target={p.github ? "_blank" : undefined}
                    rel="noreferrer"
                    aria-disabled={!p.github}
                    className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm transition-colors ${
                      p.github
                        ? "bg-pine text-snow hover:bg-pine-light"
                        : "cursor-not-allowed bg-mist text-stone"
                    }`}
                  >
                    <Github size={15} /> Code
                  </a>
                  <a
                    href={p.demo ?? "#"}
                    target={p.demo ? "_blank" : undefined}
                    rel="noreferrer"
                    aria-disabled={!p.demo}
                    className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition-colors ${
                      p.demo
                        ? "border-ink/25 text-ink hover:border-ink/60"
                        : "cursor-not-allowed border-cloud text-stone"
                    }`}
                  >
                    <ExternalLink size={15} /> Live demo
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
