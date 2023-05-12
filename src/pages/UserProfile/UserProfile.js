import React, {useContext, useState } from 'react';
/*import { useHistory } from 'react-router-dom';*/
import './UserProfile.css';
import { NavLink } from "react-router-dom";
import { themeContext } from "../../Context";

function UserProfile() {

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  
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
    <div className="user-profile-container" style={{ 
      background: darkMode ? "#222" : "", 
      boxShadow: darkMode ? "0 0 10px rgba(255, 255, 255, 0.5)" : "none"
    }}>
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

        <NavLink to="/ChangePassword">
          <button className="changePass-button">
            Change Password
          </button>
        </NavLink>
        
        <NavLink to="/EditProfileDetails">
          <button className="editdetails-button">
            Edit Details
          </button>
        </NavLink>
        
        </div>
      </div>
  );
}

export default UserProfile;
