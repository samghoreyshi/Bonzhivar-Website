/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        IranYekan: ["IranYekan", "sans-serif"],
        Gold: ["Gold", "sans-serif"],
      },
      backgroundImage: {
        "back-gradient": "linear-gradient(90deg, #1DAFBE 0%, #1DAFBE 100%)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        background: "#FAF9F7",
        primary: "#1D4ED8",
        secondary: "#9333EA",
        accent: "#1DAFBE",
        accentLight: "#F4E8C9",
        accentDark: "#092C30",
      },
      animation: {
        'rainbow-border': 'rainbow 2s linear infinite',
        blink: 'blink 1s step-end infinite',
        blob: "blob 7s infinite",
      },
      keyframes: {
        rainbow: {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
      },
      textDirection: {
        rtl: 'rtl',
      },
      ringColor: {
        DEFAULT: 'transparent',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.gradient-border-bottom': {
          'border-bottom': '2px solid transparent',
          'border-image': 'linear-gradient(to right, transparent, #1DAFBE, transparent) 1',
        },
        '.direction-rtl': {
          direction: 'rtl',
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
};
