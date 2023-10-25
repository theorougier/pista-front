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
    cutout: "78%",
    plugins: {
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
    },
  };
  return (
    <Doughnut data-id="doughnutChart" data={dataElement} options={options} />
  );
}
