# Ember spinner-button change log

## 0.2.0

An action can now be bound that the `onclick` attribute. This action will be invoked when the button is clicked:

``` handlebars
{{#spinner-button onclick=(action "saveForm") isSpinning=isSaving}}
  Save
{{/spinner-button}}
```

This should be preferred over binding a string to the `action` attribute.

## 0.1.0

Adds the following properties that can be set to customize the button:

* `disabled` (default: `false`): boolean value or function that specifies the `disabled` attribute.
* `title` (default: `null`): string or function that resolves to the `title` attribute.
