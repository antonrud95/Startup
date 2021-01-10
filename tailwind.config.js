module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        sm: '8px',
        md: '16px',
        lg: '35px',
        xl: '48px',
       },
       borderRadius: {
         '5px': '5px',
         '8px': '8px'
       },
       textColor: {
         'purple': '#8D448B',
         'main': '#02073E',
         'grey': '#566272'
       },
       padding: {
         8: '8px',
         13: '13px',
         20: '20px',
         25: '25px',
         42: '42px',
         110: '110px',
         150: '150px',
         200: '200px'
       },
       margin: {
        xxs: '10px',
        xs: '20px',
        sm: '30px',
        xl: '48px',
        xxl: '70px'
       },
       letterSpacing: {
         'button': '-0.16px'
       },
       borderColor: {
        'purple': '#8D448B'
       },
       backgroundColor: {
         'hero': '#F6F8FB',
         'purple': '#8D448B'
       },
       height: {
         xl: '55px',
         md: '28px'
       },
       boxShadow: {
         'input': '0px 10px 50px rgba(48, 98, 145, 0.08)'
       },
       maxWidth: {
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        580: '580px',
        100: '100px'
       },
       maxHeight: {
         28: '28px'
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
