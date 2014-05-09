var lighter = require('lighter');
lighter.setHttpPort(8888);

exports.version = require('./package.json').version;

lighter.addScripts([
	'node_modules/jquery/dist/jquery.js',
	'node_modules/codemirror/lib/codemirror.js',
	'node_modules/codemirror/mode/xml/xml.js',
	'node_modules/codemirror/mode/jade/jade.js',
	'node_modules/codemirror/mode/javascript/javascript.js',
	'node_modules/codemirror/mode/htmlmixed/htmlmixed.js',
	'node_modules/marked/lib/marked.js',
	'node_modules/ltl/ltl.js'
]);

lighter.addStyles([
	'node_modules/codemirror/lib/codemirror.css',
	'node_modules/codemirror/theme/blackboard.css',
]);

