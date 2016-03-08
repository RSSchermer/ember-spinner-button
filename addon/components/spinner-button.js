import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'button',

  classNames: ['spinner-button'],

  classNameBindings: ['spinning'],

  attributeBindings: [ 'disabled', 'title'],

  disabled: false,

  title: null,

  isSpinning: false,

  action: null,

  onclick: null,

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

  setPositionToRelative: Ember.on('didInsertElement', function () {
    this.$().css('position', 'relative');
  }),

  maintainButtonDimensions: Ember.on('didInsertElement', Ember.observer('isSpinning', function () {
    if (this.get('isSpinning')) {
      this.$().css({
        'width': this.$().outerWidth() +'px',
        'height': this.$().outerHeight() +'px'
      });
    } else {
      this.$().css({
        'width': '',
        'height': ''
      });
    }
  })),

  click() {
    if (!this.get('isSpinning')) {
      if (this.get('action')) {
        this.sendAction();
      }

      if (typeof this.get('onclick') === 'function') {
        this.get('onclick')();
      }
    }
  }
});
