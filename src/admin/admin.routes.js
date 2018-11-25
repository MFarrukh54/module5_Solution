(function () {
"use strict";

angular.module('admin')
.config(config);

config.$inject = ['$stateProvider', '$httpProvider'];
function config($stateProvider, $httpProvider) {

  $stateProvider

    // Contains base state that all admin states inherit
    // Contains state that all authenticated states inherit
    .state('signup', {
      url: '/',
      templateUrl: 'src/admin/signUp/signupTemplate.html',
      controller: 'RegistrationController',
      controllerAs: 'reg'
    });
    $stateProvider
    .state('Info', {
      url: '/',
      templateUrl: 'src/admin/registerInfo/registerInfoTemplate.html',
      controller: 'RegistrationInfoController',
      controllerAs: 'ctrl',
      // These are params that this state expects to be populated
      // Allows us to pass via $state.go(path, params)
      
    })
    
    ;
}

})();
