import { Line } from "react-chartjs-2";

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

  const colorChecker = (type) => {
    console.log(chartData[0][1], chartData[chartData.length - 1][1]);
    if (chartData[0][1] > chartData[chartData.length - 1][1]) {
      return type === 'border' ? "rgba(233, 22, 22, 0.7)" : 'rgba(255, 59, 59, 0.4)';
    } else {
      return type === 'border' ? " rgba(43, 187, 43, 0.8)": 'rgba(43, 187, 43, 0.4)';
    }
  };

  const options = {
    responsive: true,
    tension: 0.1,
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
        borderColor: colorCheck ? colorChecker('border') :  "rgba(255, 217, 0, 0.8)",
        backgroundColor: colorCheck ? colorChecker('background') : "rgb(252, 227, 85, 0.3)",
        pointBorderColor: 'transparent',
        pointBackgroundColor: 'transparent'
      },
    ],
  };

  return <Line options={options} data={data} />;
};

export default LineChart;
