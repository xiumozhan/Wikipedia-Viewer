wikiApp.directive('wikiResult', function() {
    return {
        restrict: 'E',
        templateUrl: 'directives/wikiResult.html',
        replace: true,
        controller: 'resultController',
        scope: {
            result: '=',
            cleaning: '='
        }
    }
})
