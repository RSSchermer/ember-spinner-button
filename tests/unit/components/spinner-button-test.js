import { test, moduleForComponent } from 'ember-qunit';
import startApp from '../../helpers/start-app';
import Ember from 'ember';

var App;

moduleForComponent('spinner-button', 'SpinnerButtonComponent', {
  needs: ['component:spin-spinner'],

  setup: function() {
    App = startApp();
  },

  teardown: function() {
    Ember.run(App, 'destroy');
  }
});

test('does not display a spinner when isSpinning is false', function () {
  var $component = this.append();

  equal($component.find('.spin-spinner').length, 0);
});

test('does display a spinner when isSpinning is true', function () {
  var component = this.subject();
  var $component = this.append();

  Ember.run(function(){
    component.set('isSpinning', true);
  });

  equal($component.find('.spin-spinner').length, 1);
});

test('sends the action when clicked when isSpinning is false', function () {
  var component = this.subject();

  var targetObject = {
    dummyAction: function(){
      ok(true, 'external Action was called!');
    }
  };

  Ember.run(function(){
    component.setProperties({ 'action': 'dummyAction', 'targetObject': targetObject });
  });

  Ember.run(function(){
    component.send('click');
  });
});
