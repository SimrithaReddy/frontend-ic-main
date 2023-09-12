// You do not need to change any code in this file

import React from "react";
import "./Posts.css";

const PostHeader = props => {
  return (
    <div className="post-header">
      <h2>{props.username}</h2>
    </div>
  );
};

export default PostHeader;