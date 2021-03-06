'use strict';

// Declare app level module which depends on views, and components
var app =angular.module('carDealz',
    [   'ui.router',
        'usedcars',
        'newcars',
        'compare',
        'header',
        'common',
        'components.customVehicle',
         'component.directives',
        'components.click',
        'components.datepicker',
        'component.header'
    ]);


var configFn= function($stateProvider,$urlRouterProvider){
    console.log("I am the Main module");

    $urlRouterProvider.otherwise('/home');
    var homePage = {
        name:"home",
        url:"/home",
        templateUrl:"header/header.tpl.html"
    };
    var newcarState = {
        name:'newcars',
        templateUrl:"newcars/newcars.tpl.html"
    };

    $stateProvider.state('newcars',newcarState);
    $stateProvider.state('home',homePage);
};

app.config(['$stateProvider','$urlRouterProvider',configFn]);