/**
 * Created by Administrator on 2/22/2016.
 */
function headerCtrl($scope){

   $scope.tabs = [
       {"name":"home","display":"Home","cssClass":"","template":'app/templates/home.html'},
       {"name":"profile","display":"Profile","cssClass":"","template":'app/templates/profile.html'},
       {"name":"about","display":"About","cssClass":"","template":'app/templates/about.html'}
   ];
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
angular.module('onlineQuiz').controller('headerCtrl',['$scope',headerCtrl]);