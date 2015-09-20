import Ember from 'ember';

export default Ember.Controller.extend({
  isBusy: false,

  actions: {
    makeBusy() {
      this.set('isBusy', true);
    }
  }
});
