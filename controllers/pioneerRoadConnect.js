angular.module("pioneerRoadConnect", ["ngRoute"])
    .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

        // $locationProvider.html5Mode(true);

        $routeProvider.when("/", {
            templateUrl: "/views/home.html"
        });

        $routeProvider.when("/friends", {
            templateUrl: "/views/friends-main.html"
        });

        $routeProvider.when("/places", {
            templateUrl: "/views/places-main.html"
        });

        $routeProvider.when("/member", {
            templateUrl: "/views/member-main.html"
        });
    }]);