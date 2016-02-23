/**
 * Created by Administrator on 2/22/2016.
 */
function bookCtrl($scope,bookFac){
    /*$http.get('app/data/books.json').then(function(response){
       $scope.books=  response.data.books;
    });*/

    bookFac.getBooks().then(function(response){
        $scope.books=response.data.books;
    });

    /*bookFac.getBooks().success(function (reponse){
        console.log(reponse);
    }).error(function(response){
        console.log(response);
    });*/
}

angular.module('onlineQuiz')
    .controller('bookCtrl',['$scope','bookFac',bookCtrl]);