import { Link } from "react-router-dom";
import { Github, Linkedin, Globe, Mail, ArrowUpRight } from "lucide-react";
import { profile, social, nav } from "../data/site";
import Ridgeline from "./Ridgeline";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative mt-24 overflow-hidden bg-pine-deep text-snow">
      <Ridgeline className="pointer-events-none absolute inset-x-0 top-0 h-24 w-full opacity-70" />

      <div className="container-page relative pt-28 pb-12">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          {/* CTA */}
          <div>
            <p className="eyebrow text-brass-light">Let's talk</p>
            <h2 className="mt-4 max-w-md font-display text-3xl leading-tight text-snow sm:text-4xl">
              Open to thoughtful work and good conversations.
            </h2>
            <a
              href={`mailto:${profile.email}`}
              className="link-underline mt-6 inline-flex items-center gap-2 text-brass-light"
            >
              <Mail size={16} /> {profile.email}
            </a>
          </div>

          {/* Nav */}
          <nav aria-label="Footer">
            <p className="eyebrow mb-4 text-snow/50">Pages</p>
            <ul className="space-y-2.5">
              {nav.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-snow/70 transition-colors hover:text-snow"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social */}
          <div>
            <p className="eyebrow mb-4 text-snow/50">Elsewhere</p>
            <ul className="space-y-2.5">
              {[
                { label: "GitHub", href: social.github, Icon: Github },
                { label: "LinkedIn", href: social.linkedin, Icon: Linkedin },
                { label: "Website", href: social.website, Icon: Globe },
              ].map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-2 text-snow/70 transition-colors hover:text-snow"
                  >
                    <Icon size={16} />
                    {label}
                    <ArrowUpRight
                      size={13}
                      className="opacity-0 transition-opacity group-hover:opacity-100"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-snow/10 pt-6 text-sm text-snow/50 sm:flex-row sm:items-center">
          <p>
            © {year} {profile.fullName}. {profile.location}.
          </p>
          <p className="font-mono text-xs">
            Crafted with patience — {profile.philosophy.split(".")[0]}.
          </p>
        </div>
      </div>
    </footer>
  );
}
