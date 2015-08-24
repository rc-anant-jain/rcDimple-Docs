'use strict';

describe('Controller: ApidocsCtrl', function () {

  // load the controller's module
  beforeEach(module('rcDimpleApp'));

  var ApidocsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ApidocsCtrl = $controller('ApidocsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ApidocsCtrl.awesomeThings.length).toBe(3);
  });
});
