import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function Buttons(props) {
  let {opens ,dataSend ,innerChl } = props
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    
    setOpen(opens)  
  };

  

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
        
      </Button>
      <Dialog open={open} onClick={() => dataSend(false)} >
        <DialogTitle>Subscribe</DialogTitle>
        {innerChl}
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        
      </Dialog>
    </div>
  );
}