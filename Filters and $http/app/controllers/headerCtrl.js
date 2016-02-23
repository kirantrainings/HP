/**
 * Created by Administrator on 2/22/2016.
 */
function headerCtrl($scope,headerSvc){
  /* $http.get('app/data/header.json').then(function(response){
      console.log(response);
       $scope.tabs=response.data;
   });*/
    headerSvc.getHeaderInformation().then(function(response){
        $scope.tabs=response.data;
    });

    $scope.data = headerSvc.getStaticInfo();


    $scope.selectedTab= function(tab){
        angular.forEach($scope.tabs,function(item){
              if(item.name==tab.name){
                  item.cssClass="active"
                  $scope.selectedTemplate=item.template;
              }
            else{
                  item.cssClass="";
              }
        })
    }
}
angular.module('onlineQuiz')
    .controller('headerCtrl',['$scope','headerSvc',headerCtrl]);