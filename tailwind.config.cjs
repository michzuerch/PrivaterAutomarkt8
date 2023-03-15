/** @type { import('tailwindcss').Config } */
const defaultTheme = require('tailwindcss/defaultTheme');
//const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}', './node_modules/flowbite/**/*.js'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--aw-color-primary)',
        secondary: 'var(--aw-color-secondary)',
        accent: 'var(--aw-color-accent)',
      },
      fontFamily: {
        sans: ['var(--aw-font-sans)', ...defaultTheme.fontFamily.sans],
        serif: ['var(--aw-font-serif)', ...defaultTheme.fontFamily.serif],
        heading: ['var(--aw-font-heading)', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  corePlugins: {
    fontSize: false,
  },
  plugins: [require('@tailwindcss/typography'), require('flowbite/plugin'), require('tailwindcss-fluid-type')],
  darkMode: 'class',
};
