var Controller = require('lighter/lib/Controller');

module.exports = Controller.extend({

	index: function GET(request, response) {
		response.writeHead(200, {'content-type': 'text/html'});
		response.end('I am the AdCampaigns controller');
	},

	blah: function POST(request, response) {
		if (request.method == 'POST') {
			response.writeHead(200, {'content-type': 'text/html'});
			response.end('YOU POSTED');
		}
		if (request.method == 'POST') {
			response.writeHead(200, {'content-type': 'text/html'});
			response.end('YOU POSTED');
		}
	}

});