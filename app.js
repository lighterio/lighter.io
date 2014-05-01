var chug = require('chug');
var app = require('express')();
var log = console.log;
var port = 8888;

// TODO: Filter loads by file extension.
// TODO: Wrap a JavaScript asset.
// TODO: Allow CoffeeScript NOWRAP.

app.listen(port);
chug.setApp(app);
log('App listening at ' + port + '.');


chug('public')
	.route()
	.watch();


chug('views')
	.compile()
	.watch();

chug([
	'node_modules/jquery/dist/jquery.js',
	'node_modules/codemirror/lib/codemirror.js',
	'node_modules/codemirror/mode/xml/xml.js',
	'node_modules/codemirror/mode/jade/jade.js',
	'node_modules/codemirror/mode/javascript/javascript.js',
	'node_modules/codemirror/mode/htmlmixed/htmlmixed.js',
	'node_modules/marked/lib/marked.js',
	'node_modules/ltl/ltl.js',
	'scripts'])
	.compile()
	.watch()
	.concat('/all.js')
	.route()
	.then(function () {
		var locations = [];
		this.assets.forEach(function (asset) {
			locations.push(asset.location);
		});
		console.log('Script assets: ' + locations.join(', '));
		console.log('Scripts loaded.');
	});

 chug([
	'node_modules/codemirror/lib/codemirror.css',
	'node_modules/codemirror/theme/3024-night.css',
	'node_modules/codemirror/theme/base16-dark.css',
	'node_modules/codemirror/theme/blackboard.css',
	'node_modules/codemirror/theme/erlang-dark.css',
	'node_modules/codemirror/theme/lesser-dark.css',
	'node_modules/codemirror/theme/midnight.css',
	'node_modules/codemirror/theme/night.css',
	'node_modules/codemirror/theme/paraiso-dark.css',
	'node_modules/codemirror/theme/pastel-on-dark.css',
	'node_modules/codemirror/theme/tomorrow-night-eighties.css',
	'node_modules/codemirror/theme/twilight.css',
	'node_modules/codemirror/theme/xq-dark.css',
	'styles'
	])
	.compile()
	.watch()
	.concat('/all.css')
	.route()
	.then(function () {
		console.log('Styles loaded.');
	});