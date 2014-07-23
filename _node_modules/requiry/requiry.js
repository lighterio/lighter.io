var logger = console;
var requiry = module.exports = {
  setLogger: function (value) {
    logger = value;
  },
  enable: function () {}
};

// Only continue if we're in dev mode.
if (process.env.NODE_ENV == 'dev') {

  var sh = require('execSync');
  var Module = require('module');
  var nativeLoad = Module._load;

  var requiryLoad = function (path) {
    if (path.indexOf('/') > -1) {
      return nativeLoad.apply(Module, arguments);
    }
    try {
      return nativeLoad.apply(Module, arguments);
    }
    catch (e) {
      logger.error(e.stack);
      if (e.code == 'MODULE_NOT_FOUND') {
        return install.apply(requiry, arguments);
      }
      else {
        throw e;
      }
    }
  };

  var install = function (name, parent, isMain, error) {
    logger.warn('Trying to install "' + name + '".');
    var cwd = process.cwd();
    var result = sh.exec('npm install --save ' + name);
    logger.log(result.stdout);
    /* istanbul ignore else */
    if (result.code === 0) {
      return nativeLoad.apply(Module, arguments);
    }
    else {
      /* istanbul ignore next */
      throw error;
    }
  };

  requiry.enable = function (turnOn) {
    turnOn = turnOn || (typeof turnOn == 'undefined');
    Module._load = turnOn ? requiryLoad : nativeLoad;
  };

  requiry.enable();

}
