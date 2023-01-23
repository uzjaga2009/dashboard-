var areaChartOptions = {
    series: [{
        name: 'Purchase Orders',
        data: [31, 65, 50, 130, 30, 109,100]
    }],
    chart: {
        width: 700,
        height: 350,
        type: 'area',
        toolbar: {
        show: false,
        },
    },
    colors: [ "#246dec"],
    dataLabels: {
        enabled: false,
    },
    stroke: {
        curve: 'smooth'
    },
    labels: ["1 Dec", "8 Dec", "16 Dec", "20 Dec", "2 Nov", "16 Nov", "20 Apr"],
    markers: {
        size: 0
    },
    yaxis: [
        {
        title: {
        },
        },
        {
        opposite: true,
        },
    ],
    tooltip: {
        shared: true,
        intersect: false,
    }
    };

    var areaChart = new ApexCharts(document.querySelector("#area-chart"), areaChartOptions);
    areaChart.render();