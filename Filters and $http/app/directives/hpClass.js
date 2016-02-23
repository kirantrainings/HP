/**
 * Created by Administrator on 2/23/2016.
 */
function hpClassFn(){
    return{
        restrict:"CAE",
        template:"<h3>hello how r u</h3>"
    }
};

angular.module('onlineQuiz').directive('hpClass',[hpClassFn])