module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      tablet: '640px',
      laptop: '1024px',
      desktop: '1280px',
      backgroundImage: () => ({
        'cristian-background-image': "url('https://storage.googleapis.com/cristian-poley-webs.appspot.com/iam.webp')"
      })
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
