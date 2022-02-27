module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        green:{
          primary:'#689C7E',
          secondary:'#025928',
          tertiary:'#024C22C3',
          light:'#D6DCD9',
          third:'#7e9c8b'
        },
        gray:{
          'extra-light':'#F7F7F7',
          light:'#F8F8F8',
          text:'#787878',
          primary:'#00000029',
          secondary:'#707070',
          tertiary:'#696969',
          dark:'#363636',
          'dark-text':'#555555'
        }
      }
    },
  },
  plugins: [],
}
