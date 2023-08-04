module.exports = {
  content: [
    './assets/**/*.{scss,sass}',
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        'dark': '#00050B',
        'blue': '#0A72D4',
        'dark-blue': '#67829A',
        'white': '#fff',
        'gray': 'rgba(255, 255, 255, 0.08)',
      },
      backgroundImage: () => ({
        gradient: 'linear-gradient(315deg, rgba(51, 123, 190, 0.20) 0%, rgba(51, 123, 190, 0.00) 100%)',
      }),
      fontSize: {
        '2xs': '.675rem',
        'xs': '.75rem',
        'sm': '.875rem',
        'base': '1rem',
        'xl': '1.25rem',
        'label': '1rem',
        'sub-title': '1.5rem',
        'title': '4.5rem',
        'button': '3rem',
      },
      borderWidth: {
        '2xs': '0.5px',
        'xs': '1px',
        'sm': '2px',
        'md': '3px',
      },
    },
    screens: {
      'xs': '425px',
      'sm': '640px',
      'md': '768px',
      'lg': '960px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl': '1920px',
    },
    lineHeight: {
      none: 1,
      xs: 1.1,
      sm: 1.15,
      md: 1.2,
      lg: 1.3,
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        md: '1.5rem',
      },
      screens: {
        'sm': '100%',
        'md': '100%',
        'lg': '960px',
        'xl': '1280px',
        '2xl': '1536px',
        '3xl': '1920px',

      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
