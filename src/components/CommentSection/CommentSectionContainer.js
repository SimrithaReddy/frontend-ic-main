// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./Commentinput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  // Add state for the comments
  const [commentsAll] = useState(props.comments.comments);
  console.log(commentsAll[0])
  const [_id] = useState(props.comments._id);
  console.log("This is from CommentSectionContainer ", props);

  return (
    <div>
      {/* map through the comments data and return the Comment component */}
      {commentsAll.map((c, index) => (
        <Comment key={index} comment={c} update={props}/>
      ))}
      <CommentInput _id={_id}/>
    </div>
  );
};

export default CommentSection;