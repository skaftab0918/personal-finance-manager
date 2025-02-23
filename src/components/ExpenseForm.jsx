import React, { useState } from 'react';
import '../App.css';

const ExpenseForm = ({ addExpense }) => {
  const [expense, setExpense] = useState({ title: '', amount: '', category: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    addExpense({
      ...expense,
      id: Math.random().toString(),
      amount: parseFloat(expense.amount),
    });
    setExpense({ title: '', amount: '', category: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="expense-form">
      <h3>Add Expense</h3>
      <input
        type="text"
        placeholder="Title"
        value={expense.title}
        onChange={(e) => setExpense({ ...expense, title: e.target.value })}
        required
      />
      <input
        type="number"
        placeholder="Amount"
        value={expense.amount}
        onChange={(e) => setExpense({ ...expense, amount: e.target.value })}
        required
      />
      <select
        value={expense.category}
        onChange={(e) => setExpense({ ...expense, category: e.target.value })}
        required
      >
        <option value="">Select Category</option>
        <option value="Food">Food</option>
        <option value="Transport">Transport</option>
        <option value="Entertainment">Entertainment</option>
      </select>
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;