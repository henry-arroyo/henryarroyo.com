import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        terminal: {
          bg: "#0a0a0a",
          panel: "#0d1117",
          card: "#111318",
          green: "#00ff41",
          "green-dim": "#00cc33",
          "green-muted": "#0a3d1a",
          amber: "#ffb000",
          "amber-dim": "#cc8d00",
        },
        text: {
          heading: "#e0e0e0",
          body: "#b0b0b0",
          muted: "#666666",
        },
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', "monospace"],
        sans: ['"Inter"', "sans-serif"],
      },
      animation: {
        blink: "blink 1s step-end infinite",
        "fade-in": "fadeIn 0.6s ease-out forwards",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        fadeIn: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
