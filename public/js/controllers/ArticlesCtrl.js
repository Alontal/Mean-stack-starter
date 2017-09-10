angular.module('ArticlesCtrl', [])
	.controller('ArticlesController',
	function ($scope, http) {
		//define helpers
		$scope.a = {};

		$scope.a.search = function (txt) {
			http.getCustomer(txt)
				.then(function (res) {
					$scope.user = res.data;
				}, function (error) {
					$scope.api = 'Unable to load user: ' + error.message;
				});
		}
		
		http.Demo()
			.then(function (res) {
				$scope.api = res.data;
			}, function (error) {
				$scope.api = 'Unable to load all users: ' + error.message;
			});
	});