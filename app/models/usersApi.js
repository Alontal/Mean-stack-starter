const S = require('../schemas');
var E = exports;

E.getall = function (req, res) {
    console.log(req.params);
    //if(err) console.error('error us userApi.js error: '+err);
    S.users.find({}, function (err, users) {
        console.log('Found user..sending back to route..', users);
        person = users;
    })
    //return  personalbar.toJson();
    res.send(person);
}

E.getbyName = function (name) {
    return S.users.find({ name: name }, function (err, user) {
        if (err) console.log('find by name failed');

        console.log('user found :' + user);
        return  user;
    })

}

