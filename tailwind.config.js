/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "rgb(var(--background), <alpha-value>)",
        backroundDark: "rgb(var(--background-dark), <alpha-value>)",
        foreground: "rgb(var(--foreground), <alpha-value>)",
        accentColor: "rgb(var(--accent-color), <alpha-value>)",
      },
      width: {
        18: "4.5rem",
      },
    },
  },
  plugins: [],
};
