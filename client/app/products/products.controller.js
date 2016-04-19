'use strict';

angular.module('appApp')
  .controller('ProductsCtrl', ['$scope', '$http', function ($scope, $http) {
  	var vm = this;
  	var base_url = 'http://localhost:9000/api/';
  	vm.products = [];

    vm.message = 'hello products';

    vm.getProducts = function() {
    	$http.get(base_url + 'products').then(function(result){
    		vm.products = result.data;
    		
    	});

    }

    vm.getProducts();


 }]);




