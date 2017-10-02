var FBMessenger = require('fb-messenger')
var messenger = new FBMessenger('EAAEiyTDB6H8BACnhH1kKiE58UEZCMZAVRGfsJgkxkZCefZA6ecz2u2iOKTfZAQD9kLRhPJke0ElAF2MlTPjxgwt21VUdfqSkOEGcZBXqZCJvhTBFzFosBk2vZBx542GRsj6x1369gzhmhVumY2oyC1fvszlVGQa71yYY04LNsNZCRsAZDZD')
var E = module.exports;

E.test = function(){

    // messenger.sendTextMessage('https://www.facebook.com/alon.tal.90', 'Hello');

    // not sure what id goes in here 
    messenger.sendTextMessage('https://www.facebook.com/alon.tal.90', 'Hello', function (err, body) {
        if(err) return console.error(err)
        console.log(body)
      })
}