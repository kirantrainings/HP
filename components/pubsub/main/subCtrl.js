/**
 * Created by Administrator on 2/24/2016.
 */



function subCtrlFn($scope,$rootScope,CONSTANTS){
    console.log(CONSTANTS.APP_NAME);

    $scope.$on("MAIN-CONTROLLER-DATA",function(event,args){
        $scope.userDetails =args.userDetails;
    });

    $scope.subCtrlClick=function(){
        $scope.userDetails={
            name:"sub",
            profession:"Study"
        };
        $scope.$emit("SUB-CONTROLLER-MODIFIED",{userDetails:$scope.userDetails});
    }
};

main.controller('subCtrl',['$scope','$rootScope','APP_CONSTANTS',subCtrlFn])