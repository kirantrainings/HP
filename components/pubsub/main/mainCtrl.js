/**
 * Created by Administrator on 2/24/2016.
 */
function mainCtrlFn($scope,$rootScope,$http){
    $scope.userDetails = {
        name:"Kiran",
        profession:"Training"
    };

    $scope.userA="<h1>{{userDetails.name}}</h1><h2>Profession :{{userDetails.profession}}</h2>"
    $scope.mainCtrlClick=function(){

            $rootScope.$broadcast("MAIN-CONTROLLER-DATA",{userDetails:$scope.userDetails});
        };
        $scope.$on("SUB-CONTROLLER-MODIFIED",function(event,args){
            $scope.userDetails=args.userDetails;
        });

        $scope.$watch("username",function(newVal,oldVal){
            console.log(newVal);
            console.log(oldVal);
        });

       $http.get('pubsub/package.json').then(function(response){
           $scope.userTemplate=response.data.template
       });
};

main.controller('mainCtrl',['$scope','$rootScope',"$http",mainCtrlFn])