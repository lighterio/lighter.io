var A = require('aloha');
var url = require('url');

var projects = [
  'aloha', 'beams', 'cedar', 'chug', 'd6', 'exam', 'gold',
  'jymin', 'lighter', 'ltl', 'ormy', 'plans', 'ringer',
  'seattle', 'shellify', 'shield', 'sly', 'splode', 'tat',
  'thrust', 'za', 'zeriousify'
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
