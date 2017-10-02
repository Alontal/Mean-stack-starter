angular.module('HttpService', [])
    .factory('http', ['$http', function($http) {

		var urlBase = '/api/demo';
		var H = {};

		H.Demo = function () {
			return $http.get(urlBase);
		};

		H.getCustomer = function (id) {
			return $http.get(urlBase + '/' + id);
		};
		//call fb api on server
		H.fbSendMsg  = function(msg){
			return $http.get('/api/fb-messanger/' + msg)
		}

		H.insertCustomer = function (cust) {
			return $http.post(urlBase, cust);
		};

		H.updateCustomer = function (cust) {
			return $http.put(urlBase + '/' + cust.ID, cust)
		};

		H.deleteCustomer = function (id) {
			return $http.delete(urlBase + '/' + id);
		};

		H.getOrders = function (id) {
			return $http.get(urlBase + '/' + id + '/orders');
		};

		return H;

}]);