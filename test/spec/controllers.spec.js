describe('Unit: HomeController', function() {
  console.log('Karma executed this');
  // Load the module with MainController
  beforeEach(module('instantSearch'));

  var ctrl, scope;
  // inject the $controller and $rootScope services
  // in the beforeEach block
  beforeEach(inject(function($controller, $rootScope) {
    // Create a new scope that's a child of the $rootScope
    scope = $rootScope.$new();
    // Create the controller
    ctrl = $controller('HomeController', {
      $scope: scope
    });
  }));

  it('It should return Home screen message', 
    function() {
      expect(scope.message).toEqual("Welcome to Home Page");
  });
})