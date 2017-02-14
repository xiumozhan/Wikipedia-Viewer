wikiApp.controller('wikiController', ['$scope', '$http', '$sce', function($scope, $http, $sce) {
    $scope.results = [];
    $scope.isShowingResult = false;

    $scope.cleanResults = function() {
        $scope.searchString = '';
        $scope.results = [];
        $scope.isShowingResult = false;
    };

    $scope.search = function() {
        $scope.results = [];
        var api = 'https://en.wikipedia.org/w/api.php?prop=pageimages|pageterms&';
        var page = 'https://en.wikipedia.org/?curid=';
        var request = {
            method: 'jsonp',
            url: $sce.trustAsResourceUrl(api),
            params: {
                format: 'json',
                action: 'query',
                generator: 'search',
                gsrnamespace: 0,
                gsrlimit: 10,
                polimit: 'max',
                exintro: 'true',
                explaintext: 'true',
                exsentences: 1,
                exlimit: 'max',
                gsrsearch: $scope.searchString
            }
        }
        $http(request).then(function(data) {
            var results = data.data.query.pages;
            angular.forEach(results, function(value, key) {
                $scope.results.push({
                    title: value.title,
                    body: value.terms,
                    page: page + value.pageid,
                    thumbnail: value.thumbnail
                })
            });
            $scope.isShowingResult = true;
        });
    };

    $scope.mainPageMode = function() {
        if($scope.isShowingResult) {
            return false;
        }
        return true;
    };

    $scope.searchMode = function() {
        if($scope.isShowingResult) {
            return true;
        }
        return false;
    };
}]);
