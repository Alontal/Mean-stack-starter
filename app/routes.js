const api = require('./models/usersApi');
const util = require('./models/util');
const fb = require('./models/fb');

module.exports = function (app) {
	// server routes ===========================================================
	// authentication routes
	// handle things like api calls


	app.get('/api/fb-messanger/:msg', function(req,res){
		console.log(req.params);
		util.logger(req.params.msg);


		res.send('i got this from client: '+ req.params.msg);
	})



	//get all users
	app.get('/api/demo', api.getall);

	//get user by name api
	app.get('/api/demo/:name', function (req, res) {
		console.log('name requested is: ' + JSON.stringify(req.params.name));
		var u = api.getbyName(req,res,req.params.name);
		console.log('found: '+ JSON.stringify(u));
		res.send(u);
	});
	
	app.get('/404', function (req, res) {
		res.send('404');
	});
	// frontend routes =========================================================
	// route to handle all angular requests
	app.get('*', function (req, res) {
		res.sendfile('./public/index.html');
	});

};