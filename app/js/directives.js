(function () {
    'use strict';
    
    angular.module('gridTableApp.directives', []);   
    angular.module('gridTableApp.directives').directive('appVersion', ['version', function (version) {
        return {
            restrict: 'AE',
            link: function (scope, elem, attrs) {
                elem.html(version);
            }
        };
    }]);
}());