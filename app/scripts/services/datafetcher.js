'use strict';

/**
 * @ngdoc service
 * @name rcDimpleApp.dataFetcher
 * @description
 * # dataFetcher
 * Service in the rcDimpleApp.
 */
angular.module('rcDimpleApp')
    .service('dataFetcher', ['$http', '$q', function ($http, $q) {
        return {
            getMarkup: function (url) {
                var deferred = $q.defer();
                $http.get(url).success(function (data) {
                    deferred.resolve(data);
                })
                .error(function (err) {
                    deferred.reject(err);
                });
                
                return deferred.promise;
            }
        };
  }]);
