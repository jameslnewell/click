module.exports = function(el) {
  el.dispatchEvent(new MouseEvent('click'));
};