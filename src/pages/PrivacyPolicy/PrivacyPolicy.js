import React from 'react';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
  return (
    <div className="privacy"> 
      <h1>Privacy Policy</h1>
      <p>Your privacy is important to us. This privacy policy outlines the types of personal information we collect and how we use it when you use our clothing TryOn application.</p>
      <h2>Information We Collect</h2>
      <p>When you use our application, we may collect the following types of personal information:</p>
      <ul>
        <li>Your name and contact information, such as email and phone number</li>
        <li>Your clothing size and measurements</li>
        <li>Photos and videos of you trying on clothing items</li>
      </ul>

      <h2>How We Use Your Information</h2>
      <p>We use the personal information we collect to:</p>
      <ul>
        <li>Provide and improve our TryOn services</li>
        <li>Communicate with you about your orders, returns, and other inquiries</li>
        <li>Personalize your TryOn experience</li>
        <li>Process payments and prevent fraud</li>
        <li>Comply with legal obligations</li>
      </ul>

      <h2>Sharing Your Information</h2>
      <p>We may share your personal information with:</p>
      <ul>
        <li>Third-party service providers who help us provide and improve our services, such as shipping and payment processing companies</li>
        <li>Law enforcement agencies, government bodies, and other third parties if we believe disclosure is necessary to comply with a legal obligation or protect our rights or the rights of others</li>
      </ul>

      <h2>Security</h2>
      <p>We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure. However, no method of transmission over the internet or electronic storage is completely secure, so we cannot guarantee absolute security.</p>

      <h2>Changes to this Privacy Policy</h2>
      <p>We may update this privacy policy from time to time by posting a new version on our website. You should check this page occasionally to ensure you are happy with any changes.</p>

      <h2>Contact Us</h2>
      <p>If you have any questions or concerns about this privacy policy, please contact us at support@tryonclothing.com.</p>
    </div>
  );
};

export default PrivacyPolicy;
