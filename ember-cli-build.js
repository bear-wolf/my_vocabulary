'use strict';
require('dotenv').config();
const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  const app = new EmberApp(defaults, {
    // Add options here
    sassOptions: {
      extension: "scss"
    }
  });

  return app.toTree();
};
