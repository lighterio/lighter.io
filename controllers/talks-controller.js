module.exports = {

  speed: function GET(request, response) {
    response.view('talks/speed');
  },

  awc: function GET(request, response) {
    response.view('talks/awc');
  },

  import: function GET(request, response) {
    response.view('talks/import');
  }

};
