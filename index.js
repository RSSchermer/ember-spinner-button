/* jshint node: true */
'use strict';
var path = require('path');

module.exports = {
  name: 'ember-spinner-button',

  included: function(app) {
    this._super.included.apply(this, arguments);

    /* This duplication of ember-spin-spinner's imports here is currently necessary,
     * until https://github.com/ember-cli/ember-cli/issues/3718 is resolved.
     */
    var spinPath = path.join(app.bowerDirectory, 'spin.js');

    app.import(path.join(spinPath, 'spin.js'));
    app.import(path.join(spinPath, 'jquery.spin.js'));
  }
};
