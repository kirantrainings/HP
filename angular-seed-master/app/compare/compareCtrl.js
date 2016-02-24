/**
 * Created by Administrator on 12/14/2015.
 */

var ctrlFn = function($scope,$state){

    var init= function(){
      console.log($state);
        $scope.vehicles = $state.params.vehicles;
    };

    init();
};


compare.controller('compareCtrl',['$scope','$state',ctrlFn])