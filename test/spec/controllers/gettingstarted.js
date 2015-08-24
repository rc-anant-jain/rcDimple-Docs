'use strict';

describe('Controller: GettingstartedCtrl', function () {

  // load the controller's module
  beforeEach(module('rcDimpleApp'));

  var GettingstartedCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GettingstartedCtrl = $controller('GettingstartedCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(GettingstartedCtrl.awesomeThings.length).toBe(3);
  });
});
