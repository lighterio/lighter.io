require('docent')();

var app = module.exports = require('lighter')({
  configPath: 'config/${ENV}.json',
  processCount: 1,
  exposeGlobals: true,
  logger: [
    {transport: 'console', level: 'trace'},
    {transport: 'file', level: 'info', path: 'log/${YYYY}/${MM}/${DD}/lighter-${HH}:${NN}-${HOST}.log', zip: true}
  ]
});

app.work(function () {
  require('sly')(app);
});

app.addAssets('tags', [
  'node_modules/sly/tags'
]);

app.addAssets('scripts', [
  'node_modules/jquery/dist/jquery.js',
  'node_modules/codemirror/lib/codemirror.js',
  'node_modules/codemirror/mode/xml/xml.js',
  'node_modules/codemirror/mode/jade/jade.js',
  'node_modules/codemirror/mode/javascript/javascript.js',
  'node_modules/codemirror/mode/htmlmixed/htmlmixed.js',
  'node_modules/marked/lib/marked.js',
  'node_modules/lighter/node_modules/ltl/ltl.js',
  'node_modules/sly/scripts/sly-jymin.js',
  'node_modules/docent/scripts'
]);

app.addAssets('styles', [
  'node_modules/codemirror/lib/codemirror.css',
  'node_modules/codemirror/theme/blackboard.css'
]);

/*
if (app.isDev) {
  app.one(function () {
    var gen = require('docent/commands/gen');
    setInterval(function () {
      gen.run({});
    }, 5e3);
  });
}
*/
