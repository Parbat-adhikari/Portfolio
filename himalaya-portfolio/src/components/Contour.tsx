import { motion } from "framer-motion";

type ContourProps = {
  className?: string;
  /** stroke color — defaults to a faint pine */
  stroke?: string;
  /** whether the lines animate their draw-in */
  animate?: boolean;
};

/**
 * The signature: a topographic elevation map of a Himalayan ridge, drawn as
 * thin contour lines. Used as ambient texture behind hero and section breaks.
 * Purely decorative, so it's hidden from assistive tech.
 */
const LINES = [
  "M0 320 C 120 300, 220 250, 340 255 S 560 300, 700 250 S 900 180, 1040 210 S 1280 260, 1440 220",
  "M0 350 C 140 335, 240 290, 360 296 S 580 336, 720 290 S 920 224, 1060 252 S 1290 296, 1440 262",
  "M0 384 C 160 372, 260 332, 380 338 S 600 372, 740 332 S 940 272, 1080 296 S 1300 336, 1440 306",
  "M0 420 C 180 410, 280 376, 400 382 S 620 410, 760 376 S 960 324, 1100 344 S 1310 380, 1440 352",
  "M0 458 C 200 450, 300 422, 420 428 S 640 450, 780 422 S 980 378, 1120 394 S 1320 424, 1440 400",
];

export default function Contour({
  className = "",
  stroke = "#2C5646",
  animate = true,
}: ContourProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 1440 520"
      fill="none"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      focusable="false"
    >
      {LINES.map((d, i) => (
        <motion.path
          key={i}
          d={d}
          stroke={stroke}
          strokeWidth={1}
          strokeLinecap="round"
          initial={animate ? { pathLength: 0, opacity: 0 } : false}
          whileInView={animate ? { pathLength: 1, opacity: 0.5 } : undefined}
          viewport={{ once: true, margin: "-10%" }}
          transition={{
            duration: 2.2,
            delay: i * 0.12,
            ease: [0.16, 1, 0.3, 1],
          }}
          style={{ opacity: animate ? undefined : 0.5 }}
        />
      ))}
    </svg>
  );
}
