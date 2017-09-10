const api = require('./models/usersApi');

module.exports = function (app) {
	// server routes ===========================================================
	// authentication routes
	// handle things like api calls

	app.get('/api/demo', api.getall);

	app.get('/api/demo/:name', function (req, res) {

		console.log('name requested is: ' + JSON.stringify(req.params.name));
		var u = api.getbyName(req,res,req.params.name);
		console.log('found: '+ JSON.stringify(u));
		res.send(u);
	});

	// frontend routes =========================================================
	// route to handle all angular requests
	app.get('*', function (req, res) {
		res.sendfile('./public/index.html');
	});

};