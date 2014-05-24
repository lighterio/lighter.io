var lighter = require('lighter')({
	httpPort: 8888,
	scripts: {
		'/all.js': [
			'node_modules/jquery/dist/jquery.js',
			'node_modules/codemirror/lib/codemirror.js',
			'node_modules/codemirror/mode/xml/xml.js',
			'node_modules/codemirror/mode/jade/jade.js',
			'node_modules/codemirror/mode/javascript/javascript.js',
			'node_modules/codemirror/mode/htmlmixed/htmlmixed.js',
			'node_modules/marked/lib/marked.js',
			'node_modules/ltl/ltl.js',
			'scripts'
		],
		'/sly.js': [
			'node_modules/lighter/node_modules/jymin/jymin.js',
			'node_modules/lighter/node_modules/beams/scripts/beams-jymin.js',
			'node_modules/lighter/scripts/lighter-beams.js',
			'node_modules/sly/sly.js'
		]
	},
	styles: {
		'/all.css': [
			'node_modules/codemirror/lib/codemirror.css',
			'node_modules/codemirror/theme/blackboard.css',
			'styles'
		],
		'/sly.css': [
			'node_modules/sly/sly.less'
		]
	}
});
