/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "dark-el": "hsl(209, 23%, 22%)",
      "dark-bg": "hsl(207, 26%, 17%)",
      "dark-text": "hsl(0, 0%, 100%)",
      "light-text": "hsl(200, 15%, 8%)",
      "light-input": "hsl(0, 0%, 52%)",
      "light-bg": "hsl(0, 0%, 98%)",
      "light-el": "hsl(0, 0%, 100%)",
    },
    extend: {},
  },
  plugins: [],
};
