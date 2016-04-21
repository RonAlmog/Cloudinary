'use strict';

class NavbarController {
  //start-non-standard
  menu = [{
    'title': 'Home',
    'state': 'main'
  },{
    'title': 'Products',
    'state': 'products'
  },{
    'title': 'Add Prod',
    'state': 'product'
  },{
    'title': 'Photo',
    'state': 'photo'
  }];

  isCollapsed = true;
  //end-non-standard

  constructor(Auth) {
    this.isLoggedIn = Auth.isLoggedIn;
    this.isAdmin = Auth.isAdmin;
    this.getCurrentUser = Auth.getCurrentUser;
  }
}

angular.module('appApp')
  .controller('NavbarController', NavbarController);
