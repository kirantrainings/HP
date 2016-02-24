/**
 * Created by Administrator on 12/18/2015.
 */
var component = angular.module('component.directives',[]);

var directiveFn = function(){
   var directive ={};

     directive.templateUrl ="common_components/vehicleList/vehicle.list.tpl.html";
    // directive.controller="newCarCtrl";
    return directive;
};

component.directive('vehicleList',[directiveFn])

