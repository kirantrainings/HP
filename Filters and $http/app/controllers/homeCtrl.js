/**
 * Created by Administrator on 2/22/2016.
 */

function homeCtrl($scope,$filter){

    $scope.topics = [{id:100,name:"Angularjs",mainGroup:"js"},
        {id:101,name: "Net",mainGroup:"MicroSoft"},
        {id:102,name:"javascript",mainGroup:"js"},
        {id:103,name:"Java",mainGroup:"Java"}];

    $scope.formatPhone = function(){
       $scope.formattedPhone= $filter('phoneFormatter')($scope.userPhone,"US");
    }
}


angular.module('onlineQuiz')
    .controller('homeCtrl',['$scope','$filter',homeCtrl]);