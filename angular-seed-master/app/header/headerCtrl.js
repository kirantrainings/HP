/**
 * Created by Administrator on 12/11/2015.
 */

var headerFn=function($scope,$state,navFactory){
    $scope.vehicleSelectedCount=0
  $scope.loadPage = function(route){
      console.log(route);
      navFactory.navItems().then(function(response){
          if(response=="error"){
              console.log("error occured")
          }
          else{
             console.log(response);
          }
      })
      $state.go(route);
  };

    $scope.$on('VEHICLE_TO_BUY',function(event,args){
       $scope.vehicleSelectedCount++;
    });
};
header.controller('headerCtrl',['$scope','$state','navigationFactory',headerFn])