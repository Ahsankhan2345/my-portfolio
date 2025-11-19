// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        'purple-500': '#A855F7',
        'pink-500': '#EC4899',
        'blue-500': '#3B82F6',
        'cyan-400': '#22D3EE',
        'green-400': '#34D399',
        'teal-400': '#2DD4BF',
      },
      animation: {
        spin: 'spin 1s linear infinite',
        'spin-slow': 'spin 12s linear infinite',
        'spin-slower': 'spin 18s linear infinite',
        'spin-reverse': 'spin-reverse 22s linear infinite',
      },
      keyframes: {
        'spin-reverse': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(-360deg)' },
        },
      },
      blur: {
        '3xl': '80px',
      },
    },
  },
  plugins: [],
};
