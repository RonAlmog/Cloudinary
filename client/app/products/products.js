'use strict';

angular.module('appApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('products', {
        url: '/products',
        templateUrl: 'app/products/products.html',
        controller: 'ProductsCtrl',
        controllerAs: 'vm'
      });
  });
