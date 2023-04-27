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
            <i className="fas fa-camera"></i>
          </label>
          <input
            type="file"
            id="profile-picture"
            onChange={handlePictureChange}
          />
          <button onClick={handleRemovePicture}>Remove</button>
        </div>
      </div>
      <div className="user-info">
        <h2 className="user-name">John Doe</h2>
        <p className="user-bio">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at semper odio. Sed vitae commodo risus, ut cursus tellus.</p>
        <ul className="user-stats">
          <li>
            <span className="stat-label">Followers:</span>
            <span className="stat-value">500</span>
          </li>
          <li>
            <span className="stat-label">Following:</span>
            <span className="stat-value">250</span>
          </li>
          <li>
            <span className="stat-label">Posts:</span>
            <span className="stat-value">1000</span>
          </li>
        </ul>
        <button className="logout-button" onClick={handleLogout}>Logout</button>

        <button>
        <NavLink to="/ChangePassword">
            <div>Change Password</div>
        </NavLink>
        </button>
        
        <NavLink to="/EditProfileDetails">
            <div>Edit Profile Details</div>
        </NavLink>
      </div>
    </div>
  );
}

export default UserProfile;
