/**
 * Created by Administrator on 2/24/2016.
 */
validationApp.directive('ngEnter', function() {
    return function (scope, element, attrs) {
        element.bind("keydown keypress", function (event) {
            if (event.which === 13) {
                scope.$apply(function () {
                    scope.$eval(attrs.ngEnter);
                });

                event.preventDefault();
            }
        });
    }
});


validationApp.directive('ngNumericsOnly', function() {
    return function (scope, element, attrs) {
        $(element).bind("keydown keypress", function (e) {
            var k = e.which;
            /* numeric inputs can come from the keypad or the numeric row at the top */
            if ( (k < 48 || k > 57) && (k < 96 || k > 105)) {
                e.preventDefault();
                return false;
            }
        });
    }
});
