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

