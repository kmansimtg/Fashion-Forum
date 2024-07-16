import { Add } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import "./SidebarOption.css";
import RewardIcon from './Images/Reward.png'
import LeaderIcon from './Images/Leader.png'
import FollowingIcon from './Images/Following.png'
import SavedIcon from './Images/Saved.png'
function SidebarOptions() {
  return (
    <div className="sidebarOptions"style={{ backgroundColor: 'lightpurple' }}>
      <div className="sidebarOption">
      <img className="h-[30px]"src={FollowingIcon}>
      </img>
        <h3>Following</h3>
      </div>

      <div className="sidebarOption">
        
      <img className="h-[30px]"src={LeaderIcon}>
      </img>
        <h3>LeaderBoard</h3>
      </div>
      
      <div>
      <Link to="src\components\RewardsPage.js" className="sidebarOption">
        <img className="h-[30px]" src={RewardIcon} alt="Rewards Icon" />
        <h3>Your Rewards</h3>
      </Link>
      </div>
      

      <div className="sidebarOption">
      <img className="h-[30px]"src={SavedIcon}>
      </img>
        <h3> Saved Post</h3>
      </div>

      {/* <div className="sidebarOption">
        <img
          src="https://wallpaperaccess.com/full/4306503.jpg"
          alt=""
        />
        <p>Music</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://wallpaperaccess.com/full/4306503.jpg"
          alt=""
        />
        <p>Science</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://wallpaperaccess.com/full/4306503.jpg"
          alt=""
        />
        <p>Health</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://wallpaperaccess.com/full/4306503.jpg"
          alt=""
        />
        <p>Movies</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://wallpaperaccess.com/full/4306503.jpg"
          alt=""
        />
        <p>Technology</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://wallpaperaccess.com/full/4306503.jpg"
          alt=""
        />
        <p>Education</p>
      </div>
      <div className="sidebarOption">
        <Add />
        <p className="text">Discover Spaces</p> */}
      {/* </div> */}
    </div>
  );
}

export default SidebarOptions;