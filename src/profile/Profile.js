import React, {useEffect,useState} from "react";
import styled from "styled-components";
import TopNav from "./TopNav";
import ProfileDetails from "./ProfileDetails";
import ProfileButtons from "./ProfileButton";
import Tabs from "./Taps";
import PostGrid from "./PostGrid";
import Follow from "./Follow";
import axios from "axios";

const ProfileWrapper = styled.div`
  background-color: #000;
  max-width: 600px;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  overflow-x: hidden;
`;

function Profile() {
    const [postImages,setpostImages] = useState([])
    const email = localStorage.getItem("email");
    useEffect(()=>{
        axios('https://backend-ic-more.onrender.com/posts').then((res)=>{
        let posts = res.data.filter((item,index)=>item.email===email);
        setpostImages(posts)
        console.log(postImages)
    }).catch((e)=>{
        console.log(e.message)
    })
    },[])
  return (
    <ProfileWrapper style={{maxWidth:"100%"}}>
      <TopNav />
      <ProfileDetails postImages={postImages}/>
      <Follow/>
      <ProfileButtons />
      <Tabs />
      <PostGrid postImages={postImages}/>
    </ProfileWrapper>
  );
}

export default Profile;