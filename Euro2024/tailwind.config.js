/** @type {import('tailwindcss').Config} */
import flowbite from "flowbite/plugin"

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: "var(--ff-poppins)",
        merriweather: "var(--ff-merriweather)",
        montserrat: "var(--ff-montserrat)",
      },
      colors: {
        "clr-bg-blue": "#143cdb",
        "clr-footer-bg-blue": "#14256a",
        "clr-whiteish": "#e9e9e9",
        "clr-hover-white": "#fff",
      },
    },
  },
  plugins: [flowbite],
}
