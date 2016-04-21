'use strict';

describe('Component: PhotoComponent', function () {

  // load the controller's module
  beforeEach(module('appApp'));

  var PhotoComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    PhotoComponent = $componentController('PhotoComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
