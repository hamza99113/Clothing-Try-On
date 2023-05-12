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
      <p style={{ color: darkMode ? "white" : "" }}>Your privacy is important to us, and we are committed to protecting your personal information. This privacy policy explains how we collect, use, and protect your personal information on our virtual try-on platform.</p>
      <h2>What personal information do we collect?</h2>
      <p style={{ color: darkMode ? "white" : "" }}>When you use our application, we may collect the following types of personal information:</p>
      <ul>
        <li style={{ color: darkMode ? "white" : "" }}>Your name and contact information, such as email and phone number.</li>
        <li style={{ color: darkMode ? "white" : "" }}>Your uploaded photo: We collect your photo to provide the virtual try-on service.</li>
        <li style={{ color: darkMode ? "white" : "" }}>Your location: We may collect your location if you provide consent.</li>
        <li style={{ color: darkMode ? "white" : "" }}>Your device information: We collect information about your device, including your IP address, browser type, and operating system.</li>
      </ul>

      <h2>How We Use Your Information</h2>
      <p style={{ color: darkMode ? "white" : "" }}>We use your personal information for the following purposes:</p>
      <ul>
        <li style={{ color: darkMode ? "white" : "" }}>Provide and improve our TryOn services</li>
        <li style={{ color: darkMode ? "white" : "" }}>Communicate with you about your orders, returns, and other inquiries</li>
        <li style={{ color: darkMode ? "white" : "" }}>Personalize your TryOn experience</li>
        <li style={{ color: darkMode ? "white" : "" }}>Process payments and prevent fraud</li>
        <li style={{ color: darkMode ? "white" : "" }}>Comply with legal obligations</li>
        <li style={{ color: darkMode ? "white" : "" }}>To improve our website: We may use your device information to optimize our website for your device and browser.</li>
        <li style={{ color: darkMode ? "white" : "" }}>To provide the virtual try-on service: We use your photo to create a virtual try-on model, which allows you to try on t-shirts and upper body outfits.</li>
        <li style={{ color: darkMode ? "white" : "" }}>To personalize your experience: We may use your location to provide location-based recommendations and offers.</li>
      </ul>

      <h2>How do we protect your personal information?</h2>
      <p style={{ color: darkMode ? "white" : "" }}>We use your personal information for the following purposes:</p>
      <ul>
        <li style={{ color: darkMode ? "white" : "" }}>We take appropriate security measures to protect your personal information from unauthorized access, use, or disclosure. We use industry-standard encryption technology to ensure the confidentiality of your data.</li>
      </ul>

      <h2>Do we share your personal information?</h2>
      <p style={{ color: darkMode ? "white" : "" }}>We do not sell or share your personal information with third parties, except in the following cases:</p>
      <ul>
        <li style={{ color: darkMode ? "white" : "" }}>Service providers: We may share your personal information with service providers who assist us in providing the virtual try-on service.</li>
        <li style={{ color: darkMode ? "white" : "" }}>Legal requirements: We may share your personal information to comply with legal requirements, such as a court order or subpoena.</li>
      </ul>

      <h2>How can you access and control your personal information?</h2>
      <p style={{ color: darkMode ? "white" : "" }}>You have the right to access, correct, or delete your personal information at any time. You can do so by logging into your account and making the necessary changes. You can also contact us to request access or deletion of your personal information.</p>


      <h2>Security</h2>
      <p style={{ color: darkMode ? "white" : "" }}>We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure. However, no method of transmission over the internet or electronic storage is completely secure, so we cannot guarantee absolute security.</p>

      <h2>Changes to this Privacy Policy</h2>
      <p style={{ color: darkMode ? "white" : "" }}>We may update this privacy policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any significant changes by posting a notice on our website or sending you an email. You should check this page occasionally to ensure you are happy with any changes.</p>

      <h2>Contact Us</h2>
      <p style={{ color: darkMode ? "white" : "" }}>If you have any questions or concerns about this privacy policy, please contact us at support@tryonclothing.com.</p>
    </div>
  );
};

export default PrivacyPolicy;
