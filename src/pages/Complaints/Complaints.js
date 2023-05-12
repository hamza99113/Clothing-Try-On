import React, { useContext} from "react";
import './Complaints.css';
import { themeContext } from "../../Context";

const Complaints = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="container" style={{ 
      background: darkMode ? "#222" : "", 
      boxShadow: darkMode ? "0 0 10px rgba(255, 255, 255, 0.5)" : "none"
    }}>
      <h1>File a Complaint</h1>
      <form className="complaint-form">
        <div className="form-group">
          <label htmlFor="name" style={{ color: darkMode ? "white" : "" }}>Name:</label>
          <input type="text" id="name" name="name" className='editpro-label' required />
        </div>
        <div className="form-group">
          <label htmlFor="email" style={{ color: darkMode ? "white" : "" }}>Email:</label>
          <input type="email" id="email" name="email" className='editpro-label' required />
        </div>
        <div className="form-group">
          <label htmlFor="phone" style={{ color: darkMode ? "white" : "" }}>Phone:</label>
          <input type="tel" id="phone" name="phone" className='editpro-label' required />
        </div>
        <div className="form-group">
          <label htmlFor="complaint-type" style={{ color: darkMode ? "white" : "" }}>Complaint Type:</label>
          <select id="complaint-type" name="complaint-type" required>
            <option value="">-- Select a type --</option>
            <option value="product-quality">Product Quality</option>
            <option value="customer-service">Customer Service</option>
            <option value="shipping-delivery">Shipping & Delivery</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="message" style={{ color: darkMode ? "white" : "" }}>Message:</label>
          <textarea id="message" name="message" required></textarea>
        </div>
        <button type='submit'>Submit Complaint</button>
      </form>
    </div>
  );
};

export default Complaints;
