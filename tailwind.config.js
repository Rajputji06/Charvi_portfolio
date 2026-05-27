/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brown: {
          50: "#FDF8F3",
          100: "#F5EDE3",
          200: "#E8D5C0",
          300: "#D4B896",
          400: "#B8956A",
          500: "#A0714A",
          600: "#8B5E3C",
          700: "#6B4226",
          800: "#4A2D1A",
          900: "#2C1A0E",
          950: "#1A0F08",
        },
        bronze: {
          DEFAULT: "#B87333",
          light: "#D4944F",
          dark: "#8B5A2B",
        },
        cream: "#FDF8F3",
        warm: "#F5EDE3",
        espresso: "#2C1A0E",
        coffee: "#4A2D1A",
      },
      fontFamily: {
        display: ['"Playfair Display"', "Georgia", "serif"],
        script: ['"Dancing Script"', "cursive"],
        body: ['"Lora"', "Georgia", "serif"],
        sans: ['"Nunito Sans"', "system-ui", "sans-serif"],
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease-out forwards",
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        "scale-in": "scaleIn 0.5s ease-out forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.96)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [],
};
