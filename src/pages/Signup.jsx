import React from 'react';
import '../App.css';

const Signup = () => {
  return (
    <div className="signup-page">
      <h2>Signup</h2>
      <form className="signup-form">
        <input type="text" placeholder="Username" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Signup</button>
      </form>
      <p>Already have an account? <a href="/">Login</a></p>
    </div>
  );
};

export default Signup;