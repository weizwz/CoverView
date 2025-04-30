module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx,css}', './src/*.{js,jsx,ts,tsx,css}'],
  theme: {
    extend: {
      fontFamily: {
        default: ['system-ui', 'sans-serif'],
        syst: ['Noto Serif CJK HK', 'sans-serif'],
        syht: ['Noto Sans CJK SC', 'sans-serif'],
        xwwk: ['LXGW WenKai GB', 'sans-serif'],
        Inter: ['Inter', 'sans-serif'],
        Poppins: ['Poppins', 'sans-serif'],
        Anek: ['Anek Latin', 'sans-serif'],
        Nunito: ['Nunito', 'sans-serif']
      }
    }
  },
  plugins: []
}
