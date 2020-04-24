
async function request() {
    let req = await fetch(`https://https://sites.google.com/view/turdboi420api`, { mode: "cors" })
    let res = await req.json().catch(error => notes.innerHTML = "An error occured.")
    document.getElementById("name").innerHTML = "TurdBoi420"
    description.innerHTML = "TurdBoi420 - one of jacks channels"
    count.innerHTML = Math.round(res.estimated)
    notes.innerHTML = "WARNING: This count can behave weirdly due to how it works."
    chart.series[0].addPoint([Date.now(), Math.round(res.estimated)])

}
request()

var chart = new Highcharts.chart({
  chart: {
      renderTo: 'chart',
      type: 'spline',
        zoomType: 'x',
        backgroundColor: 'transparent',
        plotBorderColor: 'transparent'
  },
  title: {
      text: 'Subscriber Graph'
  },
  xAxis: {
      type: 'datetime',
      tickPixelInterval: 500,
        gridLineColor: '#999',
        labels: {
            style: {
                color: '#fff'
            }
        },
        lineColor: '#999',
        minorGridLineColor: '#999',
        tickColor: '#999',
        title: {
            style: {
                color: '#fff'
            }
        }
  },
  yAxis: {
      title: {
          text: ''
      },
        gridLineColor: '#999',
        labels: {
            style: {
                color: '#fff'
            }
        },
        lineColor: '#999',
        minorGridLineColor: '#999',
        tickColor: '#999
  },

  series: [{
    name: 'Subs',
    marker: { enabled: false },
    color: '#fff',
    lineColor: '#fff'
  }]
});



setInterval(request, 5000)
