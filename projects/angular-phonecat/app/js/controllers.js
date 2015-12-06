var phonecatApp = angular.module(['phonecatApp'],[]);

phonecatApp.controller('PhoneListCtrl',function($scope){
	$scope.phones =[
	{'name':'Nexus S','snippet':'Fast Just go faster with Nexus S.'},
	{'name':'Notorola XOOM with wi-Fi','snippet':'The Next,Net zGeneration tablet.'},
	{'name':'Notorola XOOM','snippet':'The next,Next Genration tablet'}
	];

	$scope.name = 'World'; 
});