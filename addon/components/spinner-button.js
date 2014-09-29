import Ember from 'ember';

export default Ember.Component.extend({
  attributeBindings: ['style'],

  tagName: 'button',

  classNames: ['spinner-button'],

  classNameBindings: ['spinning'],

  isSpinning: false,

  action: null,

  lines: 8,

  radius: 5,

  length: 4,

  width: 3,

  corners: 1,

  rotate: 0,

  direction: 1,

  speed: 1,

  trail: 60,

  shadow: false,

  hwaccel: false,

  color: null,

  left: '50%',

  top: '50%',

  style: 'position: relative;',

  actions: {
    click: function () {
      if (!this.get('isSpinning')) {
        this.sendAction();
      } else {
        if (this.get('action')) {
          this.sendAction(this.get('action'));
        }
      }
    }
  },

  maintainButtonDimensions: function () {
    if (this.get('isSpinning')) {
      this.set('style', 'position: relative; width: '+ this.$().outerWidth() +'px; height: '+ this.$().outerHeight() +
                        'px;');
    } else {
      this.set('style', null);
    }
  }.observes('isSpinning').on('didInsertElement')
});
