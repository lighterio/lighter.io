#!/usr/bin/env node

var cli = require('commander');
var fs = require('fs');
var zPath = require.resolve('zeriousify').replace(/zeriousify\.js/, '');

cli
  .usage('[options] <module>')
  .option('-g, --github [github]', 'GitHub account under which this module will exist.')
  .option('-a, --author [author]', 'Name and email of the author, formatted as "First Last <email@domain.tld>".')
  .option('-d, --description [description]', 'Description of the module')
  .parse(process.argv);

var name = cli.args[0];
if (name) {
  fs.mkdir(name, function () {
    process.chdir(name);
    createEntry();
  });
}
else {
  name = process.cwd().replace(/^.*\//, '');
  createEntry();
}

function createEntry() {
  fs.exists(name + '.js', function (exists) {
    if (exists) {
      test();
    } else {
      var api = 'var api = module.exports;\n\n' +
        '/**\n' +
        ' * Expose the version to module users.\n' +
        ' * @type {string}\n' +
        ' */\n' +
        "api.version = require('./package.json').version;\n";
      fs.writeFile(name + '.js', api, function () {
        // Fake an API for the test.
        test();
      });
    }
  });
}

function test() {
  global.defaultApi = {version: '0.0.0'};
  global.describe = global.it = function (text, callback) {
    callback(function() {});
  };
  require('zeriousify').test(cli);
}
