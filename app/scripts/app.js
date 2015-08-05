'use strict';

/**
 * @ngdoc overview
 * @name myContactsAppApp
 * @description
 * # myContactsAppApp
 *
 * Main module of the application.
 */
angular
  .module('myContactsApp', [
    'ngRoute',
    'firebase'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
