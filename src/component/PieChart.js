import React from "react";
import { Doughnut } from "react-chartjs-2";
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function PieChart({ data }) {
  const dataElement = {
    datasets: [
      {
        data: data.map((elem) => {
          return elem.value;
        }),
        backgroundColor: ["#6A00BE", "#ffffff"],
        borderWidth: 0,
      },
    ],
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
        callbacks: {
          label: function (tooltipItem) {
            return tooltipItem.dataset.data[tooltipItem.dataIndex];
          },
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

  return (
    <Doughnut data-id="doughnutChart" data={dataElement} options={options} />
  );
}
