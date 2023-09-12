// look at the likes on this component. Right now it is hard coded on line 20.
// console.log your props and see how to add likes to this component so that it will update when you click the icon.
// HINT: You will need to add an onClick event pass through your props and update the hard coded Likes
import React, { useState } from "react";
import Like from "./like2.jpg"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

const LikeSection = props => {
  const [redlike,setredlike] = useState(false)
  console.log("This is from LikeSection", props.likes);
  const handlelike =(e)=>{
    e.preventDefault();
    let fun = props.addlikes;
    fun();
    setredlike(true)
  }
  return (
    <div>
      <div className="like-section">
        {redlike ?
        <img src={Like} style={{width:"35px",height:"35px"}}></img>:
        <FavoriteBorderIcon onClick={(e)=>handlelike(e)}/>}
        <ChatBubbleOutlineIcon/>
        </div>
      <div className="like-number">
        {props.likes} Likes </div>
    </div>
  );
};

export default LikeSection;