/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        IranYekan: ["IranYekan", "sans-serif"], // Add the custom font here
        Gold: ["Gold", "sans-serif"], // Add the custom font here
      },

      backgroundImage: {
        "back-gradient": "linear-gradient(90deg, #2B6F5D 0%, #4F9A85 100%)", // Example gradient
      },
      colors: {
        background: "#F8F3E9",
        primary: "#1D4ED8", // Custom primary color
        secondary: "#9333EA", // Custom secondary color
        accent: "#4F9A85", // Custom accent color
        accentLight: "#F4E8C9",
        accentDark: "#052D1C",
        // Add more colors as needed
      },
      animation: {
        'rainbow-border': 'rainbow 2s linear infinite',
        blink: 'blink 1s step-end infinite',
      },
      keyframes: {
        rainbow: {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        }
      },
      textDirection: {
        'rtl': 'rtl',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    function({ addUtilities }) {
      const newUtilities = {
        '.gradient-border-bottom': {
          'border-bottom': '2px solid transparent',
          'border-image': 'linear-gradient(to right, transparent, #4F9A85, transparent) 1',
        },
        '.direction-rtl': {
          'direction': 'rtl',
        },
      }
      addUtilities(newUtilities, ['responsive', 'hover'])
    }
  ],
};
