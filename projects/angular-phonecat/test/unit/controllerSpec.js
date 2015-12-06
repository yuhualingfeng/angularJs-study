// describe('PhoneListCtrl',function  () {

// 	it('shoud create "phones" model width 3 phones',function(){

// 		var scope ={};
// 		ctrl = new PhoneListCtrl(scope);
// 		expect(scope.phones.length).toBe(3);
// 	});
// });

describe('PhoneListCtrl',function(){

	beforeEach(module('phonecatApp'));
	it('shoud create "phones" model width 3 phones',inject(function($controller){
		var scope = {};
		ctrl = $controller('PhoneListCtrl',{$scope:scope});
		expect(scope.phones.length).toBe(3);
		expect(scope.name).toBe('World');
	}));

});