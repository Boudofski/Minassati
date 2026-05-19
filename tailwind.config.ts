import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/data/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: { "2xl": "1400px" },
    },
    extend: {
      fontFamily: {
        sans:    ["var(--font-cairo)", "var(--font-ibm-plex-arabic)", "var(--font-tajawal)", "system-ui", "sans-serif"],
        cairo:   ["var(--font-cairo)", "Cairo", "sans-serif"],
        plex:    ["var(--font-ibm-plex-arabic)", "IBM Plex Sans Arabic", "sans-serif"],
        tajawal: ["var(--font-tajawal)", "Tajawal", "sans-serif"],
        amiri:   ["var(--font-amiri)", "Amiri", "Traditional Arabic", "serif"],
        display: ["var(--font-cairo)", "Cairo", "system-ui", "sans-serif"],
        mono:    ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      colors: {
        border:  "rgb(var(--border) / <alpha-value>)",
        input:   "rgb(var(--input) / <alpha-value>)",
        ring:    "rgb(var(--ring) / <alpha-value>)",
        background: "rgb(var(--background) / <alpha-value>)",
        foreground: "rgb(var(--foreground) / <alpha-value>)",
        primary: {
          DEFAULT: "rgb(var(--primary) / <alpha-value>)",
          foreground: "rgb(var(--primary-foreground) / <alpha-value>)",
        },
        secondary: {
          DEFAULT: "rgb(var(--secondary) / <alpha-value>)",
          foreground: "rgb(var(--secondary-foreground) / <alpha-value>)",
        },
        destructive: {
          DEFAULT: "rgb(var(--destructive) / <alpha-value>)",
          foreground: "rgb(var(--destructive-foreground) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "rgb(var(--muted) / <alpha-value>)",
          foreground: "rgb(var(--muted-foreground) / <alpha-value>)",
        },
        accent: {
          DEFAULT: "rgb(var(--accent) / <alpha-value>)",
          foreground: "rgb(var(--accent-foreground) / <alpha-value>)",
        },
        success: {
          DEFAULT: "rgb(var(--success) / <alpha-value>)",
          foreground: "rgb(var(--success-foreground) / <alpha-value>)",
        },
        warning: {
          DEFAULT: "rgb(var(--warning) / <alpha-value>)",
          foreground: "rgb(var(--warning-foreground) / <alpha-value>)",
        },
        popover: {
          DEFAULT: "rgb(var(--popover) / <alpha-value>)",
          foreground: "rgb(var(--popover-foreground) / <alpha-value>)",
        },
        card: {
          DEFAULT: "rgb(var(--card) / <alpha-value>)",
          foreground: "rgb(var(--card-foreground) / <alpha-value>)",
        },
        // Brand direct colors
        brand: {
          navy:  "#0F172A",
          blue:  "#3B82F6",
          teal:  "#14B8A6",
          gold:  "#F59E0B",
          green: "#22C55E",
          cream: "#FFF7ED",
          soft:  "#F8FBFF",
        },
      },
      borderRadius: {
        lg:      "var(--radius)",
        md:      "calc(var(--radius) - 2px)",
        sm:      "calc(var(--radius) - 4px)",
        xl:      "1.5rem",
        "2xl":   "2rem",
        "3xl":   "2.5rem",
        card:    "2rem",
        section: "2.5rem",
        pill:    "9999px",
      },
      boxShadow: {
        "card-glow":  "0 4px 24px -4px rgba(59,130,246,0.12), 0 1px 4px rgba(15,23,42,0.06)",
        "hover-glow": "0 16px 48px -8px rgba(59,130,246,0.22), 0 4px 12px rgba(15,23,42,0.06)",
        "gold-glow":  "0 8px 32px -4px rgba(245,158,11,0.28)",
        "teal-glow":  "0 8px 32px -4px rgba(20,184,166,0.28)",
        "navy-glow":  "0 8px 32px -4px rgba(15,23,42,0.28)",
        "soft":       "0 4px 24px -4px rgba(15,23,42,0.06), 0 1px 4px rgba(15,23,42,0.03)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to:   { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to:   { height: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%":      { transform: "translateY(-12px)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%":      { transform: "translateY(-8px) rotate(4deg)" },
        },
        shimmer: {
          "0%":   { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.35", transform: "scale(1)" },
          "50%":      { opacity: "0.65", transform: "scale(1.06)" },
        },
        "spin-slow": {
          from: { transform: "rotate(0deg)" },
          to:   { transform: "rotate(360deg)" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(18px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
        "scale-in": {
          from: { opacity: "0", transform: "scale(0.92)" },
          to:   { opacity: "1", transform: "scale(1)" },
        },
        "slide-down": {
          from: { opacity: "0", transform: "translateY(-10px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "accordion-down":  "accordion-down 0.2s ease-out",
        "accordion-up":    "accordion-up 0.2s ease-out",
        float:             "float 5s ease-in-out infinite",
        "float-slow":      "float-slow 7s ease-in-out infinite",
        shimmer:           "shimmer 1.8s ease-in-out infinite",
        "pulse-glow":      "pulse-glow 3s ease-in-out infinite",
        "spin-slow":       "spin-slow 20s linear infinite",
        "fade-up":         "fade-up 0.6s ease-out forwards",
        "scale-in":        "scale-in 0.4s ease-out forwards",
        "slide-down":      "slide-down 0.25s ease-out",
      },
      backgroundImage: {
        "gradient-blue-teal": "linear-gradient(135deg, #3B82F6 0%, #14B8A6 100%)",
        "gradient-navy-blue": "linear-gradient(135deg, #0F172A 0%, #1e3a6e 100%)",
        "gradient-gold":      "linear-gradient(135deg, #F59E0B 0%, #EF4444 100%)",
        "gradient-soft":      "linear-gradient(135deg, rgba(59,130,246,0.08) 0%, rgba(20,184,166,0.06) 100%)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
