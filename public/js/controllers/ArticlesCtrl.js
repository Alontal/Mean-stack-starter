angular.module('ArticlesCtrl', [])
	.controller('ArticlesController' ,
	function ($scope,http) {
		//define helpers

		getDemo();
		function getDemo() {
			http.Demo()
				.then(function (res) {
					$scope.api = res.data;
				}, function (error) {
					$scope.api = 'Unable to load customer data: ' + error.message;
				});
		}


	});