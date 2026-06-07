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
        surface: "#12161A",
        subtle: "#1E252B",
        "matrix-green": "#10B981",
        "matrix-green-light": "#34D399",
        "matrix-green-muted": "#064E3B",
        aquamarine: "#06B6D4",
        "error-red": "#EF4444",
        "text-main": "#FFFFFF",
        "text-muted": "#94A3B8",
        "text-neon": "#34D399",
      },
      fontFamily: {
        sans: ["Inter", "Geist Sans", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "Fira Code", "monospace"],
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
          "0%, 100%": { boxShadow: "0 0 20px rgba(16, 185, 129, 0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(16, 185, 129, 0.6)" },
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
          "radial-gradient(circle at center, rgba(16, 185, 129, 0.08) 0%, rgba(6, 182, 212, 0.03) 50%, rgba(0, 0, 0, 0) 100%)",
        "hero-aura-lg":
          "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(16, 185, 129, 0.12) 0%, rgba(6, 182, 212, 0.04) 40%, transparent 100%)",
        "card-glow":
          "linear-gradient(90deg, rgba(16, 185, 129, 0.3) 0%, rgba(6, 182, 212, 0.3) 100%)",
        "text-gradient":
          "linear-gradient(to right, #FFFFFF 30%, #A7F3D0 70%, #06B6D4 100%)",
        "text-gradient-green":
          "linear-gradient(135deg, #10B981 0%, #06B6D4 100%)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;