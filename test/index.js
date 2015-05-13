var click = require('click');

describe('click', function() {

  it('should trigger a click event', function(done) {

    var el = document.createElement('a');
    el.addEventListener('click', function() {
      done();
    });

    click(el);

  });

});