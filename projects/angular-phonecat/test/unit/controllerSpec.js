// describe('PhoneListCtrl',function  () {

// 	it('shoud create "phones" model width 3 phones',function(){

// 		var scope ={};
// 		ctrl = new PhoneListCtrl(scope);
// 		expect(scope.phones.length).toBe(3);
// 	});
// });

describe('PhoneCat controllers',function(){


describe('PhoneListCtrl',function(){

	var scope, ctrl;
	beforeEach(module('phonecatApp'));

	beforeEach(inject(function($controller){
		scope = {};
		ctrl = $controller('PhoneListCtrl',{$scope:scope});
	}));

	it('shoud create "phones" model width 3 phones',function(){
		expect(scope.phones.length).toBe(3);
	});

	it('should set the default value of orderProp to be age',function(){

	  expect(scope.orderProp).toBe('age');

	});

});


});

