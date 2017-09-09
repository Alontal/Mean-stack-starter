const api = require('./models/usersApi');

module.exports = function (app) {
	// server routes ===========================================================
	// authentication routes
	// handle things like api calls

	app.get('/api/demo', api.getall);

	app.get('/api/demo/:name', function (req, res) {
		console.log(req.params.name);
		res.json(api.getbyName(req.params.name));
	});

	// frontend routes =========================================================
	// route to handle all angular requests
	app.get('*', function (req, res) {
		res.sendfile('./public/index.html');
	});

};