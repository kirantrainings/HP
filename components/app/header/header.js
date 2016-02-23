/**
 * Created by Administrator on 2/23/2016.
 */
var header=angular.module('header',[]);

angular.module('header').config([function(){
 console.log("i am the header module");
}]);


angular.module('header').run([function(){
    console.log("i am the Run Function of header module");
}]);

