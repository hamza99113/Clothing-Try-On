import React from 'react';
import './Complaints.css';

const Complaints = () => {
  return (
    <div className="container">
      <h1 className="title">File a Complaint</h1>
      <form className="complaint-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <input type="tel" id="phone" name="phone" required />
        </div>
        <div className="form-group">
          <label htmlFor="complaint-type">Complaint Type:</label>
          <select id="complaint-type" name="complaint-type" required>
            <option value="">-- Select a type --</option>
            <option value="product-quality">Product Quality</option>
            <option value="customer-service">Customer Service</option>
            <option value="shipping-delivery">Shipping & Delivery</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>
        </div>
        <button type="submit" style={{ fontSize: '18px', padding: '10px 20px', borderRadius: '4px', border: 'none', backgroundColor: '#088178', color: '#fff', cursor: 'pointer', Width: '400px', transition: 'background-color 0.3s ease', ':hover': { backgroundColor: '#fff', color: '#4CAF50' } }}>Submit Complaint</button>
      </form>
    </div>
  );
};

export default Complaints;
