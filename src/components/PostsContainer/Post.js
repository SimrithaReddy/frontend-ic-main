// You will add code in this file
import React,{useState} from "react";
import CommentSection from "../CommentSection/CommentSectionContainer";
import LikeSection from "./LikeSection";
import PostHeader from "./PostHeader";

import "./Posts.css";
import axios from "axios";

// pass props in this file to
const Post = props => {
  // set up state for the likes
  const [likes, setLikes] = useState(props.post.likes);
  const updateLikes = () => {
    setLikes(likes => likes + 1);
    axios.post("https://backend-ic-more.onrender.com/posts/addlikes",{
      _id:props.post._id
    }).then((res)=>{
      console.log(res.data)
    }).catch((e)=>{
      console.log(e.message)
    })
  };

  return (
    <div className="post-border">
      <PostHeader
        username={props?.post.username}
      />
      <div className="post-image-wrapper">
        <img
          alt="post thumbnail"
          className="post-image"
          src={props.post.imageUrl}
        />
      </div>
      <LikeSection likes={likes} addlikes={updateLikes} />
      <CommentSection
        comments={props.post}
      />
    </div>
  );
};

export default Post;