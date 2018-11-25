(function () {
"use strict";

angular.module('admin')
.config(config);

config.$inject = ['$stateProvider', '$httpProvider'];
function config($stateProvider, $httpProvider) {

  $stateProvider

    // Contains base state that all admin states inherit
    .state('admin', {
      url: '/admin',
      abstract: true,
      templateUrl: 'src/admin/signUp/signupTemplate.html'
    })
    // Contains state that all authenticated states inherit
    .state('admin.signup', {
      url: '/',
      templateUrl: 'src/admin/signUp/signupTemplate.html',
      controller: 'RegistrationController',
      controllerAs: 'reg'
    })
    .state('admin.Info', {
      url: '/',
      templateUrl: 'src/admin/registerInfo/registerInfoTemplate.html',
      controller: 'RegistrationInfoController',
      controllerAs: 'ctrl',
      // These are params that this state expects to be populated
      // Allows us to pass via $state.go(path, params)
      
    })
    .state('admin.auth.category', {
      url: '/category/{categoryId}',
      templateUrl: 'src/admin/category/category-items.html',
      controller: 'CategoryItemsController',
      controllerAs: 'categoryItemsCtrl',
      resolve: {
        category: ['$stateParams', 'MenuService', function ($stateParams, MenuService) {
          return MenuService.getCategory($stateParams.categoryId);
        }],
        menuItems: ['$stateParams', 'MenuService', function ($stateParams, MenuService) {
          return MenuService.getMenuItems($stateParams.categoryId);
        }]
      }
    })

    .state('admin.auth.category.menuitem', {
      url: "/menuitem/{menuItemId}",
      templateUrl: "src/admin/menu-item/menu-item-edit.html",
      controller: 'MenuItemEditController',
      controllerAs: 'menuItemEditCtrl',
      resolve: {
        menuItem: ['$stateParams', 'MenuService', function ($stateParams, MenuService) {
          return MenuService.getMenuItem($stateParams.menuItemId);
        }]
      }
    });;
}

})();
