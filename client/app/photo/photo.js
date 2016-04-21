'use strict';

angular.module('appApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('photo', {
        url: '/photo',
        templateUrl: 'app/photo/photo.html',
        controller: 'PhotoCtrl',
        controllerAs: 'vm'
      });
  });
