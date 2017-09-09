const users = require('./usersSchema');
var E = exports;
  
E.getall = function(err,res, req){
     if(err) console.error('error us userApi.js error: '+err);

    users.find({name:'alon'},function(err,users){
        console.log('Found user..sending back to route..',users);
       person = users;
    })
    //return  personalbar.toJson();
    res.send(person);
}

