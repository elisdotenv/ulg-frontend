/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      /* --- Typography plugin configutrations and customizations */
      typography: () => ({
        DEFAULT: {
          css: {
            fontFamily: 'theme(fontFamily.secondary)',
            maxWidth: '75ch',
          },
        },
      }),

      // --- Screens and Media Queries
      screens: {},
      // --- Theme Colors

      fontFamily: {
        lato: ['var(--font-lato-sans)', 'sans-serif'],
        roboto: ['var(--font-roboto-sans)', 'sans-serif'],
      },
      colors: {
        primary: '#252627',
        secondary: '#bf1313',
        ternary: '#5c9bfa',
        grayedText: '#d3d3d3',
        lightGray: '#f2f2f2',
        grayBorder: '#333',
        dark: '#090808',
        darkbg: '#191d1e',
        cyaned: '#09b1c6',
        light: '#efebe6',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
