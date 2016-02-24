/**
 * Created by Administrator on 10/6/2015.
 */
var passwordfn = function(){
  return{
      restrict:"A",
      require:'ngModel',
      link:function(scope,element,attrs,ctrl){
        ctrl.$parsers.unshift(handlePassword);

        //ctrl.$formatters.unshift(handlePassword);

          function handlePassword(viewValue){
             var specailCharacters = viewValue.indexOf('@')||viewValue.indexOf('#');
              var alphanumeric = '/^[a-zA-Z0-9]+$/'
             // var regex = RegExp(alphanumeric);
              if(specailCharacters!=-1){
                  ctrl.$setValidity('custompassword',true)
              }
              else {
                  ctrl.$setValidity('custompassword', false)
              }
              return viewValue;
          }
      }
  }
};

validationApp.directive('customPasswordRequired',[passwordfn]);