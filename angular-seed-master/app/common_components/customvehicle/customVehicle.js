/**
 * Created by Administrator on 12/17/2015.
 */
var customVehicle =angular.module('components.customVehicle',[]);

var directiveFn = function(){
  return{
      restrict:"C,A,E",
      //template:"<h1>I am the custom component</h1>"
      templateUrl:'common_components/customvehicle/custom.vehicle.tpl.html'

  };
};
customVehicle.directive('customVehicleDisplay',directiveFn);
