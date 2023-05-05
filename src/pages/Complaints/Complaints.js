import React from 'react';
import './Complaints.css';

const Complaints = () => {
  return (
    <div className="container">
      <h1>File a Complaint</h1>
      <form className="complaint-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" className='editpro-label' required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" className='editpro-label' required />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <input type="tel" id="phone" name="phone" className='editpro-label' required />
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
        <button type='submit'>Submit Complaint</button>
      </form>
    </div>
  );
};

export default Complaints;
