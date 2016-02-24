 var factoryFn = function($http,$q){
    return{
        navItems:function(){
           var dfd = $q.defer();
            //dfd object contains the following . promise,reject(), resolve();
              $http.get('data/navigation.json')
                  .success(function(response){
                     if(response.status==200){
                         dfd.resolve(response.data.navItems);
                     }
                     else{
                         dfd.reject("error");
                     }
                  }).error(function(response){
                      dfd.reject("error");
                  });

            return dfd.promise;
        }
    };
};


//step 1 declaration.
header.factory('navigationFactory',['$http','$q',factoryFn])