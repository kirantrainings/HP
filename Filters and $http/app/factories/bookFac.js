/**
 * Created by Administrator on 2/23/2016.
 */

function bookFacFn($http,$q){

    return{
        getBooks:function(debug){
           // return $http.get('app/data/books.json');
            var def= $q.defer();
            if(!debug) {
                $http.get('app/data/books.json').then(function (response) {
                    if (response.statusText == "OK") {
                        def.resolve(response);
                    }
                    else {
                        def.reject(response);
                    }
                });


            }
            else {
                var result = {data:"success"};
                def.resolve(result);

    }


            return def.promise;
        }
    }
}
angular.module('onlineQuiz')
       .factory('bookFac',['$http','$q',bookFacFn])