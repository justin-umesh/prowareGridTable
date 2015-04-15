(function () {
    'use strict';
    
    angular.module('gridTableApp.gridTable.controllers', []).controller('gridTableController', ['$scope', 'gridService', function ($scope, gridService) {
        $scope.grids = gridService.getAllGrids();
        $scope.Descriptsubmit = function (id, gridBox, allGrids) {
            $scope.grids = gridService.AddGridDetails(id, gridBox, allGrids);
        };
    }]);
}());