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
  CircularProgress,
} from "@material-ui/core";
import { DeleteForever } from "@material-ui/icons";
import { useStyles } from "./style";

const StreamDelete = (props) => {
  const [open, setOpen] = useState(true);
  const dispatch = useDispatch();
  const classes = useStyles();

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
  }, [dispatch, props.match.params.id]);

  if (!stream) {
    return (
      <div className={classes.loading}>
        <CircularProgress />
      </div>
    );
  }

  return (
    <div>
      <div className={classes.iconContainer}>
        <DeleteForever className={classes.icon} />
      </div>
      <Dialog open={open} onClose={handleClose} className={classes.dialog}>
        <DialogTitle>Stream Delete</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete stream with title:{" "}
            <span className={classes.title}>{stream.title}</span>
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
