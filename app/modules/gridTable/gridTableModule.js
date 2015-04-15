(function () {
    'use strict';
    
    angular.module('gridTableApp.gridTable', ['gridTableApp.gridTable.controllers', 'gridTableApp.gridTable.directives', 'gridTableApp.gridTable.services', 'gridTableApp.gridTable.filters']);
    angular.module('gridTableApp.gridTable').config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $stateProvider.state('gridtable', {
            url : "/gridtable",
            templateUrl : "modules/gridTable/views/gridTable.html",
            controller: "gridTableController"
        });
        
        $stateProvider.state('home', {
            url : "/home",
            templateUrl : "modules/gridTable/views/homePage.html",
            controller: "gridTableController"
        });
    }]);
    
    
}());