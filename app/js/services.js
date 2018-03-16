// Define services
angular.module('immoApp.services', []).

// Properties service (READ-ONLY, PROMISE-BASED)
service('propertiesService', function($http, $q) {
    var deferred = $q.defer();
    $http.get('data/properties.json').success(function(data) {
        deferred.resolve(data);
    });
    this.get = function() {
        return deferred.promise;
    }
});