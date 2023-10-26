import React, { useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function PieChart({ value }) {
  const dataElement = {
    datasets: [
      {
        data: [(1 - value) * 100, value * 100],
        backgroundColor: ["#6A00BE", "#ffffff"],
        borderWidth: 0,
      },
    ],
  };

  const textCenter = {
    id: "textCenter",
    beforeDatasetsDraw(chart) {
      let { ctx } = chart;
      const canvasWidth = ctx.canvas.width;

      ctx.save();

      ctx.font = `${canvasWidth / 10}px sans-serif`;
      ctx.textAlign = "center";
      ctx.fillStyle = "white";
      ctx.textBaseline = "middle";
      ctx.fillText(
        `${Math.floor(value * 100)}`,
        chart.getDatasetMeta(0).data[0].x,
        chart.getDatasetMeta(0).data[0].y
      );
    },
  };
  const options = {
    plugins: {
      cutout: "78%",
      legend: { display: false },

      tooltip: {
        fontSize: 50,
        mode: "point",
        displayColors: false,
        backgroundColor: "#6A00BE",
        labels: {
          render: "value",
        },
      },
      datalabels: {
        formatter: (value, ctx) => {
            let sum = 0;
            let dataArr = ctx.chart.data.datasets[0].data;
            dataArr.map(data => {
                sum += data;
            });
            let percentage = (value*100 / sum).toFixed(2)+"%";
            console.log(percentage)
            return percentage;
        },
      },
    },
  };


  useEffect(() => {}, [value]);

  return (
    <Doughnut
      data-id="doughnutChart"
      data={dataElement}
      options={options}
      plugins={[textCenter]}
    />
  );
}
