// Define application module
angular.module('immoApp', ['immoApp.services', 'immoApp.controllers', 'immoApp.filters', 'ui.bootstrap', 'ngRoute', 'ngSanitize']).config([
    '$routeProvider',
    function($routeProvider) {
        // Define routes
        $routeProvider
            .when('/', {
                templateUrl: 'partials/immobilien.html',
                controller: 'immobilienController'
            })
            .otherwise({ redirectTo: '/' });
    }
]);
