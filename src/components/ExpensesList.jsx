import React from 'react';
import '../App.css';

const ExpensesList = ({ expenses }) => {
  return (
    <div className="expenses-list">
      <h3>Expenses List</h3>
      {expenses.length === 0 ? (
        <p>No expenses found.</p>
      ) : (
        <ul>
          {expenses.map((expense) => (
            <li key={expense.id} className="expense-item">
              <span>{expense.title}</span>
              <span>${expense.amount.toFixed(2)}</span>
              <span>{expense.category}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ExpensesList;