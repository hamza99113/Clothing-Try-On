import React, { useState } from 'react';
import './EditProfileDetails.css';

function EditProfileDetails() {
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
    <div className='editpro'>
      <h2>Edit Profile Details</h2>
      <form onSubmit={handleSubmit}>
        
        <div className='Edit-form-details'>
        <label htmlFor="name" className='editpro-label'>Name:</label>
        <input
          className='editpro-label'
          type="text"
          id="name"
          value={name}
          onChange={handleNameChange}
        /></div>
        
        <div className='Edit-form-details'>
        <label htmlFor="email" className='editpro-label'>Email:</label>
        <input
          className='editpro-label'
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
        /></div>

        <div className='Edit-form-details'>
          <label htmlFor="phone" className='editpro-label'>Phone Number:</label>
          <input
            className='editpro-label'
            type="tel"
            id="phone"
            value={phone}
            onChange={handlePhoneChange}
          /></div>

        <div className='Edit-gen-details'>
          <label htmlFor="gender"className='editpro-label'>Gender:</label>
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
