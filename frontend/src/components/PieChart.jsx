import React, { useEffect, useRef } from "react";
import { Chart } from "chart.js";

const PieChart = ({ percentage }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    let chartInstance = null;
    if (chartRef && chartRef.current) {
      const ctx = chartRef.current.getContext("2d");
      chartInstance = new Chart(ctx, {
        type: "pie",
        data: {
          labels: Object.keys(percentage),
          datasets: [
            {
              data: Object.values(percentage),
              backgroundColor: ["#36a2eb", "#ff6384", "#ffcd56"],
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: false,
        },
      });
    }

    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, [percentage]);

  return (
    <div className="pc-outer-div">
      <h3>Overall Sentiments</h3>
      <canvas ref={chartRef} className="chart-canvas" />
    </div>
  );
};

export default PieChart;
