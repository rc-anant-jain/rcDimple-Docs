'use strict';

describe('Controller: ExamplesCtrl', function () {

  // load the controller's module
  beforeEach(module('rcDimpleApp'));

  var ExamplesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ExamplesCtrl = $controller('ExamplesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ExamplesCtrl.awesomeThings.length).toBe(3);
  });
});
