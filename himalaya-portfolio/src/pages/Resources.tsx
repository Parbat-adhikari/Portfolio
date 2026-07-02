import { ArrowUpRight } from "lucide-react";
import { resourceGroups, profile } from "../data/site";
import { useSEO } from "../hooks/useSEO";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";

export default function Resources() {
  useSEO({
    title: `Resources — ${profile.name}`,
    description:
      "A curated shelf of books, AI tools, research and learning resources worth keeping.",
    path: "/resources",
  });

  return (
    <>
      <PageHeader
        eyebrow="Resources"
        title="A shelf of things worth keeping."
        lead="Books, tools and references I return to. This page grows as I find more worth sharing."
      />

      <section className="container-page py-24">
        <div className="grid gap-10 lg:grid-cols-2">
          {resourceGroups.map((group, i) => (
            <Reveal key={group.category} delay={i * 0.05}>
              <div className="mb-5 flex items-center gap-3">
                <span className="font-mono text-xs text-brass">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="font-display text-2xl text-ink">{group.category}</h2>
                <span className="h-px flex-1 bg-cloud" aria-hidden />
              </div>
              <ul className="space-y-px overflow-hidden rounded-xl border border-cloud">
                {group.items.map((item) => {
                  const Row = (
                    <div className="flex items-start justify-between gap-4 bg-snow p-5 transition-colors hover:bg-mist/40">
                      <div>
                        <p className="font-medium text-ink">{item.title}</p>
                        <p className="mt-0.5 text-sm text-slate">{item.note}</p>
                      </div>
                      {item.url && (
                        <ArrowUpRight
                          size={18}
                          className="mt-1 shrink-0 text-brass"
                        />
                      )}
                    </div>
                  );
                  return (
                    <li key={item.title}>
                      {item.url ? (
                        <a href={item.url} target="_blank" rel="noreferrer" className="block">
                          {Row}
                        </a>
                      ) : (
                        Row
                      )}
                    </li>
                  );
                })}
              </ul>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16 rounded-2xl border border-dashed border-cloud bg-mist/30 p-8 text-center">
          <p className="text-sm text-slate">
            More resources are added over time. Edit{" "}
            <code className="rounded bg-snow px-1.5 py-0.5 font-mono text-xs text-pine">
              resourceGroups
            </code>{" "}
            in <code className="font-mono text-xs text-pine">src/data/site.ts</code> to expand this shelf.
          </p>
        </Reveal>
      </section>
    </>
  );
}
