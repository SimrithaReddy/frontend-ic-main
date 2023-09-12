import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);
  let email = localStorage.getItem("email")
  let username=email.split("@")[0];

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handlepost = async(event)=>{
    event.preventDefault();
    let formdata = new FormData(event.currentTarget)
    console.log(formdata)
    await fetch("https://backend-ic-more.onrender.com/posts",{
      method:"POST",
      body:formdata,username,email
    }).then((res)=>{
      res.json()
    }).then((res)=>{
      console.log(res,"res")
      JSON.stringify(res)
      setOpen(false);
    }).catch((e)=>{
      console.log(e.message)
    })
  }

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen} style={{backgroundColor:"white",color:"blue"}}>
        Add Photo
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Post</DialogTitle>
        <DialogContent>
          <form onSubmit={(e)=>handlepost(e)}>
            <input type="hidden" value={email.split("@")[0]} name="username"></input>
            <input type="hidden" value={email} name="email"></input>
          <input
          id='PostImage'
          type="file"
          name="PostImage"></input>
          <button type="submit">Post</button>
          <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
  }