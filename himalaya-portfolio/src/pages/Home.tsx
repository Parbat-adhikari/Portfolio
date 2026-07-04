import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowDown, Github, Linkedin, Globe, MapPin } from "lucide-react";

import {
  profile,
  social,
  stats,
  skillCategories,
  projects,
  experiences,
  posts,
} from "../data/site";
import { useSEO } from "../hooks/useSEO";
import Contour from "../components/Contour";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import MagneticButton from "../components/MagneticButton";
import AnimatedCounter from "../components/AnimatedCounter";

/* Staggered reveal for the hero words on load. */
const heroParent = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};
const heroChild = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};
const charParent = {
  hidden: {},
  show: { transition: { staggerChildren: 1, delayChildren: 0.3 } },
};
const charChild = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
};

export default function Home() { 
  const reduce = useReducedMotion();
  useSEO({
    title: `${profile.name} — Technology, Business & Continuous Learning`,
    description: profile.intro,
    path: "/",
  });

  const featuredProjects = projects.filter((p) => p.featured).slice(0, 2);
  const featuredSkills = skillCategories.slice(0, 6);
  const latestPosts = posts.slice(0, 2);

  return (
    <>
      {/* ================================================ HERO */}
      <section className="relative overflow-hidden pb-16 pt-24 sm:pt-28">
        <Contour
          className="pointer-events-none absolute inset-x-0 top-10 h-[440px] w-full opacity-70"
          stroke="#2C5646"
        />
        <div
          className="pointer-events-none absolute -right-24 top-28 h-72 w-72 rounded-full bg-brass-soft/40 blur-3xl"
          aria-hidden
        />

       {/* Big animated name */}
        <div className="container-page relative mb-10">
          <motion.h1
            variants={reduce ? undefined : charParent}
            initial={reduce ? false : "hidden"}
            animate="show"
            aria-label={profile.name}
            className="flex flex-wrap font-display text-[clamp(3rem,10vw,8rem)] font-normal leading-none tracking-tight text-ink select-none"
          >
            {profile.name.split("").map((char, i) => (
              <motion.span
                key={i}
                variants={charChild}
                className={char === " " ? "inline-block w-[0.3em]" : "inline-block"}
              >
                {char}
              </motion.span>
            ))}
            <motion.span variants={charChild} className="inline-block text-brass">.</motion.span>
          </motion.h1>
        </div>

        <div className="container-page relative">
          <div className="grid items-center gap-12 lg:grid-cols-[1.5fr_auto]">

              <motion.p
                variants={heroChild}
                className="mt-8 max-w-prose text-fluid-lead leading-relaxed text-slate text-pretty"
              >
                {profile.intro}
              </motion.p>

              <motion.div
                variants={heroChild}
                className="mt-10 flex flex-wrap items-center gap-4"
              >
                <MagneticButton to="/contact" variant="solid">
                  Get in touch <ArrowRight size={16} />
                </MagneticButton>
                <MagneticButton to="/projects" variant="outline">
                  View work
                </MagneticButton>
              </motion.div>

              <motion.div
                variants={heroChild}
                className="mt-10 flex items-center gap-5 text-slate"
              >
                <span className="inline-flex items-center gap-1.5 text-sm">
                  <MapPin size={15} className="text-brass" /> {profile.location}
                </span>
                <span className="h-4 w-px bg-cloud" aria-hidden />
                <div className="flex items-center gap-3">
                  {[
                    { href: social.github, Icon: Github, label: "GitHub" },
                    { href: social.linkedin, Icon: Linkedin, label: "LinkedIn" },
                    { href: social.website, Icon: Globe, label: "Website" },
                  ].map(({ href, Icon, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={label}
                      className="text-slate transition-colors hover:text-ink"
                    >
                      <Icon size={18} />
                    </a>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Portrait */}
            <motion.div
              initial={reduce ? false : { opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative mx-auto w-full max-w-xs lg:max-w-none"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-cloud bg-mist">
                {profile.portrait ? (
                  <img
                    src={profile.portrait}
                    alt={`Portrait of ${profile.name}`}
                    className="h-full w-full object-cover"
                    loading="eager"
                  />
                ) : (
                  <div className="grid h-full w-full place-items-center bg-gradient-to-br from-pine to-pine-deep">
                    <span className="font-display text-7xl text-brass-light">
                      {profile.name.charAt(0)}
                    </span>
                  </div>
                )}
              </div>
              {/* available chip */}
              {profile.available && (
                <div className="absolute -bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border border-cloud bg-snow px-4 py-2 text-xs font-medium shadow-sm">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brass opacity-60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-brass" />
                  </span>
                  Available for opportunities
                </div>
              )}
            </motion.div>
          </div>

          {/* scroll indicator */}
          <motion.div
            className="mt-20 flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <span className="flex flex-col items-center gap-2 font-mono text-[10px] uppercase tracking-eyebrow text-stone">
              Scroll
              <ArrowDown size={14} className="animate-drift text-brass" />
            </span>
          </motion.div>
        </div>
      </section>

      {/* ================================================ STATS */}
      {stats.length > 0 && (
        <section className="border-y border-cloud bg-mist/40">
          <div className="container-page grid grid-cols-2 gap-y-8 py-14 md:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.08} className="text-center">
                <div className="font-display text-4xl text-pine sm:text-5xl">
                  <AnimatedCounter value={s.value} suffix={s.suffix} />
                </div>
                <p className="mt-2 text-sm text-slate">{s.label}</p>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {/* ================================================ FEATURED SKILLS */}
      <section className="container-page py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="What I work with"
            title="A blend of disciplines"
            lead="I move between business, technology and research rather than staying in one lane."
          />
          <Link
            to="/skills"
            className="link-underline hidden text-sm text-slate hover:text-ink sm:inline-flex"
          >
            All skills →
          </Link>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-cloud bg-cloud sm:grid-cols-2 lg:grid-cols-3">
          {featuredSkills.map((cat, i) => (
            <Reveal
              key={cat.name}
              delay={i * 0.05}
              className="group bg-snow p-8 transition-colors duration-500 hover:bg-mist/50"
            >
              <span className="font-mono text-xs text-brass">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-display text-xl text-ink">{cat.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate">
                {cat.items.join(" · ")}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ================================================ FEATURED PROJECTS */}
      <section className="bg-pine-deep py-24 text-snow">
        <div className="container-page">
          <SectionHeading
            eyebrow="Selected work"
            title="Projects in motion"
            lead="A place for the things I build. New work lands here as it ships."
            className="[&_h2]:text-snow [&_p]:text-snow/70"
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {featuredProjects.map((p, i) => (
              <Reveal
                key={p.title}
                delay={i * 0.1}
                className="group flex flex-col rounded-2xl border border-snow/10 bg-snow/[0.03] p-8 transition-all duration-500 hover:-translate-y-1 hover:border-brass/40"
              >
                {p.status && (
                  <span className="mb-4 w-fit rounded-full border border-brass/40 px-3 py-1 font-mono text-[10px] uppercase tracking-eyebrow text-brass-light">
                    {p.status}
                  </span>
                )}
                <h3 className="font-display text-2xl text-snow">{p.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-snow/60">
                  {p.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {p.technologies.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-snow/5 px-3 py-1 text-xs text-snow/70"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-10">
            <MagneticButton to="/projects" variant="ghost" className="!text-brass-light border border-snow/15 hover:!text-brass">
              See all projects <ArrowRight size={16} />
            </MagneticButton>
          </div>
        </div>
      </section>

      {/* ================================================ EXPERIENCE PREVIEW */}
      <section className="container-page py-24">
        <SectionHeading
          eyebrow="Experience"
          title="Roles that shaped the work"
        />
        <ol className="mt-12">
          {experiences.slice(0, 4).map((exp, i) => (
            <Reveal
              key={`${exp.role}-${i}`}
              as="li"
              delay={i * 0.06}
              className="group grid grid-cols-1 gap-2 border-t border-cloud py-6 transition-colors hover:bg-mist/30 sm:grid-cols-[auto_1fr_auto] sm:items-baseline sm:gap-8"
            >
              <span className="font-mono text-xs text-stone sm:w-24">
                {exp.period}
              </span>
              <div>
                <h3 className="font-display text-xl text-ink">{exp.role}</h3>
                <p className="text-sm text-slate">{exp.org}</p>
              </div>
              <p className="max-w-sm text-sm leading-relaxed text-slate sm:text-right">
                {exp.summary}
              </p>
            </Reveal>
          ))}
        </ol>
        <div className="mt-10">
          <Link to="/experience" className="link-underline text-sm text-slate hover:text-ink">
            Full timeline →
          </Link>
        </div>
      </section>

      {/* ================================================ PHILOSOPHY */}
      <section className="relative overflow-hidden bg-mist/40 py-28">
        <Contour
          className="pointer-events-none absolute inset-0 h-full w-full opacity-40"
          stroke="#B08535"
        />
        <div className="container-page relative text-center">
          <Reveal>
            <span className="eyebrow">Philosophy</span>
            <blockquote className="mx-auto mt-6 max-w-3xl font-display text-3xl font-light leading-snug text-ink text-balance sm:text-4xl">
              “{profile.philosophy}”
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* ================================================ LATEST WRITING */}
      <section className="container-page py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow="Writing" title="Latest thinking" />
          <Link
            to="/blog"
            className="link-underline hidden text-sm text-slate hover:text-ink sm:inline-flex"
          >
            All articles →
          </Link>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {latestPosts.map((post, i) => (
            <Reveal
              key={post.title}
              delay={i * 0.08}
              className="group rounded-2xl border border-cloud p-8 transition-all duration-500 hover:-translate-y-1 hover:border-brass/40 hover:shadow-[0_20px_60px_-30px_rgba(24,36,32,0.4)]"
            >
              <div className="flex items-center gap-3 text-xs">
                <span className="font-mono uppercase tracking-eyebrow text-brass">
                  {post.category}
                </span>
                <span className="text-stone">· {post.date}</span>
              </div>
              <h3 className="mt-4 font-display text-2xl leading-snug text-ink">
                {post.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate">
                {post.excerpt}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ================================================ CONTACT CTA */}
      <section className="container-page pb-8">
        <Reveal className="relative overflow-hidden rounded-[2.5rem] bg-pine px-8 py-20 text-center text-snow sm:px-16">
          <div
            className="pointer-events-none absolute -left-16 -top-16 h-64 w-64 rounded-full bg-brass/10 blur-3xl"
            aria-hidden
          />
          <span className="eyebrow text-brass-light">Contact</span>
          <h2 className="mx-auto mt-5 max-w-2xl font-display text-4xl leading-tight text-snow text-balance sm:text-5xl">
            Have an idea worth building?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-snow/70">
            Whether it's technology, research or something new — I'd be glad to hear about it.
          </p>
          <div className="mt-9 flex justify-center">
            <MagneticButton to="/contact" variant="solid" className="!bg-brass !border-brass !text-pine-deep hover:!bg-brass-light hover:!border-brass-light">
              Start a conversation <ArrowRight size={16} />
            </MagneticButton>
          </div>
        </Reveal>
      </section>
    </>
  );
}
