/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#112240",
        accent: "#ff7f50",
      },
    },
  },
  plugins: [],
};
