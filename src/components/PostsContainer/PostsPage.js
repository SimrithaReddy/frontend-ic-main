//Complete the necessary code in this file
// import useState
import React, { useEffect, useState } from "react";
import Post from "./Post";
import "./Posts.css";
import axios from "axios";
// import data


const PostsPage = () => {
  // set up state for your data
  const [data,setdata] = useState([]);
  console.log(data);

  useEffect(()=>{
    axios.get('https://backend-ic-more.onrender.com/posts').then((res)=>{
    let email = localStorage.getItem('email');
    let newArr = res.data.filter((item,index)=>item.email!==email)
    setdata(newArr)
  }).catch((e)=>{
      console.log(e.message)
  })
  },[])
 

  return (
    <div className="posts-container-wrapper">
      {/* map through data here to return a Post and pass data as props to Post */}
      {data.map(function(p, index) {
        // <Post key={index} post={p} />;
        return <Post key={index} post={p}/>;
      })}
    </div>
  );
};

export default PostsPage;