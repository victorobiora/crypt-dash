import { Line } from "react-chartjs-2";
import React from "react";
import "chartjs-plugin-datalabels";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler
);

const LineChart = ({ chartData, colorCheck }) => {
  console.log(chartData);

  const colorChecker = () => {
    console.log(chartData[0][1], chartData[chartData.length - 1][1]);
    if (chartData[0][1] > chartData[chartData.length - 1][1]) {
      return "rgba(233, 22, 22, 0.8)";
    } else {
      return " rgba(43, 187, 43, 0.8)";
    }
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false,
        },
        border: {
          display: false,
        },
        ticks: {
          display: false,
        },
      },
      y: {
        ticks: {
          display: false,
        },
        grid: {
          display: false,
        },
        border: {
          display: false,
        },
      },
    },
  };

  const days = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];

  const YAxisTicks = chartData.map((el) => {
    const chartDay = new Date(el[0]).getUTCDay();
    return days[chartDay];
  });

  const data = {
    labels: YAxisTicks,
    datasets: [
      {
        fill: true,
        data: chartData.map((el) => el[1]),
        borderColor: colorCheck ? colorChecker() :  "rgba(255, 217, 0, 1)",
        backgroundColor: colorCheck ? colorChecker() : "rgb(252, 227, 85, 0.7)",
      },
    ],
  };

  return <Line options={options} data={data} />;
};

export default LineChart;
