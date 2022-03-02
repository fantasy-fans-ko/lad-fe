module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    minHeight: {
      '50': '50px'
    },
    extend: {
      colors: {
        'tb': 'rgba(0, 0, 0, 0.6)',
        'white': '#ffffff'
      },
      animation: {
        'slide': 'slide 0.5s'
      },
      keyframes: {
        slide: {
          'from': {
            transform: 'translateX(30px)',
            opacity: 0
          },
          'to': {
            transform: 'translateX(0px)',
            opacity: 1
          }
        }
      }
    }
  },
  plugins: []
};
