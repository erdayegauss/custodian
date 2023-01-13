import React, { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const AddAccount = (props) => {
  const [modal] = useState(false);

  if (modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAction = (e) => {
    props.func(e)
    handleClose();
  }

  return (

    <div style={{ height: "60px", display: "flex", justifyContent: "right", alignItems: "right", margin: "10px" }} >
      <Button startIcon={<AddCircleIcon />} variant="outlined" onClick={handleClickOpen}>
        {props.name}
      </Button>
      <Dialog open={open} onClose={handleClose} >
        <DialogTitle sx={{ m: 0, p: 2 }} >Create {props.name} Account</DialogTitle>
        <DialogContent dividers>
          <DialogContentText>
            Name.
          </DialogContentText>
          <TextField
            required
            autoFocus
            margin="dense"
            id="name"
            label="Vault Name"
            type="text"
            fullWidth
            onChange={(e) => props.func1(e)
            }
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={(e) => { handleAction(e) }}>Create</Button>
        </DialogActions>
      </Dialog>
    </div>


  );
}

export default AddAccount;
