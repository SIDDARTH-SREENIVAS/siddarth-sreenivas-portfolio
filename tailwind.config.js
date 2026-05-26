/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        action: "#FF5722"
      },
      boxShadow: {
        actionSoft: "0 0 0 6px rgba(255, 87, 34, 0.10)"
      },
      borderWidth: {
        3: "3px"
      }
    }
  },
  plugins: []
};

