var fileInput = document.getElementById("upload1"),
    readFile1 = function () {
        var reader = new FileReader();
        reader.onload = function () {
            document.getElementById('out1').innerHTML = reader.result;

            var listOneArray = [];
            var data = reader.result;
            var dataArray = data.split('\n');
            //console.log(dataArray);

            //convert string numbers to ints
            for (var k=0; k<dataArray.length; k++){
                dataArray[k] = Number(dataArray[k]);
            }

            var input1 = convertArray(dataArray);

            displayGraphs(input1, 'graph1');

        };
        // start reading the file. When it is done, calls the onload event defined above.
        reader.readAsBinaryString(fileInput.files[0]);
    };

fileInput.addEventListener('change', readFile1);

var fileInput2 = document.getElementById("upload2"),
    readFile2 = function () {
        var reader = new FileReader();
        reader.onload = function () {
            document.getElementById('out2').innerHTML = reader.result;

            var listOneArray = [];
            var data = reader.result;
            var dataArray = data.split('\n');
            //console.log(dataArray);

            //convert string numbers to ints
            for (var k=0; k<dataArray.length; k++){
                dataArray[k] = Number(dataArray[k]);
            }

            var input1 = convertArray(dataArray);

            displayGraphs(input1, 'graph2');

        };
        // start reading the file. When it is done, calls the onload event defined above.
        reader.readAsBinaryString(fileInput2.files[0]);
    };

fileInput2.addEventListener('change', readFile2);

var fileInput3 = document.getElementById("upload3"),
    readFile = function () {
        var reader = new FileReader();
        reader.onload = function () {
            document.getElementById('out3').innerHTML = reader.result;

            var listOneArray = [];
            var data = reader.result;
            var dataArray = data.split('\n');
            //console.log(dataArray);

            //convert string numbers to ints
            for (var k=0; k<dataArray.length; k++){
                dataArray[k] = Number(dataArray[k]);
            }

            var input1 = convertArray(dataArray);

            displayGraphs(input1, 'graph3');

        };
        // start reading the file. When it is done, calls the onload event defined above.
        reader.readAsBinaryString(fileInput3.files[0]);
    };

fileInput3.addEventListener('change', readFile);

var fileInput4 = document.getElementById("upload4"),
    readFile = function () {
        var reader = new FileReader();
        reader.onload = function () {
            document.getElementById('out4').innerHTML = reader.result;

            var listOneArray = [];
            var data = reader.result;
            var dataArray = data.split('\n');
            //console.log(dataArray);

            //convert string numbers to ints
            for (var k=0; k<dataArray.length; k++){
                dataArray[k] = Number(dataArray[k]);
            }

            var input1 = convertArray(dataArray);

            displayGraphs(input1, 'graph4');

        };
        // start reading the file. When it is done, calls the onload event defined above.
        reader.readAsBinaryString(fileInput4.files[0]);
    };

fileInput4.addEventListener('change', readFile);
function convertArray(listOne){
    var graphOne = new Array(listOne.length);
    for (var i=0; i<listOne.length; i++){
        console.log(listOne[i]);
        graphOne[i] = [listOne[i], 0.5];
    }

    return graphOne;
}

function displayGraphs(graphOneData, graphName){
    var chartColor;
    var lineImage;
    var titleText = {
        graph1: 'Answered Content Questions',
        graph2: 'Unanswered Content Questions',
        graph3: 'Answered Non-Content Questions',
        graph4: 'Unanswered Non-Content Questions'
    }
    console.log(titleText[graphName]);
    //set background color to either orange or blue
    if (graphName == 'graph1' || graphName == 'graph2'){
        chartColor = 'rgb(255, 225, 188)';
        lineImage = 'url(https://image.ibb.co/dKz6nv/Screen_Shot_2017_07_07_at_5_15_08_PM.png)'
    }
    else{
        chartColor = 'rgb(211, 243, 255)';
        lineImage = 'url(https://image.ibb.co/b5CFfF/Screen_Shot_2017_07_07_at_5_17_13_PM.png)';
    }
    Highcharts.chart(graphName, {
        chart: {
            plotBackgroundColor: chartColor,
            type: 'scatter',
            zoomType: 'xy',
            height: '10%'
        },
        title: {
            text: titleText[graphName],
            align: 'left',
            style: {
                fontSize: 18
            },
            margin: 10
        },
        xAxis: {
        min: 0, 
        max: 100,
        labels: {
            enabled: false,
            format: null
            }
        },
        yAxis: {
            min: 0,
            max: 0.5,
            tickInterval: 1,
            title: {
                text: null
            },
            labels: {
                enabled: false,
                format: null
            }
        },
        legend: {
            margin: 0,
            borderColor: 'rgb(255, 255, 255)',        
            maxHeight: 150,
            symbolHeight: 100,
            symbolWidth: 150,
            itemStyle: {
                fontWeight: 'bold',
                fontSize: 0
            },
            title: {
                text: null
            },
            layout: 'horizontal',
            align: 'left',
            verticalAlign: 'top',
            y: 125,
            itemDistance: 45,
            floating: true,
            backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF',
            borderWidth: 1
        },
        plotOptions: {
            scatter: {
                marker: {
                    states: {
                        hover: {
                            enabled: true,
                            lineColor: 'rgb(100,100,100)'
                        }
                    }
                },
                states: {
                    hover: {
                        marker: {
                            enabled: false
                        }
                    }
                },
                tooltip: {
                    headerFormat: '{series.name}</b><br>',
                    pointFormat: 'Class Time: {point.x} minutes in'
                }
            }
        },
        series: [ {
            name: 'Student Response: YES<br>or<br>Wait Time: GREATER THAN 3 SEC',
            data: graphOneData,
            marker: {
                // Icons made by <a href="http://www.flaticon.com/authors/dave-gandy" title="Dave Gandy">Dave Gandy</a> from <a href="http://www.flaticon.com" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
                symbol: lineImage
            }
        }]
    });

}