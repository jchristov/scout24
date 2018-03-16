// Define controllers
angular.module('immoApp.controllers', []).

// Immobilien controller
controller('immobilienController', function($scope, propertiesService) {
    var promise = propertiesService.get();
    promise.then(function(data) {
        $scope.properties = data.hits;
    });
});