// grab the mongoose module
var mongoose = require('mongoose');

//Define S to hold all schemas
var S = {};

//Define user schema
var userSchema = mongoose.Schema({
	name: {type: String, default:'empty'},
	family: {type: String, default:'empty'},
});
S.users = mongoose.model('users', userSchema, "myCollection"); //add user shecma to S

//return S as all schemas we define 
module.exports = S;

// define our nerd model
// module.exports allows us to pass this to other files when it is called
// module.exports = mongoose.model('Users', {
// 	name: { type: String, default: '' },
// });
