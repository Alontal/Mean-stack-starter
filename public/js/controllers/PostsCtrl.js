angular.module('PostsCtrl', [])
	.controller('PostsController', function ($scope, http) {

		$scope.tagline = 'Lets send cool messenger msg!';
		//send msg func
		$scope.send_message = function(msg){
			console.log(msg);
			//use http service to call fb api 
			http.fbSendMsg(msg)
			.then(function (res) {
				$scope.data = JSON.stringify( res.data);
				console.info(res.data);
			}, function (error) {
				$scope.api = 'send message failed ' + error.message;
			});
		}
	});