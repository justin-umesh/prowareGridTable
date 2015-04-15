(function () {
    'use strict';
    
    angular.module('gridTableApp.gridTable.services', []).factory('gridService', function () {
        return {
            addGrids : function () {
                var gridsLength = 1000, gridsArray = [];
                for (var i=0; i<gridsLength;i++){
                   gridsArray.push({id:i, 'title':'Add Title', 'description' : 'Add Description'});
                }
                return gridsArray;
            },
            
            getAllGrids : function () {
                return this.addGrids();
            },
            
            AddGridDetails : function (id, details, grids) {
                var allGrids = grids;
                for (var grid in allGrids) {
                    if (allGrids[grid].id == id){                        
                        allGrids[grid].title = details.title;                        
                        allGrids[grid].description = details.description;
                        
                        if(details.title == undefined || details.title == ''){
                            allGrids[grid].title = 'Add Title';
                        }
                        
                        if(details.description == undefined || details.description == ''){
                            allGrids[grid].description = 'Add Description';
                        }
                    }
                }
                
                return allGrids;
            },
            
            clearAllGrids : function () {
            
            }
        };
    });
}());