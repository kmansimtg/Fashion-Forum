import { Avatar } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "./Post.css";
import ArrowUpwardOutlinedIcon from "@material-ui/icons/ArrowUpwardOutlined";
import ArrowDownwardOutlinedIcon from "@material-ui/icons/ArrowDownwardOutlined";
import RepeatOutlinedIcon from "@material-ui/icons/RepeatOutlined";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import { MoreHorizOutlined, ShareOutlined } from "@material-ui/icons";
import {Modal} from "react-responsive-modal"
import "react-responsive-modal/styles.css"
import CloseIcon from "@material-ui/icons/Close";
import ReactQuill from "react-quill"
import 'react-quill/dist/quill.snow.css'
// import { useDispatch, useSelector } from "react-redux";
// import { selectUser } from "../features/userSlice";
// import Modal from "react-modal";
// import db from "../firebase";
// import { selectQuestionId, setQuestionInfo } from "../features/questionSlice";
// import firebase from "firebase";

function Post(
    // { Id, question, imageUrl, timestamp, users }
    ) {
//   const user = useSelector(selectUser);
//   const dispatch = useDispatch();

  const [IsmodalOpen, setIsModalOpen] = useState(false);
  const Close=(<CloseIcon></CloseIcon>)
//   const questionId = useSelector(selectQuestionId);
  const [answer, setAnswer] = useState("");
  const [getAnswers, setGetAnswers] = useState([]);

//   useEffect(() => {
//     if (questionId) {
//       db.collection("questions")
//         .doc(questionId)
//         .collection("answer")
//         .orderBy("timestamp", "desc")
//         .onSnapshot((snapshot) =>
//           setGetAnswers(
//             snapshot.docs.map((doc) => ({ id: doc.id, answers: doc.data() }))
//           )
//         );
//     }
//   }, [questionId]);

//   const handleAnswer = (e) => {
//     e.preventDefault();

//     if (questionId) {
//       db.collection("questions").doc(questionId).collection("answer").add({
//         user: user,
//         answer: answer,
//         questionId: questionId,
//         timestamp: firebase.firestore.FieldValue.serverTimestamp(),
//       });
//     }
//     console.log(questionId);
//     setAnswer("");
//     setIsModalOpen(false);
//   };
  return (
    <div
      className="post"
    //   onClick={() =>
    //     dispatch(
    //       setQuestionInfo({
    //         questionId: Id,
    //         questionName: question,
    //       })
    //     )
    //   }
    >
      <div className="post__info">
        <Avatar
        //   src={
        //     users.photo
        //       ? users.photo
        //       : "https://images-platform.99static.com//_QXV_u2KU7-ihGjWZVHQb5d-yVM=/238x1326:821x1909/fit-in/500x500/99designs-contests-attachments/119/119362/attachment_119362573"
        //   }
        />
        {/* <h4>{users.displayName ? users.displayName : users.email}</h4> */}
        <h4>Michael123</h4>
        {/* <small>{new Date(timestamp?.toDate()).toLocaleString()}</small> */}
        <small>Posted by Michael Jul 1</small>
      </div>
      <div className="post__body">
        <div className="post__question">
          {/* <p>{question}</p> */}
          <p>What should I wear to Anant Ambani's reception?</p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="post__btnAnswer"
          >
            Answer
          </button>
          <Modal
            open={IsmodalOpen}
            closeIcon={Close}
            onClose={() => setIsModalOpen(false)}
            closeOnEsc
          
            closeOnOverlayClick={false}
            style={{
              overlay: {
                width: 680,
                height: 400,
                backgroundColor: "rgba(0,0,0,0.8)",
                zIndex: "1000",
                top: "50%",
                left: "50%",
                marginTop: "-250px",
                marginLeft: "-350px",
              },
            }}
          >
            <div className="modal__question">
              <h1>What is your Question ?</h1>
              <p>
                asked by{" "}
                <span className="name">
                  MansiK
                </span>{" "}
                {""}
                on{" "} 
                <span className="name">
                  {/* {new Date(timestamp?.toDate()).toLocaleString()} */}
                  Jul 13 2024
                </span>
              </p>
            </div>
            <div className="modal__answer">
              <ReactQuill placeholder="Enter your answer"/>
              
            </div>
            <div className="modal__button">
              <button className="cancle" 
              onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
              <button type="submit" 
              
               className="add">
                Add Answer
              </button>
            </div>
          </Modal>
        </div>
        
        {/* <img src={imageUrl} alt="" /> */}
      </div>
      <div   className="post__footer">
        <div className="post__footerAction">
          <ArrowUpwardOutlinedIcon />
          <ArrowDownwardOutlinedIcon />
        </div>

        <RepeatOutlinedIcon />
        <ChatBubbleOutlineOutlinedIcon />
        <div className="post__footerLeft">
          <ShareOutlined />
          <MoreHorizOutlined />
        </div>
      </div>
      <p style={{color:"rgba(0,0,0,0.5)",fontSize:"12px",fontWeight:"bold",margin:"10px 0"}}>Answer</p>
      <div style={{
        margin: "5px 0px 0px 0px",padding:"5px 0px 0px 20px",borderTop:"1px solid lightgrey"
      }} 
      className="post__answer">

          {/* {getAnswers.map(({ id, answers }) => (
            <p key={id} style={{ position: "relative", paddingBottom: "5px" }}>
              {Id === answers.questionId ? (
                <span>
                  {answers.answer}
                  <br />
                  <span
                    style={{
                      position: "absolute",
                      color: "gray",
                      fontSize: "small",
                      display: "flex",
                      right: "0px",
                    }}
                  >
                    <span style={{ color: "#b92b27" }}>
                      {answers.user.displayName
                        ? answers.user.displayName
                        : answers.user.email}{" "}
                      on{" "}
                      {new Date(answers.timestamp?.toDate()).toLocaleString()}
                    </span>
                  </span>
                </span>
              ) : (
                ""
              )}
            </p>
          ))} */}
          <div style={{display:"flex",
        flexDirection:"column",
        width:"100",
        padding:"10px 5px",
        borderTop:"1px solid lightgrey",
        }} className="post-answer-container">
            <div style={{display:"flex",
            alignItems:"center",
        marginBottom:"10px ",
        fontSize:"12px",
        fontWeight:600,
        color:"#888",
        }}className="post-answered">
              <Avatar/>
              <div className="post-info">
                <p>
                  FashionHub
                </p>
                <span>
                Mary Jul 2
                </span>
              </div>
            </div>
            <div style={{margin:"0px 10px ",}} className="post-answer">For Anant Ambani's reception, women should opt for elegant and sophisticated attire. Consider wearing a traditional Indian outfit like a richly embroidered saree or a designer lehenga in vibrant colors or pastel shades. Pair your outfit with statement jewelry, such as chandelier earrings or a maang tikka, and stylish footwear. A chic clutch and soft, glamorous makeup will complete your look, ensuring you are dressed appropriately for this high-profile and festive occasion.</div>
          </div>
        </div>
    </div>
  );
}

export default Post;