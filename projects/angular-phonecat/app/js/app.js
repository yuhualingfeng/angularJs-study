var phoneApp = angular.module('phonecatApp',['ngRoute','phonecatControllers','phonecatFilters']);
phoneApp.config(['$routeProvider',function($routeProvider){
	$routeProvider.when('/phones',{
		templateUrl:'partials/phone-list.html',
		controller:'PhoneListCtrl'
	}).when('/phones/:phoneId',{
		templateUrl:'partials/phone-detail.html',
		controller:'PhoneDetailCtrl'
	}).otherwise({
		redirectTo:'/phones'
	});


}]);