'use strict';


angular.module('ereturApp')
  .controller('InterestCtrl', function($scope, AuthService) {

    $scope.hasSubmitted = false;

    $scope.submit = function() {

      AuthService.interested($scope.user.email)
        .success(function() {
          $scope.hasSubmitted = true;
        })
        .error(function() {
          $scope.error = 'Kunde ej ta emot intresseanmälan, vänligen försök senare';
        });

        $scope.hasSubmitted = true;
    };

  });
