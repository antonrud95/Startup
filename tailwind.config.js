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
         '5px': '5px'
       },
       textColor: {
         'purple': '#8D448B',
         'main': '#02073E'
       },
       padding: {
         13: '13px',
         25: '25px'
       },
       margin: {
        xl: '48px'
       },
       letterSpacing: {
         'button': '-0.16px'
       },
       borderColor: {
        'purple': '#8D448B'
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
