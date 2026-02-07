/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        "cyber-blue": "#5AC8FF",
        "slate-950": "#020617",
        "emerald-500": "#10B981"
      },
      backgroundImage: {
        "command-bar": "linear-gradient(135deg, rgba(16, 185, 129, 0.22), rgba(90, 200, 255, 0.18))",
        "hero-glow": "radial-gradient(circle at top, rgba(16, 185, 129, 0.18), rgba(2, 6, 23, 0.8) 60%)"
      },
      boxShadow: {
        "command": "0 12px 40px rgba(15, 23, 42, 0.45)"
      }
    }
  },
  plugins: []
};
