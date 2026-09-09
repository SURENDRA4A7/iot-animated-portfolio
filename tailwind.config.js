/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3b82f6",
        secondary: "#8b5cf6",
        accent: "#ec4899",
        dark: "#0f172a",
        darker: "#020617",
      },
      animation: {
        float: "float 3s ease-in-out infinite",
        glow: "glow 3s ease-in-out infinite",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      backdropBlur: {
        xl: "20px",
      },
    },
  },
  plugins: [],
}
