import React, { useState } from "react";
import HomeIcon from "@material-ui/icons/Home";
import FeaturedPlayListOutlinedIcon from "@material-ui/icons/FeaturedPlayListOutlined";
import AssignmentTurnedInOutlinedIcon from "@material-ui/icons/AssignmentTurnedInOutlined";
import PeopleAltOutlinedIcon from "@material-ui/icons/PeopleAltOutlined";
import NotificationsOutlinedIcon from "@material-ui/icons/NotificationsOutlined";
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import CloseIcon from "@material-ui/icons/Close";
import {Modal} from "react-responsive-modal";
import fasfor from './Images/forum.png';
import "./QHeader.css";
import { Avatar, Button, Input } from "@material-ui/core";
import "react-responsive-modal/styles.css"
// import { useSelector } from "react-redux";
// import { selectUser } from "../features/userSlice";
// import db, { auth } from "../firebase";
import { ExpandMore, Link } from "@material-ui/icons";
// import firebase from "firebase";

// Modal.setAppElement("#root");

function QHeader() {
  // const user = useSelector(selectUser);

  const [IsmodalOpen, setIsModalOpen] = useState(false);
  const Close=(<CloseIcon></CloseIcon>)
  // const [input, setInput] = useState("");
  const [inputUrl, setInputUrl] = useState("");
  // const questionName = input;

  // const handleQuestion = (e) => {
  //   e.preventDefault();
  //   setIsModalOpen(false);

  //   if (questionName) {
  //     db.collection("questions").add({
  //       user: user,
  //       question: input,
  //       imageUrl: inputUrl,
  //       timestamp: firebase.firestore.FieldValue.serverTimestamp(),
  //     });
  //   }

  //   setInput("");
  //   setInputUrl("");
  // };

  return (
    <div className="qHeader">
      
      <div className="qHeader__logo">
      <img className="h-[30px]"src={fasfor}>
      </img> 
      
</div>

      {/* <div className="qHeader__icons">
        <div className="active qHeader__icon">
          <HomeIcon />
        </div>
        <div className="qHeader__icon">
          <FeaturedPlayListOutlinedIcon />
        </div>
        <div className="qHeader__icon">
          <AssignmentTurnedInOutlinedIcon />
        </div>
        <div className="qHeader__icon">
          <PeopleAltOutlinedIcon />
        </div>
        <div className="qHeader__icon">
          <NotificationsOutlinedIcon />
        </div>
      </div> */}
      <div className="qHeader__input">
        <SearchIcon />
        <input type="text" placeholder="Search Tips/people" />
      </div>
      <div className="qHeader__Rem">
        <div className="qHeader__avatar">
          <Avatar
            // onClick={() => auth.signOut()}
            // className="Avatar"
            // src={
            //   user.photo
            //     ? user.photo
            //     : "https://images-platform.99static.com//_QXV_u2KU7-ihGjWZVHQb5d-yVM=/238x1326:821x1909/fit-in/500x500/99designs-contests-attachments/119/119362/attachment_119362573"
            // }
          />
        </div>
        <LanguageIcon />
        <Button 
        onClick={() => setIsModalOpen(true)}
        >Add Question</Button>
        <Modal
          open={IsmodalOpen}
          closeIcon={Close}
        onClose={() => setIsModalOpen(false)}
          closeOnEsc
          
          closeOnOverlayClick={false}
          style={{
            overlay: {
              width: 700,
              height: 600,
              backgroundColor: "rgba(0,0,0,0.8)",
              zIndex: "1000",
              top: "50%",
              left: "50%",
              marginTop: "-300px",
              marginLeft: "-350px",
            },
          }}
        >
          <div className="modal__title">
            <h5>Add Question</h5>
            <h5>Share Link</h5>
          </div>
          <div className="modal__info">
            <Avatar
              className="avatar"
              // src={
              //   user.photo
              //     ? user.photo
              //     : "https://images-platform.99static.com//_QXV_u2KU7-ihGjWZVHQb5d-yVM=/238x1326:821x1909/fit-in/500x500/99designs-contests-attachments/119/119362/attachment_119362573"
              // }
            />
            {/* <p>{user.disPlayName ? user.disPlayName : user.email} asked</p> */}
            <div className="modal__scope">
              <PeopleAltOutlinedIcon />
              <p>Public</p>
              <ExpandMore />
            </div>
          </div>
          <div className="modal__Field">
            <Input
         type="text"
              placeholder="Start your question with 'What', 'How', 'Why', etc. "
            />
            <div style={{display:"flex",flexDirection:"column"}}>
              <input type="text" value={inputUrl} onChange={(e)=>setInputUrl(e.target.value)}
              style={{
                margin:"5px 0",
                border:"1px solid lightgrey",
                padding:"10px ",
                outline:"2px solid black #000",
             }}
               placeholder="Optional: inclue a link that gives context"/>
               {
                inputUrl !== "" &&<img style={{
                  height:"40vh",objectFit:"contain"
                }}
                src={inputUrl} alt="image"/> 
               }
               
            </div>
            
          </div>
          <div className="modal__buttons">
            <button className="cancle" onClick={() => setIsModalOpen(false)}>
              Cancel
            </button>
            <button type="submit"  className="add">
              Add Question
            </button>
          </div>
        </Modal>
      </div>
      
    </div>
  );
}

export default QHeader;