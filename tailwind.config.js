/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xxs: "375px",
      xs: "425px",
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      xxl: "1400px",
    },

    container: {
      padding: "12px",
      center: true,
      screens: {
        sm: "600px",
        md: "728px",
        lg: "984px",
        xl: "1240px",
        xxl: "1496px",
      },
    },

    colors: {
      transparent: "transparent",
      background: {
        1: "#FFF",
        white: {
          70: "rgba(255, 255, 255, 0.7)",
        },
        green: "#5BD4A9",
        red: "#E35376",
        yellow: "#E6C149",
        "black-1": "#1C1D20",
        "black-2": "#292929",
      },
      stroke: "#E1E6EF",
      primary: {
        1: "#fffdf0",
        2: "#fff8cc",
        3: "#fff0a3",
        4: "#f2d974",
        5: "#e6c149",
        6: "#d8a722",
        7: "#b38314",
        8: "#8c6008",
        9: "#664101",
        10: "402600",
      },
      secondary: {
        "neutral-color-200-icon": "#C8C8C8",
      },
      neutral: {
        1: "#FFF",
        2: "#FAFAFA",
        3: "#F5F5F5",
        4: "#F0F0F0",
        5: "#D9D9D9",
        6: "#BFBFBF",
        7: "#8C8C8C",
        10: "#262626",
        11: "#595959",
        12: "rgba(217, 217, 217, 0.60)",
      },
      character: {
        "title-85": "rgba(0, 0, 0, 0.85)",
        "disabled-placeholder-25": "rgba(0, 0, 0, 0.25)",
        "secondary-45": "rgba(0, 0, 0, 0.45)",
        "primary-inverse": "#FFF",
        "primary-85": "rgba(0, 0, 0, 0.85)",
        danger: "#FF4D4F",
        "danger-o-15": "rgba(244, 106, 106, 0.15)",
        success: "#52C41A",
        warning: "#FAAD14",
      },
      divider: "#F0F0F0",
      "divider-1": "rgba(0, 0, 0, 0.06)",
      green: {
        1: "#5BD4A9",
      },
      pink: {
        1: "#E35376",
      },
      black: {
        1: "#110A28",
        2: "#000",
      },
      paragraph: "#6C7084",
      "tooltip-75": "rgba(0, 0, 0, 0.75)",
    },

    fontSize: {
      "heading-1": ["38px", { lineHeight: "calc(46/38)", fontWeight: 400 }],
      "heading-2": ["30px", { lineHeight: "calc(40/30)", fontWeight: 400 }],
      "heading-3": ["24px", { lineHeight: "calc(32/24)", fontWeight: 400 }],
      "heading-4": ["20px", { lineHeight: "calc(28/20)", fontWeight: 400 }],
      "heading-5": ["16px", { lineHeight: "calc(24/16)", fontWeight: 400 }],

      "body-regular": ["14px", "calc(22/14)"],
      "body-md": ["14px", { lineHeight: "calc(22/14)", fontWeight: 500 }],
      "body-strong": ["14px", { lineHeight: "calc(22/14)", fontWeight: 700 }],

      "footnote-desc": ["12px", "calc(20/12)"],
    },

    extend: {
      boxShadow: {
        "elevation-1": "0px 5px 15px 0px rgba(0, 0, 0, 0.15);",
        "elevation-3": "0px 10px 30px 0px rgba(0, 0, 0, 0.11);",
        "elevation-5": " 0px 15px 60px 0px rgba(0, 0, 0, 0.12);",
        "elevation-6": "0px 10.26257px 30.78772px 0px rgba(0, 0, 0, 0.11);",
        like: "0px 10px 20px 0px rgba(18, 38, 63, 0.03)",

        "p-50": "0px 4px 10px 0px rgba(0, 0, 0, 0.50)",
      },
      lineHeight: {},
      cursor: {},
      backdropBlur: {},
      zIndex: {
        header: 10,
        swipeBanner: 5,
        dropdown: 6,
      },
    },
  },
  plugins: [
    ({ addComponents }) => {
      addComponents({
        ".container": {
          maxWidth: "100%",
          "@screen sm": {
            maxWidth: "540px",
          },
          "@screen md": {
            maxWidth: "720px",
          },
          "@screen lg": {
            maxWidth: "960px",
          },
          "@screen xl": {
            maxWidth: "1140px",
          },
          "@screen xxl": {
            maxWidth: "1320px",
          },
        },
      });
    },
  ],
};
