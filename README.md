# Ember-spinner-button

Simple Ember spinner button component using [spin.js](http://fgnass.github.io/spin.js/).

[![Build Status](https://travis-ci.org/RSSchermer/ember-spinner-button.svg?branch=master)](https://travis-ci.org/RSSchermer/ember-spinner-button)

## Demo
Demo available [here](http://rsschermer.github.io/ember-spinner-button/).

## Installation

``` bash
ember install ember-spinner-button
ember generate ember-spinner-button
```

## Usage

Example:

``` handlebars
{{#spinner-button action="saveForm" isSpinning=isSaving}}
  Save
{{/spinner-button}}
```

The following properties should be set:

* `isSpinning`: a boolean value indicating whether or not the button is currently spinning.
* `action`: the action that will be send when the button is clicked while not currently spinning.

The following properties can be set to customize the spinner on a particular button:

* `lines` (default: `8`): the number of lines to draw.
* `length` (default: `4`): the length of each line.
* `width` (default: `3`): the line thickness.
* `radius` (default: `5`): the radius of the inner circle.
* `corners` (default: `1`): corner roundness (0..1).
* `rotate` (default: `0`): the rotation offset.
* `direction` (default: `1`): 1 for clockwise, -1 for counterclockwise.
* `color` (default: parent element text color): #rgb or #rrggbb or array of colors.
* `speed` (default: `1`): rounds per second.
* `trail` (default: `60`): afterglow percentage.
* `shadow` (default: `false`): whether to render a shadow.
* `hwaccel` (default: `false`): whether to use hardware acceleration.
* `top` (default: `'50%'`): top position relative to parent.
* `left` (default: `'50%'`): left position relative to parent.

If you want to change the defaults for all spinner buttons in your application, extend the component with your own
defaults:

```javascript
// app/components/spinner-button.js
import SpinnerButtonComponent from 'ember-spinner-button/components/spinner-button';

export default SpinnerButtonComponent.extend({
  length: 6,

  width: 2
});
```
