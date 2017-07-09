var data = "Categories,Student Talk,Silence,Teacher Talk, 1499351512947,24,13,63";
var dataArray = data.split(',');
console.log(dataArray);

    Highcharts.chart('container', {
        chart: {
            type: 'column'
        },
        colors: ['rgb(255, 139, 0)', 'rgb(224, 224, 224)', 'rgb(0, 191, 255)'],
        title: {
            text: 'TALKING RATIOS IN CLASSROOMS',
            margin: 100,
        },
        xAxis: {
            title: {
                text: 'Class Dates'
            },
            // INPUT CLASS DATES HERE
            categories: dataArray[4]
        },
        yAxis: {
            min: 0,
            max: 100,
            tickInterval: 10,
            title: {
                text: 'Percentages of Talk Time'
            },
            labels: {
                format: '{value}%'
            },
            stackLabels: {
                enabled: true,
                style: {
                    fontWeight: 'bold',
                    color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                }
            }
        },
        legend: {
            align: 'center',
            verticalAlign: 'top',
            y: 40,
            floating: true,
            backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
            borderColor: '#CCC',
            borderWidth: 1,
            shadow: false
        },
        tooltip: {
            headerFormat: '<b>{point.x}</b><br/>',
            pointFormat: '{series.name}: {point.y}%'
        },
        plotOptions: {
            column: {
                stacking: 'normal',
                dataLabels: {
                    format: '{point.y}%',
                    enabled: true,
                    color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
                }
            }
        },  // INPUT TALK PERCENTAGES HERE
        // CLASS 1: INDEX 0 IN LIST
        // CLASS 2: INDEX 1 IN LIST
        // CLASS N: INDEX (N-1) IN LIST
        series: [{
            name: 'Student Talk',
            data: [Number(dataArray[5])]
        }, {
            name: 'Silence',
            data: [Number(dataArray[6])]
        }, {
            name: 'Teacher Talk',
            data: [Number(dataArray[7])]
        }]
      
    });