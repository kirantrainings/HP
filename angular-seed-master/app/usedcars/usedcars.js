/**
 * Created by Administrator on 12/11/2015.
 */
var app= angular.module('usedcars',[]);

var configFn= function($stateProvider,$urlRouterProvider){
  console.log("I am the used cars module");

    var usedCarsState = {
      name:"usedcars",
        url:"/usedcars",
        templateUrl:"usedcars/usedcars.tpl.html"
    };
     $stateProvider.state('usedcars',usedCarsState);
};

app.config(['$stateProvider','$urlRouterProvider',configFn]);

/**
 * Created by Administrator on 12/14/2015.
 */
var ctrlFn=function($scope,$state,vehicleSvc,$rootScope){

    var  initController=function(){
        $scope.searchCriteria="";
        getCars();
    };

    var getCars =function() {
        var data= vehicleSvc.getVehicles().then(function(response){
            $scope.cars=response.data.vehicles;
            $scope.newCars=response.data.vehicles;
        });
    };
       $scope.compare = function(){
        var compareVehicles =[];
        angular.forEach($scope.newCars,function(vehicle){
            if(vehicle.isCompared){
                compareVehicles.push(vehicle);
            }
        });
        $state.go('compare',{vehicles:compareVehicles});
    };


    $scope.addVehicleToCart = function(item){
        $scope.$emit('VEHICLE_TO_BUY');
        $rootScope.$broadcast('VEHICLE_TO_BUY',{data:"1234"});
    };
    initController();
};


app.controller('usedCarCtrl',['$scope','$state','vehicleSvc','$rootScope',ctrlFn]);