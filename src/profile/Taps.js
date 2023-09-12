import React from "react";
import styled from "styled-components";
import Grid from "./assests/Grid";
import Reels from "./assests/Reels";
import IGTV from "./assests/IGTV";
import Guides from "./assests/Guides";
import Tags from "./assests/Tags";

const TabsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Tab = styled.div`
  padding: 35px 40px 16px;
  width: 100%;
  border-bottom: ${(props) =>
    props.isActive ? "2px solid white" : "1px solid #111"};
  svg {
    fill: ${(props) => (props.isActive ? "#fff" : "#919191")};
    transform: scale(2);
  }
`;

function Tabs() {
  return (
    <TabsWrapper style={{margin:"0px 0px"}}>
      <Tab isActive>
        <Grid />
      </Tab>
      <Tab>
        <Reels />
      </Tab>
      <Tab>
        <IGTV />
      </Tab>
      <Tab>
        <Guides />
      </Tab>
      <Tab>
        <Tags />
      </Tab>
    </TabsWrapper>
  );
}

export default Tabs;