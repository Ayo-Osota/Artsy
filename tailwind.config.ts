import type { Config } from "tailwindcss";
const defaultTheme = require('tailwindcss/defaultTheme')

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        clash: ["Clash Display", ...defaultTheme.fontFamily.sans],
        satoshi: ["Satoshi", ...defaultTheme.fontFamily.serif],
      },
      colors: {
        artsy_gray: {
          1: '#272727',
          2: '#292929',
          3: '#333333',
          4: '#272727',
          5: '#272727',
          6: '#616161',
        },
        artsy_green: '#28A814',
        artsy_blue: '#006CA2',
        artsy_lightGray: '#999EA5',
        artsy_orange: '#E27625',
      },
      fontSize: {
        'xxs': ['0.55rem', '0.6rem'],
        'xs': ['0.6rem', '0.8rem'],
      },
      spacing: {
        '4.5': '1.125rem',
        '5.5': '1.375rem',
        '6.5': '1.625rem',
        '7.5': '1.875rem',
        '8.5': '2.125rem',
        '9.5': '2.375rem',
        '10.5': '2.625rem',
        '11.5': '2.875rem',
        '12.5': '3.25rem',
        '13.5': '3.375rem',
        '15': '3.75rem',
        '26': '6.5rem',
        '29': '7.3125rem',
      },
      lineHeight: {
        'btight': '1.2',
        'bsnug': '1.35'
      }
    },
  },
  plugins: [require('daisyui')],
};
export default config;
