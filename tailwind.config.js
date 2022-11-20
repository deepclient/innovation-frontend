/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundSize: {
        "50%": "700px",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ['Montserrat', 'sans-serif']
      },
      colors: {
        app: {
          500: "#232323",
        },

        meta: {
          500: "#6379FF",
        },

        gray: {
          500: "#1E1E1E",
          700: "#1A1A1A"
        },
      },
    },
  },
  plugins: [],
}
