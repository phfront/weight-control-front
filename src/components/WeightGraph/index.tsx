import styles from  './styles.module.scss';
import { Line } from 'react-chartjs-2';
import { ChartData } from 'chart.js';
// import { useEffect, useState } from 'react';

export interface WeightGraphProps {
  dates: string[],
  weights: number[]
}

export function WeightGraph(props: WeightGraphProps) {
  const { dates, weights } = props;

  // const [targetWeights, setTargetWeights] = useState([]);

  // const gen = (initial: number, final: number, n: number) => {
  //   const arr = [initial];
  //   const diff = final - initial;
  //   for (let i = 0; i < n-1; i++) {
  //     arr.push(arr[arr.length - 1] + (diff / n));
  //   }
  //   arr.push(final);
  //   return arr;
  // }

  // useEffect(() => {
  //   setTargetWeights(gen(weights[0], 125.34, weights.length - 1));
  // }, weights);

  const data: ChartData = {
    labels: dates,
    datasets: [
      {
        label: 'Evolução',
        data: weights,
        fill: true,
        backgroundColor: 'rgba(35, 22, 81, 0.5)',
        borderColor: '#231651',
        borderWidth: 5
      },
      // {
      //   label: 'Esperado',
      //   data: targetWeights,
      //   fill: true,
      //   backgroundColor: 'rgba(86, 206, 92, 0.5)',
      //   borderColor: '#165128',
      //   borderWidth: 5
      // },
    ],
  };
  
  const options = {
    scales: {
      yAxes: [
        {
          display: true,
          ticks: {
            beginAtZero: true,
            steps: 10,
            stepValue: 5,
            max: 100
          },
        },
      ],
    },
  };

  return (
    <div className={styles.container}>
      <div className={styles.graphContainer}>
        <Line data={data} options={options} type="line" />
      </div>
    </div>
  )
}
