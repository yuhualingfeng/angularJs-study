var phonecatControllers = angular.module(['phonecatControllers'],[]);

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

phonecatControllers.controller('PhoneListCtrl',['$scope','$http',function  ($scope,$http) {
	
	$http.get('phones/phones.json').success(function  (data) {
		$scope.phones = data;
		// $scope.phones = data.splice(0, 5);

	});
	$scope.orderProp = 'age';
}]);

phonecatControllers.controller('PhoneDetailCtrl',['$scope','$routeParams','$http',function($scope,$routeParams,$http){

$http.get('phones/'+$routeParams.phoneId+'.json').success(function(data){

	$scope.phone = data;

});
$scope.phoneId=$routeParams.phoneId;

}]);






