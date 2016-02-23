
angular.module('component.click',[]);

angular.module('component.click')
    .directive('hpClick',[function(){
        return{
            restrict:"A",
            link:function(scope,element,attrs){
                $(element).bind('click',function(){
                    scope.$apply(function(){
                       scope.$eval(attrs.hpClick)
                    });
                })
            }

            /*link:function(scope,element,attrs){
             $(element).bind('click',function(){
                 console.log(scope.user);
                 scope.$apply(function(){
                     scope.user.firstName="Angularjs";
                 });
             });
            }*/
        }
    }]);


angular.module('component.click')
    .directive('hpModel',[function(){
        return{
            restrict:"A",
            link:function(scope,element,attrs){
                $(element).bind('keypress',function(){
                    scope.$apply(function(){
                        //scope.$eval(attrs.hpModel)
                    });
                })
            }
        }
    }]);