(function(){
	var app = angular.module('app');

	var ctrl = function($scope) {
		$scope.example = {
			repeat: 0,
			hash: {}
		};
		$scope.makeHash = function() {
			var limit = parseInt($scope.example.repeat);
			$scope.example.hash = {};
			for(var i = 0; i <= limit; i++) {
				$scope.example.hash[i] = i + " bottles of beer on the wall!";
			}
		};
	};

	app.controller('ngRepeatExample',['$scope', ctrl]);
})();