module.exports = {
    theme: {
      extend: {
        animation: {
          'fade-in': 'fadeIn 0.5s ease-out',
        },
        keyframes: {
          fadeIn: {
            from: { opacity: 0 },
            to: { opacity: 1 },
          }
        }
      }
    }
  }
  