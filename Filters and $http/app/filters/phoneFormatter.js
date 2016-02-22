/**
 * Created by Administrator on 2/22/2016.
 */

function phoneFormatter(){
    return function(input,criteria){
       if(input && input.length==10){
           return input.substring(0,3)+"-"
               +input.substring(3,6)+"-"
               +input.substring(6,10);
       }
        return input;
    }
}


angular.module('onlineQuiz')
    .filter('phoneFormatter',[phoneFormatter])