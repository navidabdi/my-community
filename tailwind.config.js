module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        '': '',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
