/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    borderRadius: {
      none: "0",
      DEFAULT: "4px",
      10: "10px",
      15: "15px",
      25: "25px",
      30: "30px",
      32: "32px",
      43: "43px",
      56: "56px",
      full: "100%",
    },
    colors: {
      primary: "#F9EEE1",
      white: "#FFFFFF",
      black: "#000000",
      "red-400": "#DE625E",
      "red-700": "#C94A46",
      blue: "#4A51E0",
      "blue-700": "#3C43D5",
      yellow: "#EEC142",
      gray: "#EFEFEF",
      transparent: "transparent",
      blackGray: "#626262",
    },
    fontSize: {
      sm: "19px",
      base: "24px",
      md: "29px",
      lg: "35px",
      xl: "39px",
      45: "45px",
      "2xl": "50px",
      "3xl": "59px",
      "4xl": "64px",
      "5xl": "75px",
    },
    zIndex: {
      negative: "-1",
      2: "2",
      10: "10",
      50: "50",
    },
    rotate: {
      178: "178deg",
      2: "-2deg",
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
    screens: {
      xl: "1476px",
      lg: "1383px",
      desktop: "1180px",
      md: "893px",
      tablet: "750px",
      mobile: "640px",
      "mobile-md": "388px",
    },
  },
  plugins: [require("tailwindcss-animate")],
};
