import React from "react";
import "./Settings.css";

function Settings(){
  return (
    <div className="s-wrapper">
      <div className="s-heading">Settings</div>
      <div className="s-content">
        <div className="s-section">
          <div className="s-title">Account Settings</div>
          <div className="s-option">User Profile</div>
          <div className="s-option">Add/Remove profile picture</div>
          <div className="s-option">Edit Profile Details</div>
          <div className="s-option">Change Password</div>
          <div className="s-option">Logout</div>
        </div>
        <div className="s-section">
          <div className="s-title">Dark Mode Settings</div>
          <div className="s-option">Dark Mode</div>
        </div>
        <div className="s-section">
          <div className="s-title">Notification Settings</div>
          <div className="s-option">Enable Push Notifications</div>
        </div>
      </div>
    </div>
  );
}

export default Settings;