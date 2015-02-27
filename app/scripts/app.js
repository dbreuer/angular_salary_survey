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

  });

function orientationCheck() {
    var height = $(window).height();
    var width = $(window).width();

    if(width<height) {
        // Landscape
        $('body').addClass('landscape');
    } else {
        $('body').removeClass('landscape');
    }
}
window.addEventListener('resize', orientationCheck, false);
window.onload = orientationCheck;