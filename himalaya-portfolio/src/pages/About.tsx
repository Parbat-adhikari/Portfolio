import { about, profile } from "../data/site";
import { useSEO } from "../hooks/useSEO";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";

export default function About() {
  useSEO({
    title: `About — ${profile.name}`,
    description: about.lead,
    path: "/about",
  });

  return (
    <>
      <PageHeader eyebrow="About" title="A patient builder from Nepal." lead={about.lead} />

      {/* Story chapters — an editorial two-column rhythm */}
      <section className="container-page py-24">
        <div className="space-y-16">
          {about.chapters.map((ch, i) => (
            <Reveal
              key={ch.title}
              delay={i * 0.05}
              className="grid gap-4 border-t border-cloud pt-10 md:grid-cols-[0.9fr_1.6fr] md:gap-12"
            >
              <div className="flex items-baseline gap-4">
                <span className="font-mono text-xs text-brass">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="font-display text-2xl leading-tight text-ink sm:text-3xl">
                  {ch.title}
                </h2>
              </div>
              <p className="max-w-prose text-lg leading-relaxed text-slate text-pretty">
                {ch.body}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="bg-mist/40 py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="What guides me"
            title="Four quiet principles"
            align="center"
            className="mx-auto"
          />
          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-cloud bg-cloud sm:grid-cols-2 lg:grid-cols-4">
            {about.values.map((v, i) => (
              <Reveal
                key={v.label}
                delay={i * 0.06}
                className="bg-snow p-8 text-center"
              >
                <h3 className="font-display text-xl text-pine">{v.label}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">{v.note}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Closing line */}
      <section className="container-page py-24 text-center">
        <Reveal>
          <p className="mx-auto max-w-2xl font-display text-2xl font-light leading-snug text-ink text-balance sm:text-3xl">
            “{profile.philosophy}”
          </p>
        </Reveal>
      </section>
    </>
  );
}
