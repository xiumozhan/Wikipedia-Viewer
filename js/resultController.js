wikiApp.controller('resultController', ['$scope', function($scope) {

    var defaultThumbnail = 'https://upload.wikimedia.org/wikipedia/commons/e/e3/Nuvola_wikipedia_icon.png';

    if($scope.result.thumbnail === undefined) {
        $scope.result.thumbnail = {
            source: defaultThumbnail
        };
    }

    $scope.emptyDescription = function() {
        return $scope.result.body.description === undefined;
    };
}]);
