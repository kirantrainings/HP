/**
 * Created by Administrator on 2/23/2016.
 */
angular.module('main',["header",
    "footer",
    "component.datepicker",
    "component.click"]);

angular.module('main').config([function(){
    console.log("i am the main module");
}]);

angular.module('main').run([function(){
    console.log("i am the Run Function of main module");
}]);