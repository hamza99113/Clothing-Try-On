import React, { useContext} from "react";
import './PrivacyPolicy.css';
import { themeContext } from "../../Context";

const PrivacyPolicy = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="privacy" style={{ 
      background: darkMode ? "#222" : "", 
      boxShadow: darkMode ? "0 0 10px rgba(255, 255, 255, 0.5)" : "none"
    }}> 
      <h1>Privacy Policy</h1>
      <p style={{ color: darkMode ? "white" : "" }}>Your privacy is important to us. This privacy policy outlines the types of personal information we collect and how we use it when you use our clothing TryOn application.</p>
      <h2>Information We Collect</h2>
      <p style={{ color: darkMode ? "white" : "" }}>When you use our application, we may collect the following types of personal information:</p>
      <ul>
        <li style={{ color: darkMode ? "white" : "" }}>Your name and contact information, such as email and phone number</li>
        <li style={{ color: darkMode ? "white" : "" }}>Your clothing size and measurements</li>
        <li style={{ color: darkMode ? "white" : "" }}>Photos and videos of you trying on clothing items</li>
      </ul>

      <h2>How We Use Your Information</h2>
      <p style={{ color: darkMode ? "white" : "" }}>We use the personal information we collect to:</p>
      <ul>
        <li style={{ color: darkMode ? "white" : "" }}>Provide and improve our TryOn services</li>
        <li style={{ color: darkMode ? "white" : "" }}>Communicate with you about your orders, returns, and other inquiries</li>
        <li style={{ color: darkMode ? "white" : "" }}>Personalize your TryOn experience</li>
        <li style={{ color: darkMode ? "white" : "" }}>Process payments and prevent fraud</li>
        <li style={{ color: darkMode ? "white" : "" }}>Comply with legal obligations</li>
      </ul>

      <h2>Sharing Your Information</h2>
      <p style={{ color: darkMode ? "white" : "" }}>We may share your personal information with:</p>
      <ul>
        <li style={{ color: darkMode ? "white" : "" }}>Third-party service providers who help us provide and improve our services, such as shipping and payment processing companies</li>
        <li style={{ color: darkMode ? "white" : "" }}>Law enforcement agencies, government bodies, and other third parties if we believe disclosure is necessary to comply with a legal obligation or protect our rights or the rights of others</li>
      </ul>

      <h2>Security</h2>
      <p style={{ color: darkMode ? "white" : "" }}>We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure. However, no method of transmission over the internet or electronic storage is completely secure, so we cannot guarantee absolute security.</p>

      <h2>Changes to this Privacy Policy</h2>
      <p style={{ color: darkMode ? "white" : "" }}>We may update this privacy policy from time to time by posting a new version on our website. You should check this page occasionally to ensure you are happy with any changes.</p>

      <h2>Contact Us</h2>
      <p style={{ color: darkMode ? "white" : "" }}>If you have any questions or concerns about this privacy policy, please contact us at support@tryonclothing.com.</p>
    </div>
  );
};

export default PrivacyPolicy;
