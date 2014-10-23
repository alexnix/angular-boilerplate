var app  = angular.module("app", ['ngRoute', 'appConstrollers']);

app.config(['$routeProvider', function($routeProvider){
	$routeProvider.
        when('/cat', {
            templateUrl: 'templates/cat.html',
            controller: 'tomCtrl'
        }).
        when('/mouse', {
            templateUrl: 'templates/mouse.html',
            controller: 'jerryCtrl'
        }).
        when('/', {
        	templateUrl: 'templates/home.html'
        }).
        otherwise({
            templateUrl: 'templates/404.html',
        });
}]);

var appConstrollers = angular.module("appConstrollers", []);

appConstrollers.controller("tomCtrl", function( $scope ){
	$scope.animal = "Tom";
});

appConstrollers.controller("jerryCtrl", function( $scope ){
	$scope.animal = "Jerry";
});