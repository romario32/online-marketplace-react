import {useEffect} from 'react'
import Chart from 'chart.js/auto';
// new Date().getFullYear()
export default function Graph() {
  useEffect(() => {
    var config = {
      type: "bar",
      data: {
        labels: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        datasets: [
          {
            label: "Product Views",
            backgroundColor: "rgb(255, 99, 132, 0.5)",
            borderColor: "rgb(255, 99, 132)",
            data: [65, 78, 66, 44, 56, 67, 75],
            fill: false,
          },
          {
            label: "Product Orders",
            fill: false,
            backgroundColor: "rgb(54, 162, 235, 0.5)",
            borderColor: "rgb(54, 162, 235)",
            data: [40, 68, 86, 74, 56, 60, 87],
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        title: {
          display: false,
          text: "Sales Charts",
          fontColor: "white",
        },
        legend: {
          labels: {
            fontColor: "white",
          },
          align: "end",
          position: "bottom",
        },
        tooltips: {
          mode: "index",
          intersect: false,
        },
        hover: {
          mode: "nearest",
          intersect: true,
        },
        scales: {
          xAxes: [
            {
              ticks: {
                fontColor: "rgba(255,255,255,.7)",
              },
              display: true,
              scaleLabel: {
                display: false,
                labelString: "Month",
                fontColor: "white",
              },
              gridLines: {
                display: false,
                borderDash: [2],
                borderDashOffset: [2],
                color: "rgba(33, 37, 41, 0.3)",
                zeroLineColor: "rgba(0, 0, 0, 0)",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
              },
            },
          ],
          yAxes: [
            {
              ticks: {
                fontColor: "rgba(255,255,255,.7)",
              },
              display: true,
              scaleLabel: {
                display: false,
                labelString: "Value",
                fontColor: "white",
              },
              gridLines: {
                borderDash: [3],
                borderDashOffset: [3],
                drawBorder: false,
                color: "rgba(255, 255, 255, 0.15)",
                zeroLineColor: "rgba(33, 37, 41, 0)",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
              },
            },
          ],
        },
      },
    };
    var ctx = document.getElementById("line-chart").getContext("2d");
    window.myLine = new Chart(ctx, config);
  }, []);
  return (
    <>
      <div className="relative flex-col min-w-0 break-words w-full max-h-80  mb-6 rounded bg-blueGray-700">
        <div className="rounded-t mb-0 px-4 py-1 bg-transparent">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full max-w-full flex-grow flex-1">
              <h2 className="text-center sm:text-left mb-1 text-lg font-bold">
                Account Activity Overview
                <span className="block text-xs text-slate-500">Product Views & Orders Statistics</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="flex-auto">
          {/* Chart */}
          <div className="relative overflow-x-scroll h-36 w-auto sm:h-60 md:h-72 lg:h-80">
            <canvas id="line-chart"></canvas>
          </div>
        </div>
      </div>
    </>
  );
}
