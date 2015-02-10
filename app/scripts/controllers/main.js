'use strict';

/**
 * @ngdoc function
 * @name angularTestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularTestApp
 */
angular.module('angularTestApp')
  .controller('MainCtrl', function ($scope, $rootScope, $location, $routeParams) {
        $rootScope.navigation = true;
        $scope.id = $routeParams.templateID || 0;

        $rootScope.navigation = ($scope.id > 0)?true:false;
        $scope.title = 'Lorem ipsum dolorem';
        $scope.nextId = function() {
            $scope.id = ++$scope.id % 3;

            $location.path("/sites/" + $scope.id);
        }

    });
