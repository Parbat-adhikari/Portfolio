import { useState, type FormEvent } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Mail, MapPin, Github, Linkedin, Globe, Send, CheckCircle2 } from "lucide-react";
import { profile, social } from "../data/site";
import { useSEO } from "../hooks/useSEO";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";

export default function Contact() {
  const reduce = useReducedMotion();
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  useSEO({
    title: `Contact — ${profile.name}`,
    description: `Get in touch with ${profile.name} — based in ${profile.location}.`,
    path: "/contact",
  });

  function update(key: keyof typeof form, value: string) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    // No backend: open the user's mail client, pre-filled. Swap this for a
    // form service (Formspree, Web3Forms, Cloudflare Function) if you want
    // server-side handling — see README.
    const subject = encodeURIComponent(`Hello from ${form.name || "your website"}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  const inputBase =
    "w-full rounded-xl border border-cloud bg-snow px-4 py-3 text-ink placeholder:text-stone transition-colors focus:border-brass focus:outline-none focus-visible:outline-none";

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's start a conversation."
        lead="Tell me about an idea, a role, or a collaboration. I read everything that comes in."
      />

      <section className="container-page py-24">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr]">
          {/* Form / thank-you */}
          <Reveal>
            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div
                  key="thanks"
                  initial={reduce ? false : { opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex h-full flex-col items-start justify-center rounded-2xl border border-cloud bg-mist/40 p-10"
                >
                  <CheckCircle2 size={40} className="text-pine" />
                  <h2 className="mt-5 font-display text-3xl text-ink">Thank you.</h2>
                  <p className="mt-3 max-w-md leading-relaxed text-slate">
                    Your message is on its way. If your mail client didn't open, you can
                    reach me directly at{" "}
                    <a
                      href={`mailto:${profile.email}`}
                      className="link-underline text-pine"
                    >
                      {profile.email}
                    </a>
                    . I'll reply as soon as I can.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSent(false)}
                    className="mt-7 text-sm text-slate underline-offset-4 hover:text-ink hover:underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  initial={reduce ? false : { opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={reduce ? undefined : { opacity: 0 }}
                  className="space-y-5"
                  noValidate
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-2 block text-sm font-medium text-ink">
                        Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        autoComplete="name"
                        value={form.name}
                        onChange={(e) => update("name", e.target.value)}
                        className={inputBase}
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="mb-2 block text-sm font-medium text-ink">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        autoComplete="email"
                        value={form.email}
                        onChange={(e) => update("email", e.target.value)}
                        className={inputBase}
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="mb-2 block text-sm font-medium text-ink">
                      Message
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={6}
                      value={form.message}
                      onChange={(e) => update("message", e.target.value)}
                      className={`${inputBase} resize-none`}
                      placeholder="What's on your mind?"
                    />
                  </div>
                  <button
                    type="submit"
                    className="group inline-flex items-center gap-2 rounded-full bg-pine px-7 py-3.5 text-sm font-medium text-snow transition-colors hover:bg-pine-light"
                  >
                    Send message
                    <Send size={15} className="transition-transform group-hover:translate-x-0.5" />
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </Reveal>

          {/* Contact card + socials + map */}
          <Reveal delay={0.1} className="space-y-6">
            <div className="rounded-2xl border border-cloud bg-snow p-8">
              <h2 className="font-display text-xl text-ink">Direct details</h2>
              <ul className="mt-5 space-y-4 text-sm">
                <li className="flex items-center gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-mist text-pine">
                    <Mail size={16} />
                  </span>
                  <a href={`mailto:${profile.email}`} className="link-underline text-slate">
                    {profile.email}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-mist text-pine">
                    <MapPin size={16} />
                  </span>
                  <span className="text-slate">{profile.location}</span>
                </li>
              </ul>

              <div className="mt-6 flex gap-2">
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
                    className="grid h-11 w-11 place-items-center rounded-full border border-cloud text-slate transition-colors hover:border-brass hover:text-pine"
                  >
                    <Icon size={17} />
                  </a>
                ))}
              </div>
            </div>

            {/* Map placeholder — stylized, no external keys */}
            <div className="relative overflow-hidden rounded-2xl border border-cloud bg-pine-deep p-8 text-snow">
              <svg
                viewBox="0 0 400 200"
                className="absolute inset-0 h-full w-full opacity-30"
                aria-hidden
              >
                {[40, 80, 120, 160].map((y) => (
                  <path
                    key={y}
                    d={`M0 ${y} C 100 ${y - 20}, 200 ${y + 15}, 300 ${y - 10} S 400 ${y}, 400 ${y}`}
                    stroke="#B08535"
                    strokeWidth="1"
                    fill="none"
                  />
                ))}
              </svg>
              <div className="relative">
                <span className="eyebrow text-brass-light">Based in</span>
                <p className="mt-3 font-display text-2xl">{profile.location}</p>
                <p className="mt-1 text-sm text-snow/60">
                  Working across time zones — Nepal Standard Time (UTC+5:45).
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm text-brass-light">
                  <MapPin size={15} /> The Himalayas, at your service.
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
