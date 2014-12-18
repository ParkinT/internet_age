genericChartData = [
  {name: 'Data Point 0', 
   y: 99, 
   color: '#FFFFFF'},
  {name: 'Data Point 1',
   y: 0, 
   color: '#000000'}
];

genericChartInfo =  {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false
        },
        title: {
            text: 'Chart Text'
        },
        credits: {
            enabled: false
        },
        tooltip: {
            pointFormat: '{point.name}: <b>{point.y} yrs.</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true
                },
                showInLegend: false
            }
        },
        series: [{
            type: 'pie',
            name: 'Series Name',
            data: genericChartData
        }]
    }

/*   THIS IS A BETTER CHART FORMAT TO USE
$(function () {
    $('#container').highcharts({
        chart: {
            type: 'area'
        },
        title: {
            text: 'Portion(s) of your life that included Internet Technology'
        },
        subtitle: {
            text: 'EREH TXET NI LLIF'
        },
        xAxis: {
            categories: ['Internet', 'Google', 'iPad', 'iPhone', 'Star Wars'],
            tickmarkPlacement: 'on',
            title: {
                enabled: false
            }
        },
        yAxis: {
            title: {
                text: 'Percent'
            }
        },
        tooltip: {
            pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.percentage:.1f}%</b> ({point.y:,.0f} millions)<br/>',
            shared: true
        },
        plotOptions: {
            area: {
                stacking: 'percent',
                lineColor: '#ffffff',
                lineWidth: 1,
                marker: {
                    lineWidth: 1,
                    lineColor: '#ffffff'
                }
            }
        },
        series: [{
            name: 'Asia',
            data: [502, 635, 809, 947, 1402, 3634, 5268]
        }, {
            name: 'Africa',
            data: [106, 107, 111, 133, 221, 767, 1766]
        }, {
            name: 'Europe',
            data: [163, 203, 276, 408, 547, 729, 628]
        }, {
            name: 'America',
            data: [18, 31, 54, 156, 339, 818, 1201]
        }, {
            name: 'Oceania',
            data: [2, 2, 2, 6, 13, 30, 46]
        }]
    });
});
*/