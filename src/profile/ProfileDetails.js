import React from "react";
import styled from "styled-components";

const ProfileDetailsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 20px;
`;

const ProfileImage = styled.img`
  max-width: 130px;
  border: 1px solid #919191;
  border-radius: 50%;
  padding: 4px;
  flex-basis: 40%;
`;

const ProfileStats = styled.div`
  display: flex;
  justify-content: space-between;
  flex-basis: 60%;
`;

const StatsBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StatsNumber = styled.span`
  font-weight: 600;
  font-size: 20px;
`;

const StatsLabel = styled.span`
  margin-top: 5px;
  text-transform: capitalize;
  letter-spacing: 1px;
  font-size: 14px;
`;

function ProfileDetails(props) {
    const postImages = props.postImages;
    const email = localStorage.getItem("email");
    let sum =  0, comments= 0,posts=0;
    const newArray = postImages.map((item,i)=>{
        if(email===item.email){
            posts+=1;
            let likes = parseInt(item.likes)
            sum+=likes
        comments = item.comments.length
        console.log(comments,"This is from Profile Details")
        }
    })
    return (
        <ProfileDetailsWrapper>
            <ProfileImage src="https://images.unsplash.com/photo-1611262588024-d12430b98920?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW5zdGFncmFtJTIwcHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" />
            <ProfileStats style={{ color: "white" }}>
                <StatsBlock>
                    <StatsNumber style={{ color: "white" }}>{posts}</StatsNumber>
                    <StatsLabel style={{ color: "white" }}>posts</StatsLabel>
                </StatsBlock>
                <StatsBlock>
                    <StatsNumber style={{ color: "white" }}>{sum}</StatsNumber>
                    <StatsLabel style={{ color: "white" }}>likes</StatsLabel>
                </StatsBlock>
                <StatsBlock>
                    <StatsNumber style={{ color: "white" }}>{comments}</StatsNumber>
                    <StatsLabel style={{ color: "white" }}>comments</StatsLabel>
                </StatsBlock>
            </ProfileStats>
        </ProfileDetailsWrapper>
    );
}

export default ProfileDetails;