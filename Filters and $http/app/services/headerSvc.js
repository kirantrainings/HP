/**
 * Created by Administrator on 2/23/2016.
 */


function headerSvcFn($http){
 this.getHeaderInformation =function(){
    return $http.get('app/data/header.json') ;
 };
    this.getStaticInfo= function(){
      return [{name:"Kiran",age:"30",profession:"Trainer"},
          {name:"PVS",age:"40",profession:"Developer"},
      ]
    };
}


angular.module('onlineQuiz')
    .service('headerSvc',['$http',headerSvcFn])