'use strict';


angular.module('ereturApp')
  .service('AuthService', function($http) {

    this.interested = function(email) {
      var data = {
        'email': email
      };
      return $http.post('/api/wecook/auth/interest', data);
    };

  });
