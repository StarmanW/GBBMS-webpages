function renderGraph(bloodDetails = null) {
    $('.canvasjs-chart-credit').remove();
    
    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        theme: "light2", // "light1", "light2", "dark1", "dark2"
        title: {
            text: "Blood Type's Amount"
        },
        axisY: {
            title: "Packages"
        },
        axisX: {
            title: "Blood Types",
            interval: 1
        },
        data: [{
            type: "column",
            showInLegend: true,
            legendMarkerColor: "red",
            legendText: "Scale: 100 = One Hundred Blood Package",
            dataPoints: [
                { y: 800, label: "A" },
                { y: 920, label: "A-" },
                { y: 300, label: "A+" },
                { y: 800, label: "B" },
                { y: 150, label: "B-" },
                { y: 20, label: "B+"},
                { y: 630, label: "AB" },
                { y: 223, label: "AB-" },
                { y: 520, label: "AB+" },
                { y: 344, label: "O" },
                { y: 660, label: "O-" },
                { y: 550, label: "O+" }
            ]
        }]
    });
    chart.render();
}
