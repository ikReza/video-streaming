import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteStream, getStream } from "../../../redux/actions/streamActions";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@material-ui/core";

const StreamDelete = (props) => {
  const [open, setOpen] = useState(true);
  const dispatch = useDispatch();

  const handleClose = () => {
    setOpen(false);
  };

  const handleConfirm = () => {
    setOpen(false);
    dispatch(deleteStream(stream.id));
  };

  const stream = useSelector(
    (state) => state.streamList[props.match.params.id]
  );

  useEffect(() => {
    dispatch(getStream(props.match.params.id));
    return () => {};
  }, [dispatch]);

  if (!stream) {
    return <div>Loading. .. ...</div>;
  }

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Stream Delete</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete stream with title: {stream.title}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button component={Link} to="/" onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button
            component={Link}
            to="/"
            onClick={handleConfirm}
            color="secondary"
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default StreamDelete;
