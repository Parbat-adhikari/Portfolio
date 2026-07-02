import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** stagger delay in seconds */
  delay?: number;
  /** distance to travel on the y-axis */
  y?: number;
  as?: "div" | "section" | "article" | "li" | "span";
};

/** Fades and lifts its children into view once, then leaves them be. */
export default function Reveal({
  children,
  className = "",
  delay = 0,
  y = 20,
  as = "div",
}: RevealProps) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as];

  return (
    <MotionTag
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-12%" }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </MotionTag>
  );
}
