/**
 * Created by Administrator on 2/22/2016.
 */
function headerCtrl($scope,$http){

   $http.get('app/data/header.json').then(function(response){
      console.log(response);
       $scope.tabs=response.data;
   });
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
    .controller('headerCtrl',['$scope','$http',headerCtrl]);