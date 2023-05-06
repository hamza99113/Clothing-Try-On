import React, { useContext} from "react";
import './Help.css';
import { themeContext } from "../../Context";

const HelpPage = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="containers" style={{ 
      background: darkMode ? "#222" : "", 
      boxShadow: darkMode ? "0 0 10px rgba(255, 255, 255, 0.5)" : "none"
    }}>
      <h1>Clothing Try-On Help</h1>
      <div className="section">
        <h2 className="section-title">How does the clothing try-on feature work?</h2>
        <div className="section-content">
          <p style={{ color: darkMode ? "white" : "" }}>The clothing try-on feature uses augmented reality technology to...</p>
          <p style={{ color: darkMode ? "white" : "" }}>When you click on the "Try On" button, the app will use your device's camera...</p>
        </div>
      </div>
      <div className="section">
        <h2 className="section-title">What kind of clothing can I try on?</h2>
        <div className="section-content">
          <p style={{ color: darkMode ? "white" : "" }}>You can try on a variety of clothing items, including...</p>
          <ul>
            <li style={{ color: darkMode ? "white" : "" }}>T-shirts</li>
            <li style={{ color: darkMode ? "white" : "" }}>Pants</li>
            <li style={{ color: darkMode ? "white" : "" }}>Dresses</li>
            <li style={{ color: darkMode ? "white" : "" }}>Skirts</li>
            <li style={{ color: darkMode ? "white" : "" }}>Jackets</li>
            <li style={{ color: darkMode ? "white" : "" }}>And more!</li>
          </ul>
        </div>
      </div>
      <div className="section">
        <h2 className="section-title">Can I save my try-on session?</h2>
        <div className="section-content">
          <p style={{ color: darkMode ? "white" : "" }}>Yes, you can save your try-on session by...</p>
          <p style={{ color: darkMode ? "white" : "" }}>To access your saved try-on sessions, simply...</p>
        </div>
      </div>
    </div>
  );
};

export default HelpPage;
