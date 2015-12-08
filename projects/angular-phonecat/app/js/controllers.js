var phonecatApp = angular.module(['phonecatApp'],[]);

// method 1

/*phonecatApp.controller('PhoneListCtrl',function  ($scope,$http) {
	$http.get('phones/phones.json').success(function  (data) {
		$scope.phones =data;
	});
	$scope.orderProp = 'age';
});*/


// method 2

/*function PhoneListCtrl ($scope,$http) {
	$http.get('phones/phones.json').success(function(data){
		$scope.phones = data;
	});
	$scope.orderProp = 'age';
}

PhoneListCtrl.$inject = ['$scope','$http'];


phonecatApp.controller('PhoneListCtrl',PhoneListCtrl);*/


// method 3

phonecatApp.controller('PhoneListCtrl',['$scope','$http',function  ($scope,$http) {
	
	$http.get('phones/phones.json').success(function  (data) {
		$scope.phones = data;
		// $scope.phones = data.splice(0, 5);

	});
	$scope.orderProp = 'age';
}]);




