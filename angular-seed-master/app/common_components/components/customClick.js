/**
 * Created by Administrator on 12/18/2015.
 */

var clickComponent = angular.module('components.click',[]);
var clickFn = function(){
  var directive ={};
    directive.restrict='A';
    directive.controller = function($scope){
        $scope.name="Kiran";
    };
    //link function
    directive.link = function (scope,element,attrs) {

        element.bind('click',function(){
        alert(attrs["name"]);
     });
    };
    return directive;
};

clickComponent.directive('customClick',[clickFn]);