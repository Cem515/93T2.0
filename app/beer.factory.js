(function () {
    'use strict';

    angular
        .module('app')
        .factory('BeerFactory', BeerFactory)

    BeerFactory.$inject = ['$http', 'localApi'];

    function BeerFactory($http, localApi) {
        var service = {
            getBeers: getBeers,
            beerDetails: beerDetails
        };

        return service;

        function getBeers() {
            return $http({
                method: 'GET',
                url: localApi + 'Beers'
            }).then(function (response) {
                return response.data;
            }, function (error) {
                return error;
            })
        }

        function beerDetails(id) {
            return $http({
                method: 'GET',
                url: localApi + 'Beers/' + id
            }).then(function (response) {
                return response.data;
            }, function (error) {
                return error;
            })
        }
    }
})();