import hbs from 'htmlbars-inline-precompile';
import { test, moduleForComponent } from 'ember-qunit';

moduleForComponent('spinner-button', 'SpinnerButtonComponent', {
  integration: true
});

test('does not display a spinner when isSpinning is false', function (assert) {
  this.render(hbs`
    {{#spinner-button isSpinning=false}}
      Click me
    {{/spinner-button}}
  `);

  assert.equal(this.$('.spin-spinner').length, 0);
});

test('does display a spinner when isSpinning is true', function (assert) {
  this.render(hbs`
    {{#spinner-button isSpinning=true}}
      Click me
    {{/spinner-button}}
  `);

  assert.equal(this.$('.spin-spinner').length, 1);
});

test('sends the action when clicked when isSpinning is false', function (assert) {
  this.render(hbs`
    {{#spinner-button id="my_button" action='dummyAction' isSpinning=false}}
      Click me
    {{/spinner-button}}
  `);

  this.set('actions.dummyAction', () => {
    assert.ok(true, 'external Action was called!');
  });

  this.$('#my_button').click();
});

test('fires the action bound to onclick when clicked when isSpinning is false', function (assert) {
  this.set('actions.dummyAction', () => {
    assert.ok(true, 'external Action was called!');
  });
  
  this.render(hbs`
    {{#spinner-button id="my_button" onclick=(action 'dummyAction') isSpinning=false}}
      Click me
    {{/spinner-button}}
  `);

  this.$('#my_button').click();
});
