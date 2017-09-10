angular.module('ArticlesCtrl', [])
	.controller('ArticlesController',
	function ($scope, http) {
		//define helpers

			http.getCustomer('shani')
				.then(function (res) {
					$scope.user = res.data;
				}, function (error) {
					$scope.api = 'Unable to load user: ' + error.message;
				});

			http.Demo()
				.then(function (res) {
					$scope.api = res.data;
				}, function (error) {
					$scope.api = 'Unable to load all users: ' + error.message;
				});

	});