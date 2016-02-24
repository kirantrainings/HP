var header = angular.module('component.header',[]);

var headerFn = function(){
    var directiveObj ={};
    directiveObj.templateUrl="common_components/customHeader/custom.header.tpl.html";
    //isolated scope added.
    directiveObj.scope ={
        //
        title:"="
    };
    directiveObj.link= function(scope,element,attr){
      console.log(scope);
    };
    return directiveObj;
};

header.directive('customHeader',[headerFn]);




