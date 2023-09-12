// You do not need to do anything in this file. Look at the CommentSection file. 

import React from 'react';
import './Comment.css';

const Comment = props => {
  console.log("This is Comment",props.comment.username)
  return (
    <div className="comment-text">
      <span className="user" style={{color:"black"}}>{props?.comment?.username}</span>
      {' '}
      <span className="comment" style={{color:"black"}}>{props?.comment?.text}</span>
    </div>
  );
};


export default Comment;