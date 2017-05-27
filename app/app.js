(function () {
    'use strict';

    var app = angular.module('app', ['ui.router']);
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
                templateUrl: "app/htmls/beer.html"
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