/**
 * Created by Administrator on 2/24/2016.
 */
function csComponentfn($compile){
    return {
        link:function(scope,element,attrs){
           // var hmtlComp="<h1>{{userDetails.name}}</h1>";
            var htmlComp =attrs.htmltemplate;
            var el = angular.element(htmlComp),
            //compile the view into a function.
                compiled = $compile(el);
            //append our view to the element of the directive.
            element.append(el);
            //bind our view to the scope!
            //(try commenting out this line to see what happens!)
            compiled(scope);
        }
    }


}

main.directive('csComponent',['$compile',csComponentfn])