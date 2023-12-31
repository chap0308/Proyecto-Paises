/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT( {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1215px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1584px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    fontFamily: {
      serif: ["Roboto Slab", "serif"],
    },
    typography: {
      styles: {
        variants: {
          h5: {
            display: "block",
            fontSmoothing: "antialiased",
            letterSpacing: "tracking-normal",
            fontFamily: "Roboto Slab",
            fontSize: "text-xl",
            fontWeight: "font-semibold",
            lineHeight: "leading-snug",
          },
        }
      }
    }
  },
  plugins: [],
});
