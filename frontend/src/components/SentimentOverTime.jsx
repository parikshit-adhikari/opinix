import React, { useRef, useEffect } from "react";
import Chart from "chart.js/auto";

const SentimentOverTime = ({ sentimentOverTime }) => {
  const chartRef = useRef(null);

  const labels = sentimentOverTime.map((entry) => entry.date);
  const positiveData = sentimentOverTime.map((entry) => entry.positive);
  const negativeData = sentimentOverTime.map((entry) => entry.negative);
  const neutralData = sentimentOverTime.map((entry) => entry.neutral);

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Positive",
        borderColor: "rgba(75,192,192,0.9)",
        fill: false,
        data: positiveData,
      },
      {
        label: "Negative",
        borderColor: "rgba(255,99,132,0.9)",
        fill: false,
        data: negativeData,
      },
      {
        label: "Neutral",
        borderColor: "rgba(54, 162, 235, 0.9)",
        fill: false,
        data: neutralData,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        scaleLabel: {
          display: true,
          labelString: "Date",
        },
      },
      y: {
        scaleLabel: {
          display: true,
          labelString: "Sentiments",
        },
      },
    },
  };

  useEffect(() => {
    if (chartRef && chartRef.current) {
      const chartInstance = new Chart(chartRef.current, {
        type: "line",
        data: data,
        options: options,
      });

      return () => {
        chartInstance.destroy();
      };
    }
  }, [data, options]);

  return (
    <div className="sot-outer-div">
      <h3>Sentiment Over Time</h3>
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default SentimentOverTime;
