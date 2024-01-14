const path = require('path');

module.exports = {
  i18n: {
    defaultLocale: 'en-US',
    locales: ['en-US', 'nb'],
    localeDetection: true,
    localePath: path.resolve('./public/locales'),
  },
};
