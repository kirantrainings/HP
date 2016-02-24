/**
 * Created by Administrator on 12/21/2015.
 */
var datePicker = angular.module('components.datepicker',[]);
var datepickerFn = function(){
  var directive = {};

    directive.restrict= "A";
    directive.link = function(scope,element,attr){
       // $(element).datepicker({maxDate:+0,minDate:"-20D"});
        var config ={};
        if(attr['maxdate']){
            config.maxDate=attr["maxdate"];
        }
        if(attr['mindate']){
            config.minDate = attr["mindate"];
        }
        $(element).datepicker(config);
    };
    return directive;
};
datePicker.directive('customDatePicker',[datepickerFn])