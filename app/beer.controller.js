(function(){
    'use strict';

    angular
        .module('app')
        .controller('BeerController', BeerController)

    BeerController.$inject = ['BeerFactory'];

    function BeerController(BeerFactory) {
        /* jshint validthis:true */
        var BeerCtrl = this;



        window.onload = function() {
            BeerFactory
            .getBeers()
             .then(function (list) {
                    BeerCtrl.BeerList = list;
                }, function (error) {
                    console.log(error);
                })
        }
    }
})();