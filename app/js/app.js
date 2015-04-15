(function () {
    'use strict';
    
    angular.module('gridTableApp', ['ui.router', 'gridTableApp.gridTable', 'gridTableApp.controllers', 'gridTableApp.directives', 'gridTableApp.filters', 'gridTableApp.services']);
    
    angular.module('gridTableApp').run(['$state', '$rootScope', function ($state, $rootScope) {
        $state.go('home');
    }]);


}());