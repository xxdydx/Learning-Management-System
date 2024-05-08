/** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
        },
        bg: "#111111",
        pink: "#ff4081",
        darkerpink: "#f01b68",
        surface: "#242527",
        yellow: "#fec006",
        text: "#B2BAC2",
        slate: {
          1: "hsl(200, 7.0%, 8.8%)",
          2: "hsl(195, 7.1%, 11.0%)",
          3: "hsl(197, 6.8%, 13.6%)",
          4: "hsl(198, 6.6%, 15.8%)",
          5: "hsl(199, 6.4%, 17.9%)",
          6: "hsl(201, 6.2%, 20.5%)",
          7: "hsl(203, 6.0%, 24.3%)",
          8: "hsl(207, 5.6%, 31.6%)",
          9: "hsl(206, 6.0%, 43.9%)",
          10: "hsl(206, 5.2%, 49.5%)",
          11: "hsl(206, 6.0%, 63.0%)",
          12: "hsl(210, 6.0%, 93.0%)",
        },
        crimson: {
          1: "hsl(335, 20.0%, 9.6%)",
          2: "hsl(335, 32.2%, 11.6%)",
          3: "hsl(335, 42.5%, 16.5%)",
          4: "hsl(335, 47.2%, 19.3%)",
          5: "hsl(335, 50.9%, 21.8%)",
          6: "hsl(335, 55.7%, 25.3%)",
          7: "hsl(336, 62.9%, 30.8%)",
          8: "hsl(336, 74.9%, 39.0%)",
          9: "hsl(336, 80.0%, 57.8%)",
          10: "hsl(339, 84.1%, 62.6%)",
          11: "hsl(341, 90.0%, 67.3%)",
          12: "hsl(332, 87.0%, 96.0%)",
        },
      },
    },

    fontFamily: {
      body: [
        "Inter",
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "system-ui",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "Noto Sans",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
      ],
      sans: [
        "Inter",
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "system-ui",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "Noto Sans",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
      ],
      display: ["var(--font-dm-sans)", ...fontFamily.sans],
    },
  },
};
