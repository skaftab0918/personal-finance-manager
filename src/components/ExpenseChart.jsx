import React, { useRef, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import '../App.css';

// Register the required components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ExpenseChart = ({ expenses }) => {
  const chartRef = useRef(null);

  // Process expenses data for the chart
  const categories = ['Food', 'Transport', 'Entertainment'];
  const data = {
    labels: categories,
    datasets: [
      {
        label: 'Expenses',
        data: categories.map((category) =>
          expenses
            .filter((expense) => expense.category === category)
            .reduce((sum, expense) => sum + expense.amount, 0)
        ),
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Expense Chart',
      },
    },
  };

  // Destroy the chart on unmount
  useEffect(() => {
    const chart = chartRef.current;

    return () => {
      if (chart) {
        chart.destroy();
      }
    };
  }, []);

  return (
    <div className="expense-chart">
      <Bar ref={chartRef} data={data} options={options} />
    </div>
  );
};

export default ExpenseChart;