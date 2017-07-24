(function () {
    'use strict';

    angular
        .module('app')
        .factory('BeerFactory', BeerFactory)

    BeerFactory.$inject = ['$http','localApi'];

    function BeerFactory($http, localApi) {
        var service = {
            getBeers: getBeers
        };

        return service;

        function getBeers() {
            return $http({
                method: 'GET',
                url: localApi + 'Beers'
            }).then(function (response) {
                return response;
            }, function (error) {
                return error;
            })
        }
    }
})();