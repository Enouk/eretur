'use strict';

angular.module('ereturApp')
  .controller('ReturCtrl', function($scope) {

    $scope.STATES = {
      ENTER_ORDER_ID: 'enter_order_id',
      SELECT_ITEMS: 'select_items',
      CONFIRM: 'confirm',
      COMPLETED: 'completed'
    };

    $scope.order = {
      id: '123',
      customer: {
        id: '123',
        firstname: 'Eva',
        lastname: 'Johansson'
      },
      products: [{
        id: '1',
        name: 'Cherry In The Air EdT',
        brand: 'Escada',
        volume: '30ml',
        price: 359,
        count: 1
      }, {
        id: '2',
        name: 'Volume Lip Balm',
        brand: 'Proclé',
        volume: 'Pink 3,5g',
        price: 69,
        count: 5
      }]
    };

    $scope.orderId = undefined;

    $scope.state = $scope.STATES.ENTER_ORDER_ID;

    $scope.onNext = function() {

      if ($scope.state === $scope.STATES.ENTER_ORDER_ID) {
        $scope.state = $scope.STATES.SELECT_ITEMS;
      } else if ($scope.state === $scope.STATES.SELECT_ITEMS) {
        $scope.state = $scope.STATES.CONFIRM;
      }
    };

  });
