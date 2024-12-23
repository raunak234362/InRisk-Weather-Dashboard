/* eslint-disable react/prop-types */

import { Line } from "react-chartjs-2";

const Graph = ({ data }) => {
  const chartData = {
    labels: data.dates,
    datasets: [
      {
        label: "Max Temp (°C)",
        data: data.maxTemps,
        borderColor: "red",
        fill: false,
      },
      {
        label: "Min Temp (°C)",
        data: data.minTemps,
        borderColor: "blue",
        fill: false,
      },
      {
        label: "Mean Temp (°C)",
        data: data.meanTemps,
        borderColor: "green",
        fill: false,
      },
    ],
  };

  return <Line data={chartData} />;
};

export default Graph;
