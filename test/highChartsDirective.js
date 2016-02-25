/**
 * Created by Administrator on 2/25/2016.
 */
var high = angular.module('highCharts',[]);
high.controller('highChartsCtrl',function($scope,$http){
    $scope.ctrlChart="StockChart";
    $http.get("package.json").then(function(response) {
        $scope.data = response.data;

        $scope.config = {
            chart: {
                alignTicks: false
            },

            rangeSelector: {
                selected: 1
            },

            title: {
                text: 'AAPL Stock Volume'
            },

            series: [{
                type: 'column',
                name: 'AAPL Stock Volume',
                data: $scope.data,
                dataGrouping: {
                    units: [[
                        'week', // unit name
                        [1] // allowed multiples
                    ], [
                        'month',
                        [1, 2, 3, 4, 6]
                    ]]
                }
            }]
        };
    })
});
high.directive('csHighCharts',[function(){
    return{
        scope:{
            chartType:"@",
            chartConfig:"="
        },
        link:function(scope,ele,attrs){

            $(ele).find('button').bind('click',function(){
                $('#container').highcharts(scope.chartType,scope.chartConfig);
            })

        }
    }
}]);