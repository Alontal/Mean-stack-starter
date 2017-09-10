const S = require('../schemas');
var E = module.exports;

E.getall = function (req, res) {
    console.log(req.params);
    //if(err) console.error('error us userApi.js error: '+err);
    S.users.find({}, function (err, users) {
        console.log('got all users..', users);
        person = users;
    })
    res.send(person);
}

E.getbyName = function (req,res,name) {
      S.users.findOne({ name: name }, function (err, user) {
        if (err) console.log('find by name failed');
        u  = user;
        //console.log('\n got 1 user on server '+ u[0]);
    })
    return u;
}

