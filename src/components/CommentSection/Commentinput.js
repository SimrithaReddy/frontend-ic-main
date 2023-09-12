// You do not need to do anything in this file
import axios from 'axios';
import React, { useState } from 'react';

const CommentInput = props => {
  const [com,setcom] = useState("");
  console.log(props)
  const handleComment=(e)=>{
    e.preventDefault();
    let data = new FormData(e.target);
    axios.post("https://backend-ic-more.onrender.com/comments",{
      username : data.get("username"),
      text : data.get("text"),
      _id : data.get("_id")
    }).then((res)=>{
      console.log(res.data,"This is response from Comment Input")
      setcom("")
    }).catch((e)=>{
      console.log(e.message,"This is response from Comment Input")
    })
  }
  return (
    <form className="comment-form" onSubmit={(e)=>handleComment(e)}>
      <input type="hidden" value={localStorage.getItem("email").split("@")[0]} name="username"></input>
      <input type="hidden" value={props._id} name="_id"></input>
      <input
        type="text"
        placeholder="Add comment... "
        onChange={(e)=>setcom(e.target.value)}
        name="text"
      />
    </form>
  );
};

export default CommentInput;