/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      purple: "#8e55bb",
      "purple-light": "#e4cdf6",
      "purple-dark": "#5d2b6f",
      yellow: "#ffd500",
      orange: "#E9922D",
      gray: "#eae5ee",
      "beige-light": "#fdf4eb",
      white: "#fff",
    },
    screens: {
      xs: "375px",
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1440px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      backgroundImage: {
        "hero-bg": "url('./assets/main-bg.jpg')",
      },
    },
  },
  plugins: [],
};
