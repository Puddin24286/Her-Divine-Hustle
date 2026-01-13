import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand Colors
        obsidian: {
          DEFAULT: "#0A0A0A",
          light: "#1A1A1A",
        },
        gold: {
          DEFAULT: "#D4AF37",
          light: "#F4D03F",
          dark: "#B8941F",
        },
        champagne: {
          DEFAULT: "#F7E7CE",
          light: "#FAF0E6",
        },
        "off-white": {
          DEFAULT: "#F5F3F0",
          dark: "#E8E6E3",
        },
        smoke: {
          DEFAULT: "#2D2D2D",
          light: "#3A3A3A",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "serif"],
        sans: ["var(--font-montserrat)", "sans-serif"],
      },
      fontSize: {
        "display-lg": ["7rem", { lineHeight: "1", letterSpacing: "-0.02em" }],
        "display-md": ["5rem", { lineHeight: "1", letterSpacing: "-0.02em" }],
        "display-sm": ["3.5rem", { lineHeight: "1.1", letterSpacing: "-0.01em" }],
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      animation: {
        shimmer: "shimmer 8s linear infinite",
        "fade-in": "fadeIn 0.6s ease-out",
        "slide-up": "slideUp 0.6s ease-out",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-luxury": "linear-gradient(135deg, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

export default config;
