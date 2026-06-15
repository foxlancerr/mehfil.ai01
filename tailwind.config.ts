import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: "#000000",
        surface: "#0C0C0F",
        subtle: "#232328",
        // Crimson/rose accent system (Mehfil.ai AI aesthetic)
        crimson: "#E11D48",
        "crimson-light": "#FB7185",
        "crimson-muted": "#4C0519",
        rose: "#F43F5E",
        // Backwards-compatible aliases — existing components reskin via these
        "matrix-green": "#E11D48",
        "matrix-green-light": "#FB7185",
        "matrix-green-muted": "#4C0519",
        aquamarine: "#9F1239",
        "error-red": "#EF4444",
        "text-main": "#FFFFFF",
        "text-muted": "#9CA3AF",
        "text-neon": "#FB7185",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      animation: {
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "border-trace": "border-trace 3s linear infinite",
        "float": "float 6s ease-in-out infinite",
        "grid-drift": "grid-drift 20s linear infinite",
        "shimmer": "shimmer 2.5s ease-in-out infinite",
        "fade-up": "fade-up 0.6s ease-out forwards",
        "status-ping": "status-ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite",
      },
      keyframes: {
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(225, 29, 72, 0.35)" },
          "50%": { boxShadow: "0 0 45px rgba(225, 29, 72, 0.65)" },
        },
        "border-trace": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "grid-drift": {
          "0%": { transform: "translate(0, 0)" },
          "100%": { transform: "translate(50px, 50px)" },
        },
        "shimmer": {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "status-ping": {
          "75%, 100%": { transform: "scale(2)", opacity: "0" },
        },
      },
      backgroundImage: {
        "hero-aura":
          "radial-gradient(circle at center, rgba(225, 29, 72, 0.12) 0%, rgba(136, 19, 55, 0.05) 50%, rgba(0, 0, 0, 0) 100%)",
        "hero-aura-lg":
          "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(225, 29, 72, 0.18) 0%, rgba(136, 19, 55, 0.06) 40%, transparent 100%)",
        "card-glow":
          "linear-gradient(90deg, rgba(225, 29, 72, 0.35) 0%, rgba(244, 63, 94, 0.3) 100%)",
        "text-gradient":
          "linear-gradient(to right, #FFFFFF 30%, #FDA4AF 70%, #E11D48 100%)",
        "text-gradient-green":
          "linear-gradient(135deg, #FB7185 0%, #E11D48 100%)",
      },
    },
  },
  plugins: [],
};

export default config;