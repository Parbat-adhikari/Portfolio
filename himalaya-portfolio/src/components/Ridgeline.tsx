type RidgelineProps = {
  className?: string;
  stroke?: string;
};

/**
 * A stylized Himalayan skyline in thin strokes — a quieter companion to the
 * contour motif. Decorative only.
 */
export default function Ridgeline({
  className = "",
  stroke = "#B08535",
}: RidgelineProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 1440 220"
      fill="none"
      preserveAspectRatio="xMidYMax meet"
      aria-hidden="true"
      focusable="false"
    >
      {/* far range — faint */}
      <path
        d="M0 200 L180 120 L300 165 L430 90 L560 150 L700 70 L840 155 L980 95 L1120 160 L1260 110 L1440 175 L1440 220 L0 220 Z"
        fill={stroke}
        opacity="0.06"
      />
      {/* near ridge — hairline stroke */}
      <path
        d="M0 205 L200 130 L330 175 L470 100 L600 160 L740 78 L890 165 L1030 105 L1180 168 L1320 118 L1440 182"
        stroke={stroke}
        strokeWidth="1.25"
        strokeLinejoin="round"
        strokeLinecap="round"
        opacity="0.5"
      />
    </svg>
  );
}
