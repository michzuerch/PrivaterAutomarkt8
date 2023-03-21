/** @type { import('tailwindcss').Config } */
const defaultTheme = require('tailwindcss/defaultTheme');
//const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}', './node_modules/flowbite/**/*.js'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['InterVariable', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
      },
      textColor: {
        default: 'var(--color-text)',
        offset: 'var(--color-text-offset)',
      },
      backgroundColor: {
        default: 'var(--color-background)',
        offset: 'var(--color-background-offset)',
      },
      borderColor: {
        default: 'var(--color-border)',
      },
    },
  },
  corePlugins: {
    fontSize: false,
  },
  plugins: [require('@tailwindcss/typography'), require('flowbite/plugin'), require('tailwindcss-fluid-type')],
};
