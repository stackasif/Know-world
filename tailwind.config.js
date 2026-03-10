/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
 theme: {
    extend: {
      keyframes: {
        loaderSpin: {
          to: { transform: "rotate(0.5turn)" },
        },
      },
      animation: {
        loader: "loaderSpin 1s linear infinite",
      },
    },
  },
  plugins: [],
}