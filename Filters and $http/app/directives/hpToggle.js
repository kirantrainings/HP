/**
 * Created by Administrator on 2/23/2016.
 */
function hpToggleFn(){
    return{
        restrict:"A",
        link:function(scope,element,attrs){
            var content=$(element).find('#pnlBody');
            $(element).bind('click',function(){
                    $(content).toggle();
            })

        }
    }
}


angular.module('onlineQuiz').directive('hpToggle',[hpToggleFn])