module.exports = {

  index: function GET(request, response) {
    response.view('index');
  },

  aloha: function GET(request, response) {
    response.view('aloha', {project: 'Aloha', favicon: 'aloha'});
  },

  beams: function GET(request, response) {
    response.view('beams', {project: 'Beams', favicon: 'beams'});
  },

  cedar: function GET(request, response) {
    response.view('cedar', {project: 'Cedar', favicon: 'cedar'});
  },

  chug: function GET(request, response) {
    response.view('chug', {project: 'Chug', favicon: 'chug'});
  },

  d6: function GET(request, response) {
    response.view('d6', {project: 'D6', favicon: 'd6'});
  },

  gold: function GET(request, response) {
    response.view('gold', {project: 'Gold', favicon: 'gold'});
  },

  jymin: function GET(request, response) {
    response.view('jymin', {project: 'Jymin', favicon: 'jymin'});
  },

  lighter: function GET(request, response) {
    response.view('lighter', {project: 'Lighter', favicon: 'lighter'});
  },

  ltl: function GET(request, response) {
    response.view('ltl', {project: 'Ltl', favicon: 'ltl'});
  },

  ringer: function GET(request, response) {
    response.view('ringer', {project: 'Ringer', favicon: 'ringer'});
  },

  seattle: function GET(request, response) {
    response.view('seattle', {project: 'Seattle', favicon: 'seattle'});
  },

  shellify: function GET(request, response) {
    response.view('shellify', {project: 'Shellify', favicon: 'shellify'});
  },

  shield: function GET(request, response) {
    response.view('shield', {project: 'Shield', favicon: 'shield'});
  },

  sly: function GET(request, response) {
    response.view('sly', {project: 'Sly', favicon: 'sly'});
  },

  splode: function GET(request, response) {
    response.view('splode', {project: 'Splode', favicon: 'splode'});
  },

  thrust: function GET(request, response) {
    response.view('thrust', {project: 'Thrust', favicon: 'thrust'});
  },

  za: function GET(request, response) {
    response.view('za', {project: 'Za', favicon: 'za'});
  },

  zeriousify: function GET(request, response) {
    response.view('zeriousify', {project: 'Zeriousify', favicon: 'zeriousify'});
  }

};

// Hello
