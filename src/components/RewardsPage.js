import React from 'react';
import './Sidebar.js';
import './Widget.js'
import './RewardsPage.css'; 
import ProfileImage from 'src\components\Images\ProfilePhoto.png'; // Add the correct path to your profile image
import FAQIcon from 'https://fontawesome.com/icons'; // Add the correct path to your FAQ icon

const RewardsPage = () => {
  return (
    <div className="rewards-container">
      <div className="rewards-header">
        <img className="profile-image" src={ProfileImage} alt="Profile" />
        <div className="rewards-title">For You</div>
        <i class="fas fa-question"aria-hidden="true"></i>
      </div>
      <div className="points-card">
        <div className="points-header">Available Points</div>
        <div className="points-amount">12,043</div>
        <div className="points-equivalent">Equals $144.21</div>
        <div className="points-progress-bar">
          <div className="points-progress" style={{ width: '60%' }}></div>
        </div>
      </div>
      <div className="actions-container">
        <div className="action-card">  
          <div className="action-icon">$</div>
          <div className="action-text">Earn</div>
        </div>
        <div className="action-card">
          <div className="action-icon">🎁</div>
          <div className="action-text">Redeem</div>
        </div>
      </div>
      <div className="referral-section">
        <div className="referral-text">Refer your Friends</div>
        <div className="referral-details">
          <p>you get coupon voucher</p>
          <p>They get free shipping coupon</p>
        </div>
        <div className="referral-terms">**terms & conditions apply**</div>
      </div>
    </div>
  );
}

export default RewardsPage;
