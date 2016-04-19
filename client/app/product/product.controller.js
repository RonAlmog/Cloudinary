'use strict';

angular.module('appApp')
  .controller('ProductCtrl', ['$scope', '$http', '$stateParams', '$state', function ($scope, $http, $stateParams, $state) {
  	var vm = this;
  	var base_url = 'http://localhost:9000/api/';
  	vm.product = {};
    var id = $stateParams.id;
    vm.id = $stateParams.id;
    vm.message = 'hello products';

    vm.getProduct = function() {
    	$http.get(base_url + 'products/' + id).then(function(result){
    		vm.product = result.data;
    		
    	});

    }

    vm.saveProduct = function(form){
    	console.log('trying to save');
    	if(form.$valid){
    		if(vm.id){
    			// put - update
	    		$http.put(base_url + 'products/' + id, vm.product).then(function(result){
	    			console.log('put result: ', result);
	    			$state.go('products');
	    		});	
			} else {
				// post - create
				console.log('prod:', vm.product);
				$http.post(base_url + 'products', vm.product).then(function(result){
					console.log('post result: ', result);
					$state.go('products');
	    		});	
			}

	    }
    	
    }

    if(id){
    	vm.getProduct();
	}


 }]);




