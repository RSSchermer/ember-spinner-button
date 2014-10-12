import Ember from 'ember';

export default Ember.Controller.extend({
  isBusy: false,

  actions: {
    makeBusy: function () {
      this.set('isBusy', true);
    }
  }
});
