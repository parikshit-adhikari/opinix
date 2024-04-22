import React, { useRef, useEffect } from "react";
import Chart from "chart.js/auto";

const SentimentByTopics = ({ sentimentByTopics }) => {
  const chartRef = useRef(null);

  const labels = Object.keys(sentimentByTopics);
  const positiveData = labels.map((label) => sentimentByTopics[label].positive);
  const negativeData = labels.map((label) => sentimentByTopics[label].negative);
  const neutralData = labels.map((label) => sentimentByTopics[label].neutral);

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Positive",
        backgroundColor: "rgba(75,192,192,0.9)",
        data: positiveData,
      },
      {
        label: "Negative",
        backgroundColor: "rgba(255,99,132,0.9)",
        data: negativeData,
      },
      {
        label: "Neutral",
        backgroundColor: "rgba(54, 162, 235, 0.9)",
        data: neutralData,
      },
    ],
  };

  const options = {
    indexAxis: "y",
    scales: {
      x: {
        stacked: true,
        grid: {
          display: false,
        },
      },

      y: {
        stacked: true,
        grid: {
          display: false,
        },
      },
    },
  };

  useEffect(() => {
    if (chartRef && chartRef.current) {
      const chartInstance = new Chart(chartRef.current, {
        type: "bar",
        data: data,
        options: options,
      });

      return () => {
        chartInstance.destroy();
      };
    }
  }, [data, options]);

  return (
    <div className="sbt-outer-div">
      <h3>Sentiment By Topics</h3>
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default SentimentByTopics;
