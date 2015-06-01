var A = require('aloha');
var url = require('url');

var projects = [
  'aloha', 'beams', 'cedar', 'chug', 'exam',
  'gold', 'jymin', 'lighter', 'ltl', 'omen', 'ormy',
  'plans', 'porta', 'seattle', 'shellify', 'shield',
  'sly', 'splode', 'thrust', 'za', 'zeriousify'
];

module.exports = {

  init: function () {
    var self = this;
    projects.forEach(function (key) {
      var name = key[0].toUpperCase() + key.substr(1);
      self[key] = function GET(request, response) {
        response.view(key, {name: name, repo: key});
      };
    });
  },

  index: function GET(request, response) {
    response.view('index', {repo: 'lighter.io'});
  }

};
