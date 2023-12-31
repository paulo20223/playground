export default () => ({
  pluralizationRules: {
    ru(choice) {
      if (choice === 0) {
        return 0
      }

      choice = Math.abs(choice) % 100
      const n1 = choice % 10
      if (choice > 10 && choice < 20) {
        return 3
      }
      if (n1 > 1 && n1 < 5) {
        return 2
      }
      if (n1 === 1) {
        return 1
      }
      return 3
    },
  },
  datetimeFormats: {
    'ru-Ru': {
      onlyMonth: {
        month: 'long',
      },
      short: {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      },
    },
    'en-US': {
      onlyMonth: {
        month: 'long',
      },
    },
  },
})
