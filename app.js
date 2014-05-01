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
	'node_modules/codemirror/theme/blackboard.css',
	'styles'
	])
	.compile()
	.watch()
	.concat('/all.css')
	.route()
	.then(function () {
		console.log('Styles loaded.');
	});