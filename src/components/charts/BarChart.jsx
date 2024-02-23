import { Bar } from "react-chartjs-2";
import { useSelector } from "react-redux";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Filler
);

const BarChart = (props) => {
  const transferList = useSelector((state) => state.generalDashBoard.transfers);
  
  const chartColors = transferList.map((el) => {
    if (el.mode === "Transfer In") {
      return "rgb(67, 67, 255)";
    } else {
      return "rgba(233, 22, 22, 0.8)";
    }
  });

  const options = {
    responsive: true,
   
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
      },
    }
  };

  const data = {
    labels: transferList.map(el => {
        return el.date
    }),
    datasets: [
      {
        backgroundColor: chartColors,
        maxBarThickness: 15,
        borderWidth: 0.5,
        borderRadius: 12,
        data: transferList.map(el => el.amount),
      },
    ],
  };
  return <Bar data={data} options={options} />;
};

export default BarChart;
