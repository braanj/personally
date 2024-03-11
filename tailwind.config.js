/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        md: "0px 4px 70px 0px rgba(30, 40, 52, 0.08)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
