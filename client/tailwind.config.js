/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#fd1e1a",
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
