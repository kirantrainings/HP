/**
 * Created by Administrator on 2/22/2016.
 */
function bookCtrl($scope,$http){
    $http.get('app/data/books.json').then(function(response){
       $scope.books=  response.data.books;
    });
}

angular.module('onlineQuiz')
    .controller('bookCtrl',['$scope','$http',bookCtrl]);