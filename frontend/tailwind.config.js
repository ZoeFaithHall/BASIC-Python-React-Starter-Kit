module.exports = {
  content: [
    "./index.html", // Include index.html
    "./src/**/*.{js,ts,jsx,tsx}", // Include all source files
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")], // Include DaisyUI if you're using it
  mode: "jit", // Just-in-Time mode
};