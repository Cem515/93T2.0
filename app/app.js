(function () {
    'use strict';

    var app = angular.module('app', ['ui.router']).value('localApi', 'http://localhost:54165/api/');;
    app.config(function ($stateProvider, $urlRouterProvider) {

        // For any unmatched url, redirect to /main
        $urlRouterProvider.otherwise("/main");

        $stateProvider
            .state('main', {
                url: "/main",
                templateUrl: "app/htmls/main.html"
            })
            .state("beer", {
                url: "/beermenu",
                templateUrl: "app/htmls/beer.html",
                controller:'BeerController',
                controllerAs:'BeerCtrl'
            })
            .state("about", {
                url: "/about",
                templateUrl: "app/htmls/about.html"
            })
            .state("contact", {
                url: "/contactpage",
                templateUrl: "app/htmls/contact.html"
            })
    });
})();