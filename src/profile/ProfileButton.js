import React from "react";
import styled from "styled-components";

const ButtonWrapper = styled.div`
  padding: 25px 20px;
`;

const ButtonRow = styled.div`
  display: flex;
  :not(:last-child) {
    margin-bottom: 8px;
  }
`;

const Button = styled.button`
  background-color: transparent;
  color: inherit;
  border: 1px solid #919191;
  padding: 12px 0;
  cursor: pointer;
  width: 100%;
  border-radius: 5px;
  font-size: 14px;
  :not(:last-child) {
    margin-right: 8px;
  }
`;

function ProfileButtons() {
  return (
    <ButtonWrapper style={{marginBottom:"0px",padding:"3px"}}>
      <ButtonRow>
        <Button style={{color:"white"}}>Edit Profile</Button>
        <Button style={{color:"white"}}>Promotions</Button>
      </ButtonRow>
      <ButtonRow>
        <Button style={{color:"white"}}>Insights</Button>
        <Button style={{color:"white"}}>Add Shop</Button>
        <Button style={{color:"white"}}>Contact</Button>
      </ButtonRow>
    </ButtonWrapper>
  );
}

export default ProfileButtons;