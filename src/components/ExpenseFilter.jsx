import React from 'react';
import '../App.css';

const ExpenseFilter = ({ selectedCategory, onCategoryChange }) => {
  return (
    <div className="expense-filter">
      <h3>Filter Expenses</h3>
      <select
        value={selectedCategory}
        onChange={(e) => onCategoryChange(e.target.value)}
      >
        <option value="">All Categories</option>
        <option value="Food">Food</option>
        <option value="Transport">Transport</option>
        <option value="Entertainment">Entertainment</option>
      </select>
    </div>
  );
};

export default ExpenseFilter;