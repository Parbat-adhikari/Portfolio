import { useRef, type ReactNode } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";

type Common = {
  children: ReactNode;
  className?: string;
  variant?: "solid" | "outline" | "ghost";
};

type AsLink = Common & { to: string; href?: never; onClick?: never };
type AsAnchor = Common & { href: string; to?: never; onClick?: never };
type AsButton = Common & { onClick: () => void; to?: never; href?: never };

type MagneticButtonProps = AsLink | AsAnchor | AsButton;

const styles: Record<NonNullable<Common["variant"]>, string> = {
  solid:
    "bg-pine text-snow hover:bg-pine-light border border-pine hover:border-pine-light",
  outline:
    "bg-transparent text-ink border border-ink/25 hover:border-ink/60",
  ghost: "bg-transparent text-ink border border-transparent hover:text-brass",
};

/** A button/link with a gentle magnetic pull toward the cursor. */
export default function MagneticButton(props: MagneticButtonProps) {
  const { children, className = "", variant = "solid" } = props;
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 15 });
  const sy = useSpring(y, { stiffness: 200, damping: 15 });

  function onMove(e: React.MouseEvent) {
    if (reduce || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    x.set(relX * 0.25);
    y.set(relY * 0.35);
  }
  function onLeave() {
    x.set(0);
    y.set(0);
  }

  const base =
    "group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors duration-300 ease-himalaya focus-visible:outline-brass";

  const inner = (
    <motion.span
      style={{ x: sx, y: sy }}
      className="inline-flex items-center gap-2"
    >
      {children}
    </motion.span>
  );

  const shared = `${base} ${styles[variant]} ${className}`;

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="inline-block"
    >
      {"to" in props && props.to ? (
        <Link to={props.to} className={shared}>
          {inner}
        </Link>
      ) : "href" in props && props.href ? (
        <a href={props.href} target="_blank" rel="noreferrer" className={shared}>
          {inner}
        </a>
      ) : (
        <button type="button" onClick={(props as AsButton).onClick} className={shared}>
          {inner}
        </button>
      )}
    </div>
  );
}
