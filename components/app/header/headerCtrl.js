/**
 * Created by Administrator on 2/23/2016.
 */

function headerCtrlFn($scope){
  $scope.brandName="Helwett Packard";
    $scope.user={
        firstName:"Kiran",
        lastName:"PVS"
    };
    $scope.handleClick=function(){
        $scope.user.firstName="Angular";
        $scope.user.lastName="IsolatedScope";
    }
};

header.controller("headerCtrl",['$scope',headerCtrlFn])