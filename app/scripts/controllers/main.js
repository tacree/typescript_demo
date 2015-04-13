'use strict';

/**
 * @ngdoc function
 * @name typescriptDemoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the typescriptDemoApp
 */
angular.module('typescriptDemoApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
