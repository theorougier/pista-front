import React from "react";
import { Pie } from "@ant-design/charts";

export default function PieChart() {
  const data = [{ name: "A", x: 1, fill: "green", value: 1 }];
  const config = {
    data,
    legend: false,
    angleField: "value",
    colorField: "fill",
    radius: 0.8,
    innerRadius: 0.6,
    label: {
      type: "inner",
      content: "{value}",
    },
  };
  return <Pie {...config} />;
}
