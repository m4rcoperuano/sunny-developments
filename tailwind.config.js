module.exports = {
  content: [
    './public/**/*.html',
    './*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 10s linear infinite',
      }
    },
  },
  plugins: [require("daisyui")],
}
