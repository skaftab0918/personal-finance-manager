import React, { useState } from 'react';
import ExpenseForm from '../components/ExpenseForm';
import ExpenseFilter from '../components/ExpenseFilter';
import ExpenseChart from '../components/ExpenseChart';
import ExpensesList from '../components/ExpensesList'; // New component for displaying expenses
import '../App.css';

const Dashboard = () => {
  // State to store expenses
  const [expenses, setExpenses] = useState([]);

  // State to manage the selected filter category
  const [selectedCategory, setSelectedCategory] = useState('');

  // Function to add a new expense
  const addExpense = (newExpense) => {
    setExpenses((prevExpenses) => [...prevExpenses, newExpense]);
  };

  // Function to handle category filter change
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  // Filter expenses based on the selected category
  const filteredExpenses = selectedCategory
    ? expenses.filter((expense) => expense.category === selectedCategory)
    : expenses;

  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <div className="dashboard-cards">
        <div className="card">
          {/* Pass the addExpense function to ExpenseForm */}
          <ExpenseForm addExpense={addExpense} />
        </div>
        <div className="card">
          {/* Pass the selectedCategory and handleCategoryChange to ExpenseFilter */}
          <ExpenseFilter
            selectedCategory={selectedCategory}
            onCategoryChange={handleCategoryChange}
          />
        </div>
        <div className="card">
          {/* Pass the filtered expenses to ExpenseChart */}
          <ExpenseChart expenses={filteredExpenses} />
        </div>
        <div className="card">
          {/* Display the list of expenses */}
          <ExpensesList expenses={filteredExpenses} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;