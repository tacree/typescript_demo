'use strict';

/**
 * @ngdoc overview
 * @name typescriptDemoApp
 * @description
 * # typescriptDemoApp
 *
 * Main module of the application.
 */
angular
  .module('typescriptDemoApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
        //, controllerAs: 'aboutVm'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
