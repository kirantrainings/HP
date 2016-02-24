/**
 * Created by Administrator on 12/14/2015.
 */
var serviceFn = function($http,$q){
    this.vehicles=[];
    var vehicles;
    this.getVehicles = function(){
        var defferedObj = $q.defer();
        if(vehicles){
            defferedObj.resolve(vehicles);
        }
        else {
            $http.get('data/vehicles.json').then(function (response) {
                if (response.status == 200) {
                    vehicles = response;
                    defferedObj.resolve(response);
                }
                else {
                    defferedObj.reject(response);
                }
            });
        }
        return defferedObj.promise;
    };
};

app.service('vehicleSvc',['$http','$q',serviceFn])