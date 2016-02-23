/**
 * Created by Administrator on 2/23/2016.
 */
angular.module('component.datepicker',[]);

angular.module('component.datepicker')
    .directive("hpDatePicker",[function(){
        return{
            restrict:"A",
            link:function(scope,element,attrs){
                var config={};
                if(attrs.mindate){
                    config.minDate=attrs.mindate;
                }
                if(attrs.maxdate){
                    config.maxDate= attrs.maxdate;
                }
                $(element).datepicker(config);
            }
        };
    }]);