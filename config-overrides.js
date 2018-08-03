/* eslint-disable no-param-reassign, import/no-extraneous-dependencies */

const rewireCssModules = require('react-app-rewire-css-modules');

module.exports = function override(config, env) {
  config = rewireCssModules(config, env);
  return config;
};
/* eslint-enable no-param-reassign, import/no-extraneous-dependencies */
