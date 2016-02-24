// create angular app
var validationApp = angular.module('validationApp', []);

// create angular controller
validationApp.controller('mainController', function($scope,$rootScope) {

	// function to submit the form after all validation has occurred			
	$scope.submitForm = function(isValid) {
		// check to make sure the form is completely valid
		if (isValid) { 
			alert('our form is amazing');
		}
	};
    $scope.user={password:"kiran"};

    $scope.handleClickEvent = function(){
      console.log("Clicked");
    };
    $rootScope.$on('Clicked',function(event,args){
        console.log('I am Recevied');
    })
});

validationApp.controller('anotherCtrl',function($scope,$rootScope){

    $scope.handleClick = function(){
        $rootScope.$broadcast('Clicked');
    }
})