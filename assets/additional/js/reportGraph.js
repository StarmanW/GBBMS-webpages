const MONTH_NAMES = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const d = new Date();
var prevMonth = MONTH_NAMES[d.getMonth()-1];

var barChart;
var pieChart;

function renderBarGraph(bloodDetails = null) {
    $('.canvasjs-chart-credit').remove();
    
    barChart = new CanvasJS.Chart("barChartContainer", {
        animationEnabled: true,
        theme: "light2", // "light1", "light2", "dark1", "dark2"
        title: {
            text: "Blood Type's Amount Donated (" + prevMonth + ")"
        },
        axisY: {
            title: "Packages"
        },
        axisX: {
            title: "Blood Types",
        },
        data: [{
            type: "column",
            showInLegend: true,
            legendMarkerColor: "red",
            legendText: "Scale: 100 = One Hundred Blood Package",
            dataPoints: [
                { y: 920, label: "A-" },
                { y: 300, label: "A+" },
                { y: 150, label: "B-" },
                { y: 50, label: "B+"},
                { y: 223, label: "AB-" },
                { y: 520, label: "AB+" },
                { y: 660, label: "O-" },
                { y: 550, label: "O+" }
            ]
        }]
    });
    barChart.render();
}

function renderPieChart(bloodDetails = null) {
    $('.canvasjs-chart-credit').remove();
    
    pieChart = new CanvasJS.Chart("pieChartContainer", {
        theme: "light2",
        exportFileName: "Doughnut Chart",
        exportEnabled: false,
        animationEnabled: true,
        title:{
            text: "Blood Donation Turn Up Rate"
        },
        legend:{
            cursor: "pointer",
            itemclick: explodePie
        },
        data: [{
            type: "doughnut",
            innerRadius: 80,
            showInLegend: true,
            toolTipContent: "<b>{name}</b>: ${y} (#percent%)",
            indexLabel: "{name} - #percent%",
            dataPoints: [
                { y: 850, name: "Attended" },
                { y: 200, name: "Absent" }
            ]
        }]
    });
    pieChart.render();

    function explodePie (e) {
        if(typeof (e.dataSeries.dataPoints[e.dataPointIndex].exploded) === "undefined" || !e.dataSeries.dataPoints[e.dataPointIndex].exploded) {
            e.dataSeries.dataPoints[e.dataPointIndex].exploded = true;
        } else {
            e.dataSeries.dataPoints[e.dataPointIndex].exploded = false;
        }
        e.pieChart.render();
    }
}
