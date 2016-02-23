function headerFn(){
    return{
        restrict:"A",
        templateUrl:"app/header/header.tpl.html",
        scope:{
            name:"@",
            userdetails:"=",
            changedetails:"&"
        }
    }
}

header.directive('hpHeader',[headerFn])