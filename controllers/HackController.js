module.exports = {
  index: function GET(request, response) {
    response.view('talks/seattlejs-hack-night', {theme: '/talks/tune.css'});
  }
};
