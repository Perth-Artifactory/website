const menu = require('./lib/menu.js');

module.exports = (phase, { defaultConfig }) => {
  return {
    env: {
      menu: menu.get('_pages'),
    },
  };
};
