angular.module('login', [])
	.directive('optIn', function () {
		return {
			restrict: 'E',
			templateUrl: 'login.html',
			transclude: true,
			replace: false
		}
	});