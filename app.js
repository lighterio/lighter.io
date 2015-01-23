require('docent')();

var App = module.exports = require('lighter')({
  configPath: "config/${ENV}.json",
  processCount: 4,
  exposeGlobals: true,
  logger: [
    {transport: 'console', level: 'trace'},
    {transport: 'file', level: 'info', path: 'log/${YYYY}/${MM}/${DD}/lighter-${HH}:${NN}-${HOST}.log', zip: true}
  ],
  ring: {},
  scripts: {
    '/a.js': [
      'node_modules/jquery/dist/jquery.js',
      'node_modules/codemirror/lib/codemirror.js',
      'node_modules/codemirror/mode/xml/xml.js',
      'node_modules/codemirror/mode/jade/jade.js',
      'node_modules/codemirror/mode/javascript/javascript.js',
      'node_modules/codemirror/mode/htmlmixed/htmlmixed.js',
      'node_modules/marked/lib/marked.js',
      'node_modules/lighter/node_modules/ltl/ltl.js',
      'node_modules/lighter/node_modules/jymin/plugins/md5.js',
      'node_modules/docent/scripts',
      'pack:scripts'
    ],
    '/sly.js': [
      'node_modules/lighter/node_modules/jymin/jymin.js',
      'node_modules/lighter/node_modules/jymin/plugins/is-down.js',
      'node_modules/lighter/node_modules/beams/scripts/beams-jymin.js',
      'node_modules/lighter/scripts/lighter-beams.js',
      'node_modules/sly/scripts/sly.js'
    ]
  },
  styles: {
    '/a.css': [
      'node_modules/codemirror/lib/codemirror.css',
      'node_modules/codemirror/theme/blackboard.css',
      'styles'
    ],
    '/sly.css': [
      'node_modules/sly/styles/sly.css'
    ]
  },
  watchPaths: [
    'node_modules/aloha',
    'node_modules/beams',
    'node_modules/cedar',
    'node_modules/chug',
    'node_modules/lighter'
  ]
});

App.work(function () {
  require('sly')();
});

if (App.isDev) {
  App.one(function () {
    var gen = require('docent/commands/gen');
    setInterval(function () {
      gen.run({});
    }, 5e3);
  });
}

var accessLog = require('cedar')([
  {transport: 'console'},
  {transport: 'file', path: 'log/access_${YYYY}-${MM}-${DD}_${HOST}.log', after: 'tar -cf ${PATH}.gz ${PATH};rm ${PATH}'}
]);
