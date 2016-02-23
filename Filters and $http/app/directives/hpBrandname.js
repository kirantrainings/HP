/**
 * Created by Administrator on 2/23/2016.
 */


function brandNameFn(){
    return{
        //template:"<h2>Hello Guys</h2>"
        templateUrl:"app/templates/header.html"
    }

}

angular.module('onlineQuiz')
       .directive('hpBrandName',[brandNameFn]);