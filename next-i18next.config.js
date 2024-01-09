const path = require('path');

module.exports = {
  i18n: {
    defaultLocale: 'en-US',
    locales: ['en-US', 'nb'],
    localeDetection: false,
    localePath: path.resolve('./public/locales'),
  },
};
