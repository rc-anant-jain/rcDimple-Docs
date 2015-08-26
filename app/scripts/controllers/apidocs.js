'use strict';
/**
 * @ngdoc function
 * @name rcDimpleApp.controller:ApidocsCtrl
 * @description
 * # ApidocsCtrl
 * Controller of the rcDimpleApp
 */
angular.module('rcDimpleApp')
  .controller('ApidocsCtrl', ['$scope', 'dataFetcher', '$q', function ($scope, dataFetcher, $q) {

    GetData().then(function (data) {
      $scope.data = data;
    });
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    function GetData() {
      var deferred = $q.defer();
      dataFetcher.getMarkup('data/docs.json').then(
        function (data) {
          deferred.resolve(data);
        },
        function (error) {
          deferred.reject(error);
        }
        );
      return deferred.promise;
    }
  }]);
