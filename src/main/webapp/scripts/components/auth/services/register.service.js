'use strict';

angular.module('appApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


