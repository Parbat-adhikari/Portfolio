/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Himalayan design tokens — cool snow, deep pine, temple brass.
        snow: "#F3F5F2", // high-altitude cool paper white
        mist: "#E8ECE8", // subtle section separation
        cloud: "#DEE3DE", // hairline / borders
        stone: "#8B948C", // muted secondary text
        slate: "#5A635C", // tertiary text on light
        ink: "#182420", // primary text — deep pine charcoal
        pine: {
          DEFAULT: "#1E4034", // brand primary / dark surfaces
          deep: "#14291F", // darkest surface
          light: "#2C5646",
        },
        brass: {
          DEFAULT: "#B08535", // accent — temple brass / marigold / sunlight
          light: "#CBA45B",
          soft: "#E7D9B8",
        },
      },
      fontFamily: {
        display: ['"Fraunces"', "Georgia", "serif"],
        sans: ['"Manrope"', "system-ui", "-apple-system", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      fontSize: {
        "fluid-hero": "clamp(2.75rem, 7vw, 6.5rem)",
        "fluid-title": "clamp(2rem, 4.5vw, 3.75rem)",
        "fluid-lead": "clamp(1.1rem, 1.8vw, 1.4rem)",
      },
      letterSpacing: {
        eyebrow: "0.22em",
      },
      maxWidth: {
        container: "1240px",
        prose: "68ch",
      },
      transitionTimingFunction: {
        himalaya: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        "draw-line": {
          from: { strokeDashoffset: "1" },
          to: { strokeDashoffset: "0" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(16px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        drift: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.8s cubic-bezier(0.16,1,0.3,1) forwards",
        drift: "drift 8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
