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

phonecatControllers.controller('PhoneListCtrl',['$scope','Phone',function  ($scope,Phone) {
	
/*	$http.get('phones/phones.json').success(function  (data) {
		$scope.phones = data;
		// $scope.phones = data.splice(0, 5);

	});*/

	$scope.phones = Phone.query();
	$scope.orderProp = 'age';
}]);

phonecatControllers.controller('PhoneDetailCtrl',['$scope','$routeParams','Phone',function($scope,$routeParams,Phone){


// $scope.phone = Phone.get({phoneId:$routeParams.phoneId},function(phone){
// 	$scope.mainImageUrl = phone.images[0];

// });

$scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
    $scope.mainImgUrl = phone.images[0];
});

$scope.phoneId=$routeParams.phoneId;

$scope.setImg = function (img){

	$scope.mainImgUrl = img;
}

}]);






