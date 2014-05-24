var Controller = require('lighter/lib/Controller');

module.exports = Controller.extend({

  index: function GET(request, response) {
    response.view('index');
  }

});
