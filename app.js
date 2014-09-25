var lighter = require('lighter')({
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
  enableCluster: false
});

require('sly')();

var marked = require('./node_modules/ltl/node_modules/marked');
var hljs = require('highlight.js');

marked.setOptions({
  highlight: function (code) {
    return /\n/.test(code) ? hljs.highlightAuto(code).value : code;
  },
  anchorMin: 1
});

