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
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={handleNameChange}
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
        />

        <label htmlFor="phone">Phone Number:</label>
        <input
          type="tel"
          id="phone"
          value={phone}
          onChange={handlePhoneChange}
        />

        <label htmlFor="gender">Gender:</label>
        <select id="gender" value={gender} onChange={handleGenderChange}>
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>

        <button type='submit'>Save Changes</button>

        <button type="button" onClick={handleCancel}>Cancel</button>
      </form>
    </div>
  );
}

export default EditProfileDetails;
