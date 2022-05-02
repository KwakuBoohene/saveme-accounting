module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          primary: "#689C7E",
          secondary: "#025928",
          tertiary: "#024C22C3",
          light: "#D6DCD9",
          third: "#7e9c8b",
        },
        gray: {
          "extra-light": "#F7F7F7",
          light: "#F8F8F8",
          text: "#787878",
          primary: "#00000029",
          secondary: "#707070",
          tertiary: "#696969",
          dark: "#363636",
          "dark-text": "#555555",
        },
      },
      animation: {
        "fade-in-point-5": "fadeIn 0.5s ease-in-out",
        "fade-in-point-7": "fadeIn 0.7s ease-in-out",
        "fade-in-1": "fadeIn 1s ease-in-out",
        "fade-in-3": "fadeIn 3s ease-in-out",
        "fade-in-5": "fadeIn 5s ease-in-out",
      },
      keyframes: (theme) => ({
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      }),
    },
  },
  plugins: [],
};
