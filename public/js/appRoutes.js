angular.module('appRoutes', [])
.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})

		.when('/articles', {
			templateUrl: 'views/articles.html',
			controller: 'ArticlesController'
		})

		.when('/posts', {
			templateUrl: 'views/posts.html',
			controller: 'PostsController'	
		});

	$locationProvider.html5Mode(true);

}]);