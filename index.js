module.exports = function(el) {
  var event;

  try {
    event = new MouseEvent('click');
  } catch (err) {
    event = document.createEvent('MouseEvent');
    event.initMouseEvent('click');
  }

  el.dispatchEvent(event);

};