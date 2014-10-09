require('docent')();

require('lighter')({
  configPath: "config/${ENV}.json",
  logger: [
    {transport: 'console', level: 'log', worker: 0},
    {transport: 'file', level: 'info', pattern: 'log/YYYY/MM/DD/lighterio-HOST-WORKER.log'}
  ],
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
      'scripts'
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

app.work(function () {
  require('sly')();
});

if (app.isDev) {
  var gen = require('docent/commands/gen');
  setInterval(function () {
    gen({});
  }, 1e3);
}
