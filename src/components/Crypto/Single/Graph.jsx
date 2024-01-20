/* eslint-disable react/prop-types */
import { Chart, registerables, scales } from "chart.js";
import { useEffect, useMemo, useState } from "react";
import { Line } from "react-chartjs-2";
Chart.register(...registerables);

function Graph({ data }) {
  const [chartData, setChartData] = useState(null);

  let formattedData;
  if (data) {
    formattedData = useMemo(() => {
      return data.prices.map((entry) => ({
        x: new Date(parseInt(entry[0])).toLocaleString("en-US", {
          month: "short",
          day: "numeric",
        }),
        y: entry[1],
      }));
    }, [data]);
  }

  console.log(data);

  useEffect(() => {
    setChartData({
      labels: formattedData.map((data) => data.x),
      datasets: [
        {
          label: "Price",
          fill: false,
          lineTension: 0,
          borderColor: "#FCD535",
          borderWidth: 2,
          data: formattedData.map((data) => data.y),
        },
      ],
    });
  }, [formattedData]);

  return chartData ? (
    <Line
      data={chartData}
      options={{
        plugins: {
          title: {
            display: true,
            text: "30 Day Price Chart",
            font: {
              size: 20,
            },
          },
        },
        scales: {
          x: {
            title: {
              display: true,
              text: "Day",
              font: {
                size: 18,
              },
            },
          },
          y: {
            title: {
              display: true,
              text: "Price",
              font: {
                size: 18,
              },
            },
          },
        },
        legend: {
          display: true,
          position: "right",
        },
        responsive: true,
        maintainAspectRatio: false,
      }}
    />
  ) : (
    ""
  );
}

export default Graph;
