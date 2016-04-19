'use strict';

angular.module('appApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('product', {
        url: '/product/:id',
        templateUrl: 'app/product/product.html',
        controller: 'ProductCtrl',
        controllerAs: 'vm'
      });
  });
