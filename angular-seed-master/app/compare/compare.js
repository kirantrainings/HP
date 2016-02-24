/**
 * Created by Administrator on 12/11/2015.
 */
var compare=angular.module('compare',[]);


var configFn= function($stateProvider,$urlRouterProvider){
    console.log("I am the compare module");
    //state definition.
    var compare={
      name:"compare",
      templateUrl:"compare/compare.tpl.html",
      url:"/compare",
        controller:'compareCtrl',
      params:{vehicles:[]}
    };
    //register state.
    $stateProvider.state('compare',compare);
};

compare.config(['$stateProvider','$urlRouterProvider',configFn]);