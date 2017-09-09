// grab the mongoose module
var mongoose = require('mongoose');
//Define a schema
var userSchema = mongoose.Schema({
	name: {type: String, default:'empty'},
	family: {type: String, default:'empty'},
});
module.exports = mongoose.model('users', userSchema, "myCollection");

// define our nerd model
// module.exports allows us to pass this to other files when it is called
// module.exports = mongoose.model('Users', {
// 	name: { type: String, default: '' },
// });
