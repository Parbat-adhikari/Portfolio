import { motion, useReducedMotion } from "framer-motion";
import Contour from "./Contour";

type Props = {
  eyebrow: string;
  title: string;
  lead?: string;
};

/** The top band shared by every interior page. */
export default function PageHeader({ eyebrow, title, lead }: Props) {
  const reduce = useReducedMotion();
  return (
    <header className="relative overflow-hidden border-b border-cloud pt-36 pb-16 sm:pt-44 sm:pb-20">
      <Contour
        className="pointer-events-none absolute inset-x-0 top-0 h-full w-full opacity-50"
        stroke="#2C5646"
      />
      <div className="container-page relative">
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="eyebrow mb-5 flex items-center gap-3"
        >
          <span className="h-px w-8 bg-brass/60" aria-hidden />
          {eyebrow}
        </motion.p>
        <motion.h1
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl text-fluid-title font-normal leading-[1.02] text-balance text-ink"
        >
          {title}
        </motion.h1>
        {lead && (
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 max-w-prose text-fluid-lead leading-relaxed text-slate text-pretty"
          >
            {lead}
          </motion.p>
        )}
      </div>
    </header>
  );
}
