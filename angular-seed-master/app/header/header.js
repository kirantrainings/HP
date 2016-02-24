/**
 * Created by Administrator on 12/9/2015.
 */
var header=angular.module('header',[]);



var configFn= function(){
    console.log("I am the header module");
};

header.config([configFn]);
