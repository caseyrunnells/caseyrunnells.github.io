var animateApp = angular.module('animateApp', ['ngRoute', 'ngAnimate']);

animateApp.config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'page-about.html',
            controller: 'mainController'
        })
        .when('/about', {
            templateUrl: 'page-about.html',
            controller: 'aboutController'
        })
        .when('/portfolio', {
            templateUrl: 'page-projects.html',
            controller: 'projectsController'
        })
        .when('/contact', {
            templateUrl: 'page-contact.html',
            controller: 'contactController'
        });

        $locationProvider.html5Mode(true);
});

animateApp.controller('mainController', function($scope) {
    $scope.pageClass = 'page-home';
});

animateApp.controller('aboutController', function($scope) {
    $scope.pageClass = 'page-about';
});

animateApp.controller('projectsController', function($scope) {
    $scope.pageClass = 'page-projects';
});

animateApp.controller('contactController', function($scope) {
    $scope.pageClass = 'page-contact';
});

