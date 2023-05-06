import React, { useContext , useState} from "react";
import './ChangePassword.css';
import { themeContext } from "../../Context";

const ChangePasswordPage = () => {

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [error, setError] = useState(null);

  const handleCurrentPasswordChange = (event) => {
    setCurrentPassword(event.target.value);
  };

  const handleNewPasswordChange = (event) => {
    setNewPassword(event.target.value);
  };

  const handleConfirmNewPasswordChange = (event) => {
    setConfirmNewPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform validation checks
    if (currentPassword === '') {
      setError('Please enter your current password');
      return;
    }

    if (newPassword === '') {
      setError('Please enter a new password');
      return;
    }

    if (newPassword !== confirmNewPassword) {
      setError('New password and confirm password do not match');
      return;
    }

    // Call API to change password
    // ...

    // Reset form
    setCurrentPassword('');
    setNewPassword('');
    setConfirmNewPassword('');
    setError(null);
  };

  return (
    <div className='ChangePasswordPage' style={{ 
      background: darkMode ? "#222" : "", 
      boxShadow: darkMode ? "0 0 10px rgba(255, 255, 255, 0.5)" : "none"
    }}>
      <h1 style={{ color: darkMode ? "white" : "" }}>Change Password</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="currentPassword" style={{ color: darkMode ? "white" : "" }}>Current Password:</label>
          <input type="password" id="currentPassword" value={currentPassword} onChange={handleCurrentPasswordChange}  />
        </div>
        <div>
          <label htmlFor="newPassword" style={{ color: darkMode ? "white" : "" }}>New Password:</label>
          <input type="password" id="newPassword" value={newPassword} onChange={handleNewPasswordChange}/>
        </div>
        <div>
          <label htmlFor="confirmNewPassword" style={{ color: darkMode ? "white" : "" }}>Confirm New Password:</label>
          <input type="password" id="confirmNewPassword" value={confirmNewPassword} onChange={handleConfirmNewPasswordChange}/>
        </div>
        {error && <div>{error}</div>}
        <button type="submit">Change Password</button>
      </form>
    </div>
  );
};

export default ChangePasswordPage;