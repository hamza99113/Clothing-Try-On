import React, { useState } from 'react';
/*import { useHistory } from 'react-router-dom';*/
import './UserProfile.css';
import { NavLink } from "react-router-dom";

function UserProfile() {
  const [profilePicture, setProfilePicture] = useState('https://via.placeholder.com/150');
  /*const history = useHistory();*/

  const handlePictureChange = (event) => {
    setProfilePicture(URL.createObjectURL(event.target.files[0]));
  };

  const handleRemovePicture = () => {
    setProfilePicture('https://via.placeholder.com/150');
  };

  const handleLogout = () => {
    // clear user authentication and redirect to login page
    localStorage.removeItem('authToken');
    /*history.push('/login');*/
  };

  return (
    <div className="user-profile-container">
      <div className="user-avatar">
        <img src={profilePicture} alt="user avatar" />
        <div className="edit-profile-picture">
          <label htmlFor="profile-picture">
            <h4>Profile pictue</h4>
          </label>
          <input
            type="file"
            id="profile-picture"
            onChange={handlePictureChange}
          />
          <button className="remove-button"onClick={handleRemovePicture}>Remove</button>
        </div>
      </div>
      <div className="user-info">
        <h2 className="user-name">John Doe</h2>
      </div>
        
        <div className='sett-bt'>
        <button className="logout-button" onClick={handleLogout}>Logout</button>

        <button className="changePass-button">
        <NavLink to="/ChangePassword">
            <div className='textsss'>Change Password</div>
        </NavLink>
        </button>
        
        <button className="editdetails-button">
        <NavLink to="/EditProfileDetails">
            <div className='textsss'>Edit Details</div>
        </NavLink>
        </button>
        </div>
      </div>
  );
}

export default UserProfile;
