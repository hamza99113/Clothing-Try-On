import React, { useContext, useState } from 'react';
import './EditProfileDetails.css';
import { themeContext } from "../../Context";

function EditProfileDetails() {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [gender, setGender] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Submit form to update user's profile details
  };

  const handleCancel = () => {
    // Navigate back to previous page
  };

  return (
    <div className='editpro'style={{ 
      background: darkMode ? "#222" : "", 
      boxShadow: darkMode ? "0 0 10px rgba(255, 255, 255, 0.5)" : "none"
    }}>
      <h2>Edit Profile Details</h2>
      <form onSubmit={handleSubmit}>
        
        <div className='Edit-form-details'>
        <label htmlFor="name" className='editpro-label' style={{ color: darkMode ? "white" : "" }}>Name:</label>
        <input
          className='editpro-label'
          type="text"
          id="name"
          value={name}
          onChange={handleNameChange}
        /></div>
        
        <div className='Edit-form-details'>
        <label htmlFor="email" className='editpro-label' style={{ color: darkMode ? "white" : "" }}>Email:</label>
        <input
          className='editpro-label'
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
        /></div>

        <div className='Edit-form-details'>
          <label htmlFor="phone" className='editpro-label' style={{ color: darkMode ? "white" : "" }}>Phone Number:</label>
          <input
            className='editpro-label'
            type="tel"
            id="phone"
            value={phone}
            onChange={handlePhoneChange}
          /></div>

        <div className='Edit-gen-details'>
          <label htmlFor="gender"className='editpro-label' style={{ color: darkMode ? "white" : "" }}>Gender:</label>
        <select id="gender" value={gender} onChange={handleGenderChange}>
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select></div>

        <button type='submit'>Save Changes</button>
        <button type="button" onClick={handleCancel}>Cancel</button>
      </form>
    </div>
  );
}

export default EditProfileDetails;
