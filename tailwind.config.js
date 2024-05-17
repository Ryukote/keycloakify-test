module.exports = {
  mode: ['jit'],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
        colors: {
            primary: '#2B3DDE',
            secondary: '#111727',
            info: '#5877E0',
            success: '#81C14B',
            warning: '#FFB45B',
            error: '#FF5E5B',
            // 'gray': {
            //     100: '#2125291a',
            //     200: '#21252933',
            //     300: '#2125294d',
            //     400: '#21252966',
            //     500: '#21252980',
            //     600: '#21252999',
            //     700: '#212529b3',
            //     800: '#212529cc',
            //     900: '#212529',
            // },
        },
    },
},

  plugins: [],
}
