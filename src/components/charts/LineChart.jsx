import { Line } from "react-chartjs-2"
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler
);

const LineChart = props => {

    
 const options = {
    scales: {
        x: {
            grid: {
               display: false
            },
            border: {
                display: false
            }
        },
        y: {
            grid: {
                display:false
            },
            border: {
                display: false
            }   
        }
    }
 }

  const labels = ['', '', '', '', '', '', ''];
  
   const data = {
    labels,
    datasets: [
      {
        fill: true,
        data: [1,2,3,4,5,6,7,10],
        borderColor: ' rgba(255, 217, 0, 1)',
        backgroundColor: 'rgba(246, 222, 88, 0.7)',
      },
    ],
  };

    return <Line options={options} data={data}/>
}

export default LineChart