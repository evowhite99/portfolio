/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-to-bottom":
          "linear-gradient(to bottom, transparent, rgb(var(--background-end-rgb))) rgb(var(--background-start-rgb))",
      },
      colors: {
        foreground: "rgb(var(--foreground-rgb))",
        backgroundStart: "rgb(var(--background-start-rgb))",
        backgroundEnd: "rgb(var(--background-end-rgb))",
      },
      boxShadow: {
        custom: "0 0 15px rgba(0, 0, 0, 0.3), 0 0 15px rgba(0, 0, 0, 0.3)",
      },
    },
  },
  plugins: [],
};
