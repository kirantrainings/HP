/**
 * Created by Administrator on 12/14/2015.
 */
var ctrlFn=function($scope,$state,vehicleSvc){

        var  initController=function(){
            $scope.searchCriteria="";

            $scope.gridConfig ={
                header:[{text:"S.No"},
                    {text:"Year"},
                    {text:"Make"},
                    {text:"Model"}
                ]
            };

            $scope.heading ="Welcome to the new cars";

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

    initController();
};

app.controller('newCarCtrl',['$scope','$state','vehicleSvc',ctrlFn]);