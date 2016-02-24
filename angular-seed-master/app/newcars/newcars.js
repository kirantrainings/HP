/**
 * Created by Administrator on 12/11/2015.
 */
var app=angular.module('newcars',[]);


var configFn= function($stateProvider,$urlRouterProvider){
    console.log("I am the new cars module");
    var newcarState = {
        name:'newcars',
        templateUrl:"newcars/newcars.tpl.html"
    };

    $stateProvider.state('newcars',newcarState);
};

app.config(['$stateProvider','$urlRouterProvider',configFn]);