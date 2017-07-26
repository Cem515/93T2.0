(function () {
    'use strict';

    angular
        .module('app')
        .controller('BeerController', BeerController)

    BeerController.$inject = ['$state', 'BeerFactory'];

    function BeerController($state, BeerFactory) {

        var BeerCtrl = this;
        BeerCtrl.chosenBeer = {};
        BeerCtrl.showBeer = false;


        window.onload = function () {
            BeerFactory
                .getBeers()
                .then(function (list) {
                    BeerCtrl.BeerList = list;
                }, function (error) {
                    console.log(error);
                })
        }

                BeerCtrl.chooseBeer = function (id) {
            BeerFactory
                .beerDetails(id)
                .then(function (response) {
                    BeerCtrl.chosenBeer = response;
                    BeerCtrl.showBeer = true;
                }, function (error) {
                    console.log(error);
                })
        }
    }
})();

