/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backGroundImage: {
        bgImage:
          "url('/Users/mac/interactive-card/src/assets/bg-main-mobile.png')",
      },
    },
  },
  plugins: [],
};
