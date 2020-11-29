/* eslint-disable @typescript-eslint/no-var-requires */
const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      './index.html',
      './src/**/*.vue',
      './src/**/*.js',
      './src/**/*.ts',
    ],
  },
  theme: {
    extend: {
      colors: {
        teal: colors.teal,
      },
      opacity: {
        15: '0.15',
        20: '0.2',
        95: '0.95',
      },
      margin: {
        96: '24rem',
        128: '32rem',
      },
      height: {
        18: '4.5rem',
      },
      width: {
        18: '4.5rem',
      },
    },
  },
  variants: {
    backgroundOpacity: [
      'dark',
      'responsive',
      'hover',
      'focus',
      'active',
      'group-hover',
    ],
    // cursor: ['responsive', 'disabled'],
    // backgroundColor: ['dark', 'hover', 'disabled'],
    // borderColor: ['dark', 'active', 'hover', 'focus', 'disabled'],
    // textColor: ['dark', 'hover', 'active', 'disabled'],
    // opacity: ['dark', 'hover', 'active', 'focus', 'disabled'],
  },
  darkMode: 'class',
}
