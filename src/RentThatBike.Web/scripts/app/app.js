﻿(function () {
    "use strict";

    var myAppModule = angular.module('myApp', ['ngRoute', 'ngResource', 'ui.bootstrap']);

    myAppModule.config(['$provide', function ($provide) {
        $provide.decorator('$exceptionHandler', ['$delegate', function ($delegate) {
            return function (exception, cause) {
                alert(exception.message);
                $delegate(exception, cause);
            };
        }]);
    }]);

    myAppModule.config([
        '$routeProvider', function ($routeProvider) {
            $routeProvider
                .when('/', { templateUrl: 'scripts/app/views/default.html' })
                .when('/bicycles', { templateUrl: 'scripts/app/views/bicyclesIndex.html', controller: 'BicyclesController' })
                .when('/bicycles/new', { templateUrl: 'Scripts/app/views/bicyclesEditor.html', controller: 'BicycleController' })
                .when('/bicycles/:bicycleId/edit', { templateUrl: 'Scripts/app/views/bicyclesEditor.html', controller: 'BicycleController' })
                .when('/customers', { templateUrl: 'scripts/app/views/customersIndex.html', controller: 'CustomersController' })
                .when('/customers/new', { templateUrl: 'Scripts/app/views/customerEditor.html', controller: 'CustomerController' })
                .when('/customers/:customerId/edit', { templateUrl: 'Scripts/app/views/customerEditor.html', controller: 'CustomerController' })
                .when('/rentals', { templateUrl: 'scripts/app/views/rentalsIndex.html', controller: 'RentalsController' })
                .when('/rentals/new', { templateUrl: 'Scripts/app/views/rentalsEditor.html', controller: 'RentalController' })
                .when('/rentals/:rentalId/edit', { templateUrl: 'Scripts/app/views/rentalsEditor.html', controller: 'RentalController' });

            $locationProvider.html5Mode(true);
        }
    ]);

})();