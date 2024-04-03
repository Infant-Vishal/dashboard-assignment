import React from "react";
import { Bar } from "react-chartjs-2";

const EarningChart = () => {
  // Sample data for 12 months
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Sales Data",
        data: [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200],
        backgroundColor: "rgba(54, 162, 235, 0.6)", 
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  };

 

  return (
    <div>
      <h2>Bar Chart</h2>
      <Bar data={data}  />
    </div>
  );
};

export default EarningChart;
