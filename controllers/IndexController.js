var projects = [
  'aloha', 'beams', 'cedar', 'chug', 'd6', 'exam', 'gold',
  'jymin', 'lighter', 'ltl', 'ringer', 'seattle', 'shellify',
  'shield', 'sly', 'splode', 'thrust', 'za', 'zeriousify'
];

var controller = module.exports = {
  index: function GET(request, response) {
    response.view('index', {repo: 'lighterio/lighter.io'});
  }
};

projects.forEach(function (key) {
  var name = key[0].toUpperCase() + key.substr(1);
  controller[key] = function GET(request, response) {
    app.views[key].toString();
    response.view(key, {project: name, repo: 'lighterio/' + key});
  };
});
