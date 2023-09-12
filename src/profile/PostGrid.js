import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const GridWrapper = styled.div`
  margin-top: 3px;
  display: grid;
  grid-gap: 3px;
  grid-template-columns: repeat(3, 1fr);

  img {
    max-width: 100%;
  }
`;

function PostGrid(props) {
    const postImages = props.postImages;
    const [index,setindex] = useState(-1)
    const [open, setOpen] = useState(false);

    const handleClickOpen = (e) => {
        e.preventDefault();
        debugger
        // let i = parseInt(e.target.alt)
        setindex(parseInt(e.target.alt))
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

  return (
    <div>
    <GridWrapper>
       {postImages.map((posts,i) => (
        <img 
        key={i}
        src={posts.imageUrl} 
        alt={i} 
        onClick={(e)=>handleClickOpen(e)}
        style={{width:"100%",height:"100%"}}></img>
      ))}
       <Dialog open={open} onClose={handleClose}>
        {
            postImages.map((posts,i)=>{
                i==index && <image src={posts.imageUrl}></image>
            })
        }
        {/* <image src={postImages[index].imageUrl}></image> */}
        <Button onClick={handleClose}>Cancel</Button>
      </Dialog>
    </GridWrapper>
    </div>
  );
}

export default PostGrid;