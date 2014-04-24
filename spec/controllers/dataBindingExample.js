describe('dataBindingExample Controller', function() {
	var ctrl, scope;

	beforeEach(inject(function($injector) {
		var $controller = $injector.get('$controller');
		var $rootScope = $injector.get('$rootScope');
		scope = $rootScope.$new();
		ctrl = $controller('dataBindingExample', {'$scope': scope });
	}));

});