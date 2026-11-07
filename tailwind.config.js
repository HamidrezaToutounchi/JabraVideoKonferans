/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        jabra: {
          yellow: "#FFD100",
          yellowDark: "#E6BC00",
          navy: "#0F172A",
          navyDark: "#0A0F1D",
          slate: "#1E293B",
          light: "#F8FAFC",
        },
        teams: {
          purple: "#4F52B2",
          purpleDark: "#3E408F",
        },
        zoom: {
          blue: "#2D8CFF",
          blueDark: "#1A75E8",
        },
      },
    },
  },
  plugins: [],
};
