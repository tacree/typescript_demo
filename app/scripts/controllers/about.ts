// <reference path='../../../typings/tsd.d.ts' />
'use strict';

// Step 1: original javascript just renamed to about.ts
angular.module('typescriptDemoApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma',
      'Step 1'
    ];
  });

// Step 2: Use typescript to create a scope interface
//module app.scopes {
//  export interface IAboutScope extends ng.IScope {
//    awesomeThings: string[];
//  }
//}
//
//angular.module('typescriptDemoApp')
//  .controller('AboutCtrl', function ($scope : app.scopes.IAboutScope) {
//    $scope.awesomeThings = [
//      'HTML5 Boilerplate',
//      'AngularJS',
//      'Karma',
//      'Step 2'
//    ];
//  });


// Step 3
// - Adding ControllerAs syntax to app
//angular.module('typescriptDemoApp')
//  .controller('AboutCtrl', function ($scope) {
//    this.awesomeThings = [
//      'HTML5 Boilerplate',
//      'AngularJS',
//      'Karma',
//      'Step 3'
//    ];
//  });


// Step 4
// -- converting to module
//module app.controllers{
//  export class AboutController{
//    awesomeThings: string[];
//
//    constructor() {
//      this.awesomeThings = [
//        'HTML Boilerplate',
//        'AngularJS',
//        'Karma',
//        'Step 4'
//      ];
//    }
//  }
//}
//
//angular.module('typescriptDemoApp')
//  .controller('AboutCtrl', app.controllers.AboutController);
