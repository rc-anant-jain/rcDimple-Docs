'use strict';

/**
 * @ngdoc overview
 * @name rcDimpleApp
 * @description
 * # rcDimpleApp
 *
 * Main module of the application.
 */
angular
  .module('rcDimpleApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngMaterial'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/apidocs', {
        templateUrl: 'views/apidocs.html',
        controller: 'ApidocsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
