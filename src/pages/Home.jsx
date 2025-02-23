import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <div className="hero-section">
        <h1>Welcome to the Personal Finance Manager</h1>
        <p>Take control of your finances with our easy-to-use tools.</p>
        <Link to="/dashboard" className="cta-button">
          Get Started
        </Link>
      </div>

      {/* Features Section */}
      <div className="features-section">
        <h2>Why Choose Us?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Track Expenses</h3>
            <p>Easily track your daily expenses and categorize them for better insights.</p>
          </div>
          <div className="feature-card">
            <h3>Set Budgets</h3>
            <p>Create and manage budgets to achieve your financial goals.</p>
          </div>
          <div className="feature-card">
            <h3>Visualize Data</h3>
            <p>View your financial data in interactive charts and graphs.</p>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="testimonials-section">
        <h2>What Our Users Say</h2>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <p>"This app has completely changed how I manage my finances. Highly recommended!"</p>
            <p className="author">- sk</p>
          </div>
          <div className="testimonial-card">
            <p>"The budgeting tools are fantastic. I’ve saved so much money since I started using it."</p>
            <p className="author">- Aftab</p>
          </div>
          <div className="testimonial-card">
            <p>"The charts make it so easy to understand where my money is going. Love it!"</p>
            <p className="author">- SK</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="footer">
        <p>© 2025 Personal Finance Manager . Developed by Aftab sk.</p>
        <div className="footer-links">
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/privacy">Privacy Policy</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;