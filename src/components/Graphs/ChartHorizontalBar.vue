<script>
import { HorizontalBar, mixins } from "vue-chartjs";
const { reactiveProp } = mixins;

export default {
  extends: HorizontalBar,
  mixins: [reactiveProp],
  props: ["options", "styles", "lines"],
  mounted () {

    this.addPlugin({
      id: 'chart-plugin',
      afterDraw: function (chartInstance) {
        var yScale = chartInstance.scales["y-axis-0"];
        var canvas = chartInstance.chart;
        var ctx = canvas.ctx;
        var index;
        var line;
        var style;
        var yValue;

        if (chartInstance.options.horizontalLine) {
          for (index = 0; index < chartInstance.options.horizontalLine.length; index++) {
            line = chartInstance.options.horizontalLine[index];

            if (!line.style) {
              style = "black";
            } else {
              style = line.style;
            }

            if (line.y) {
              yValue = yScale.getPixelForValue(line.y);
            } else {
              yValue = 0;
            }

            ctx.lineWidth = 3;

            if (yValue) {
              ctx.beginPath();
              ctx.moveTo(0, yValue);
              ctx.lineTo(canvas.width, yValue);
              ctx.strokeStyle = style;
              ctx.stroke();
            }

            if (line.text) {
              ctx.fillStyle = style;
              ctx.fillText(line.text, 0, yValue + ctx.lineWidth);
            }
          }
          return;
        };
      }
    });

    this.renderChart(this.chartData, {
      responsive: true,
      maintainAspectRatio: false,
      "horizontalLine": this.lines,
      legend: {
        display: false
      },
      scales: {
        xAxes: [
          {
            gridLines: {
              color: "rgba(0, 0, 0, 0)"
            }
          }
        ],
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
              stepSize: 1000,
              suggestedMax: 5000,
              autoSkip: true,
              maxTicksLimit: 8
            },
            gridLines: {
              color: "rgba(0, 0, 0, 0.1)"
            }
          }
        ]
      }
    });
  }
};
</script>


<style>
</style>
