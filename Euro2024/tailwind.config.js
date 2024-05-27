/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: "var(--ff-poppins)",
        merriweather: "var(--ff-merriweather)",
        montserrat: "var(--ff-montserrat)",
      },
    },
  },
  plugins: [],
}
