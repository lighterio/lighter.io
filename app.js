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


chug('views')
	.compile()
	.then(function () {
		console.log('Views loaded.');
	})
	.watch();

chug('scripts')
	.compile()
	.watch()
	.concat('/all.js')
	.route()
	.then(function () {
		console.log('Scripts loaded.');
	});

chug([
	'styles/bootstrap.css',
	'styles/font-awesome.css',
	'styles/layout.styl'
	])
	.compile()
	.watch()
	.concat('/all.css')
	.route()
	.then(function () {
		console.log('Styles loaded.');
	});