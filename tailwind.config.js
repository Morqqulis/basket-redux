/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: {
          max: "640px",
        },
        md: {
          max: "768px",
        },
        lg: {
          max: "1024px",
        },
        xl: {
          max: "1280px",
        },
        "2xl": {
          max: "1535px",
        },
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("tailwindcss-animated")],
};
