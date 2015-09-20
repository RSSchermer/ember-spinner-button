import { test, moduleForComponent } from 'ember-qunit';
import Ember from 'ember';

moduleForComponent('spinner-button', 'SpinnerButtonComponent', {
  needs: ['component:spin-spinner']
});

test('does not display a spinner when isSpinning is false', function (assert) {
  let $component = this.append();

  assert.equal($component.find('.spin-spinner').length, 0);
});

test('does display a spinner when isSpinning is true', function (assert) {
  let component = this.subject();
  let $component = this.append();

  Ember.run(() => {
    component.set('isSpinning', true);
  });

  assert.equal($component.find('.spin-spinner').length, 1);
});

test('sends the action when clicked when isSpinning is false', function (assert) {
  let component = this.subject();
  let $component = this.append();

  let targetObject = {
    dummyAction: () => {
      assert.ok(true, 'external Action was called!');
    }
  };

  Ember.run(() => {
    component.setProperties({ 'action': 'dummyAction', 'targetObject': targetObject });
  });

  Ember.run(() => {
    $component.click();
  });
});
