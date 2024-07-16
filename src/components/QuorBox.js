import { Avatar } from "@material-ui/core";
import React from 'react';
import './QuoraBox.css';
//import profilePhoto from './path/to/profilePhoto.jpg'; // Replace with the path to your profile photo
import profilePhoto from './Images/ProfilePhoto.png'
const QuorBox = () => {
  return (
    <div className="box">
      <div className="inputSection">
        <img src={profilePhoto} alt="Profile" className="profilePhoto" />
        <input 
          type="text" 
          placeholder="What do you want to ask/share?" 
          className="inputField" 
        />
      </div>
      <div className="buttonSection">
        <button className="askButton">
          <span className="askIcon">?</span> Ask
        </button>
        <button className="answerButton">
          <span className="answerIcon">✔</span> Answer
        </button>
        <button className="postButton">
          <span className="postIcon">✏️</span> Post
        </button>
      </div>
    </div>
  );
};

export default QuorBox;



