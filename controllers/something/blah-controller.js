module.exports = {

  index: function GET(request, response) {
    response.json({hello: true});
  },

  thing: function GET(request, response) {
    response.json({thing: true});
  }

};
