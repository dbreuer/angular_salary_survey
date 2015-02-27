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
        $rootScope.navigation = ($scope.id>0)?true:false;
        $scope.id = 0;

            console.log($routeParams);


        $rootScope.navigation = ($scope.id > 0)?true:false;
        $scope.title = 'Lorem ipsum dolorem';
        $scope.nextId = function(stepId) {
            $scope.id = ++$scope.id % 3;
            if (stepId) $scope.id = stepId;
            $rootScope.navigation = ($scope.id>0)?true:false;
            //$location.path("/steps/" + $scope.id);
        }

        $scope.sections = [
            {
                name: 'Section 1',
                id: 0,
                template: 'views/step0.html'
            },
            {
                name: 'Section 2',
                id: 1,
                template: 'views/step1.html'
            },
            {
                name: 'Section 3',
                id: 2,
                template: 'views/step2.html'
            },
            {
                name: 'Section 4',
                id: 3,
                template: 'views/step3.html'
            },
            {
                name: 'Section 5',
                id: 4,
                template: 'views/step4.html'
            },
            {
                name: 'Section 6',
                id: 5,
                template: 'views/step5.html'
            }
        ]
        $scope.play = function() {

        }
    });
