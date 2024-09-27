import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'screen-xl': '75rem',
        'screen-2xl': '83.75rem'
      },
      boxShadow: {
        'service': '0px 3px 20px 0px #8E9CA90D',
        'deatail_shadow': '0px 20px 80px 0px #68758D26'
      },
      transitionDuration: {
        '150': '150ms',
      },
      spacing: {
        '6.25': '6.25rem',
        '70%': '70%',
        '40%': '40%',
        '30%': '30%',
        '60%': '60%',
        8.5: '8.5rem',
        50: '50rem',
        25: '25rem',
        29: '28rem',
        120: '120rem',
        45: '45rem',
        94: '22.5rem',
        3.75: '3.75rem'
      },
      height: {
        150: '750px',
        6.25: '6.25rem',
      },
      lineHeight: {
        'extra-loose': '2.5',
        '2.5': '2.5rem',
      },
      inset: {
        '5%': '5%',
        '35%': '35%'
      },
      zIndex: {
        '1': '1',
        '2': '2',
        '999': '999'
      },
      colors: {
        primary: "#2F73F2",
        secondary: "#547593",
        midnight_text: "#102D47",
        grey: "#668199",
        border: "#CCD7E1",
        success: "#3cd278",
        section: "#F8FAFC",
        darkmode: "#081738",
        darklight: "#000f30",
        dark_border: "#224767",
        SkyBlueMist: "#C0D5FB",
        'custom-light-blue': '#F1F4FF',
      },
      fontSize: {
        58: [
          "3.625rem",
          {
            lineHeight: "5.375rem",
          },
        ],
        56: [
          "3.625rem",
          {
            lineHeight: "5.375rem",
          },
        ],
        40: [
          "2.5rem",
          {
            lineHeight: "3rem",
          },
        ],
        48: [
          "3rem",
          {
            lineHeight: "3.39rem",
          },
        ],
        36: [
          "2.25rem",
          {
            lineHeight: "2.625rem",
          },
        ],
        32: [
          "2rem",
          {
            lineHeight: "2.5rem",
          },
        ],
        28: [
          "1.75rem",
          {
            lineHeight: "2.25rem",
          },
        ],
        24: [
          "1.5rem",
          {
            lineHeight: "2rem",
          },
        ],
        22: [
          "1.375rem",
          {
            lineHeight: "2rem",
          },
        ],
        21: [
          "1.3125rem",
          {
            lineHeight: "1.875rem",
          },
        ],
        18: [
          "1.125rem",
          {
            lineHeight: "1.5rem",
          },
        ],
        17: [
          "1.0625rem",
          {
            lineHeight: "1.4875rem",
          },
        ],
        16: [
          "1rem",
          {
            lineHeight: "1.6875rem",
          },
        ],
        14: [
          "0.875rem",
          {
            lineHeight: "1.225rem",
          },
        ],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
           
      },
    },
  },
  plugins: [],
};
export default config;
