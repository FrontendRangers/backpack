var Remarkable = require('remarkable');
var md = new Remarkable();

module.exports = function(text) {
  return md.render(text);
}
