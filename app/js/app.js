// Define application module
angular.module('immoApp', ['immoApp.services', 'immoApp.controllers', 'mobile-angular-ui', 'ngRoute']).
config(['$routeProvider', function($routeProvider) {
    // Define routes
    $routeProvider.when('/', {
            templateUrl: 'partials/immobilien.html',
            controller: 'immobilienController'
        })
        .otherwise({ redirectTo: '/' });
}]);