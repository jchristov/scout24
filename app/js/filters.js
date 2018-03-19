// Define filters
angular.module('immoApp.filters', []).filter('isNotOlderThanDays', function() {
    return function(strDate, numDays) {
        const now = new Date();
        const date = new Date(strDate);
        return now - date <= numDays * 24 * 60 * 60 * 1000;
    };
});
