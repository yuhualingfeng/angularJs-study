var phonecatApp = angular.module(['phonecatApp'],[]);

phonecatApp.controller('PhoneListCtrl',function($scope){
	$scope.phones =[
	{'name':'Nexus S','snippet':'Fast Just go faster with Nexus S.','age':1},
	{'name':'Notorola XOOM\u2122 with wi-Fi','snippet':'The Next,Net zGeneration tablet.','age':2},
	{'name':'Notorola XOOM\u2122','snippet':'The next,Next Genration tablet','age':3}
	];
	$scope.orderProp = 'age';

	$scope.name = 'World'; 
});