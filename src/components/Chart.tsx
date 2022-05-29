import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: false,
    },
  },
};

interface Props {
  data: {
    labels: Array<string>;
    datasets: Array<{
      label: string;
      data: Array<number>;
      backgroundColor: string;
    }>;
  };
}

export function Chart(props: Props) {
  console.log(props);
  return <Bar options={options} data={props.data} />;
}
