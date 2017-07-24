(function(){
    'use strict';

    angular
        .module('app')
        .controller('BeerController', BeerController)

    BeerController.$inject = ['$state', 'BeerFactory'];

    function BeerController($state,BeerFactory) {
        /* jshint validthis:true */
        var BeerCtrl = this;



        BeerCtrl.init = function() {
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