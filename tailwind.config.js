/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#1e2640",
        lightDark: "#353c53",
        textColor: "#1A181E",
        textMuted: "#4D4D4D"
      }

    },
  },
  plugins: [],
};
