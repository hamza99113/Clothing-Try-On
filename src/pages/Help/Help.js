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
          <p style={{ color: darkMode ? "white" : "" }}>Welcome to our Clothing Try-On platform! Our website provides an innovative and user-friendly way to tryupper body outfits from the comfort of your own home. Here's a helpful guide to help you get started:</p>
          <p style={{ color: darkMode ? "white" : "" }}>Upload your photo: The first stepis to upload a photo of yourself. Make sure the photo is well-lit and shows your upper body clearly. You can choose to upload a photo from your computer or take a new one with your webcam.</p>
          <p style={{ color: darkMode ? "white" : "" }}>Choose your outfit: Browse through our collection of t-shirts andupper body outfits. You can filter your search by color, style, and size. Click on an item to see it on your virtual try-on model.</p>
          <p style={{ color: darkMode ? "white" : "" }}>Save and share: Once you've found the perfect outfit, you can save it to your profile or share it on social media. You can also add items to your wish listfor future reference.</p>
        </div>
      </div>
      <div className="section">
        <h2 className="section-title">Frequently Asked Questions:</h2>
        <div className="section-content">
          <br></br>
          <h2 className="section-title">Q: Is my uploaded photo secure?</h2>
          <p style={{ color: darkMode ? "white" : "" }}>A: Yes, we take your privacy and security very seriously. Your photo is only used for the Clothing Try-on and is not shared or sold to third parties.</p>

          <h2 className="section-title">Q: Can I return items if they don't fit?</h2>
          <p style={{ color: darkMode ? "white" : "" }}>A: Our website is a Clothing Try-on platform and we do not sell items directly. Please refer to the return policy of the retailer where you purchased the item.</p>

          <h2 className="section-title">Q: Do you offer Clothing Try-on for other clothing items?</h2>
          <p style={{ color: darkMode ? "white" : "" }}>A: We currently only offer Clothing Try-on for t-shirts and upper body outfits, but we are always looking to expand our offerings. Stay tuned for updates!</p>
        </div>
      </div>
      <div className="section">
        <div className="section-content">
          <p style={{ color: darkMode ? "white" : "" }}>We hope this guide helps you make the most of our Clothing try-on platform. If you have any further questions or feedback, please don't hesitate to contact us. Happy Try-On shopping!</p>
        </div>
      </div>
    </div>
  );
};

export default HelpPage;
