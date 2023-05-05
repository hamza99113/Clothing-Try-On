import React from 'react';
import './Help.css';

const HelpPage = () => {
  return (
    <div className="containers">
      <h1>Clothing Try-On Help</h1>
      <div className="section">
        <h2 className="section-title">How does the clothing try-on feature work?</h2>
        <div className="section-content">
          <p>The clothing try-on feature uses augmented reality technology to...</p>
          <p>When you click on the "Try On" button, the app will use your device's camera...</p>
        </div>
      </div>
      <div className="section">
        <h2 className="section-title">What kind of clothing can I try on?</h2>
        <div className="section-content">
          <p>You can try on a variety of clothing items, including...</p>
          <ul>
            <li>T-shirts</li>
            <li>Pants</li>
            <li>Dresses</li>
            <li>Skirts</li>
            <li>Jackets</li>
            <li>And more!</li>
          </ul>
        </div>
      </div>
      <div className="section">
        <h2 className="section-title">Can I save my try-on session?</h2>
        <div className="section-content">
          <p>Yes, you can save your try-on session by...</p>
          <p>To access your saved try-on sessions, simply...</p>
        </div>
      </div>
    </div>
  );
};

export default HelpPage;
