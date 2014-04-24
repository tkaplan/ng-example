describe('ngRepeatExample Controller', function() {
	var ctrl, scope;

	beforeEach(inject(function($injector) {
		var $controller = $injector.get('$controller');
		var $rootScope = $injector.get('$rootScope');
		scope = $rootScope.$new();
		ctrl = $controller('ngRepeatExample', {'$scope': scope });
	}));

	describe('scope.makeHash', function() {
		it('should add more beer to the hash', function(){
			// var testhash = {
			// 	0: "0 bottles of beer on the wall!",
			// 	1: "1 bottles of beer on the wall!"
			// };
			// scope.example.repeat = 1;
			// scope.makeHash();
			// expect(scope.example.hash).toEqual();
		});
	});
});