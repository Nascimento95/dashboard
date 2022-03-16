import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Line } from "react-chartjs-2";
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

export default function LineChart(props) {
  return (
    <div className="chart-container">
      <Line
        redraw={true}
        data={{
          labels: [
            props.data[0],
            props.data[1],
            props.data[2],
            props.data[3],
            props.data[4],
            props.data[5],
          ],
          datasets: [
            {
              label: props.name,
              data: props.data,
              backgroundColor: ["rgba(255, 99, 132, 0.8)"],
              borderColor: ["rgba(255, 99, 132, 1)"],
              borderWidth: 1,
            },
          ],
        }}
        options={{
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                  min: 0,
                  max: 20,
                },
              },
            ],
          },
          legend: {
            labels: {
              boxWidth: 0,
            },
          },
        }}
      />
    </div>
  );
}
