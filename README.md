# click

Trigger a click event on a DOM element.

The `.click()` method isn't supported by PhantomJS so this method triggers a click event the old way.

## Installation

    component install nib-health-funds/click
    
## Usage

    var click = require('click');
    
    var el = document.querySelector('button');
    click(el);
    