'use strict';

/**
 * @ngdoc overview
 * @name angularTestApp
 * @description
 * # angularTestApp
 *
 * Main module of the application.
 */
angular
  .module('angularTestApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/steps/:templateID', {
                controller: 'MainCtrl',
                templateUrl: function($routeParams) {
                    return 'views/step' + $routeParams.templateID + '.html';
                }
            }).otherwise({
             redirectTo: '/steps/0'
            });
  });


window.addEventListener('resize', function() {
    // Get screen size (inner/outerWidth, inner/outerHeight)
    var height = $(window).height();
    var width = $(window).width();

    if(width<height) {
        // Landscape
        $('body').addClass('landscape');
    } else {
        $('body').removeClass('landscape');
    }
}, false);
