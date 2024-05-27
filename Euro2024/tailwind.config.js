/** @type {import('tailwindcss').Config} */
import flowbite from 'flowbite/plugin';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: "var(--ff-poppins)",
        merriweather: "var(--ff-merriweather)",
        montserrat: "var(--ff-montserrat)",
      },
    },
  },
  plugins: [
    flowbite
  ],
}
