import React, {useState} from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import Input from "../input/Input";
import {useDispatch, useSelector} from "react-redux";
import {addTaskAction} from "../TODOMUI/toDoListActions";
import {setText} from "../input/inputActions";

export default function DialogWindow() {
  const dispatch = useDispatch()
  const text = useSelector(state => state.input.text);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [open, setOpen] = useState(false);


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    if (text !== '') {
      const newItem = {
        id: Date.now(),
        text,
        done: false,
      };
      dispatch(addTaskAction(newItem))
      dispatch(setText(''))
      setIsButtonDisabled(true)
    }
  };

  const handleChange = (event) => {
    const inputValue = event.target.value;
    dispatch(setText(inputValue));
    setIsButtonDisabled(inputValue === '');
  };

  return (
    <div>
      <Button style={{width: '100%'}} variant="outlined" color="primary" onClick={handleClickOpen}>
        Add New Task (MUI)
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Create New Task</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Input onChange={handleChange}/>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} disabled={isButtonDisabled} color="primary">
            Add To List
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}