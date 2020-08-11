import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getStreams } from "../../../redux/actions/streamActions";
import { Typography, Grid, Box, Button } from "@material-ui/core";
import { Videocam } from "@material-ui/icons";
import { useStyles } from "./style";

const Home = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [currentUser, setCurrentUser] = useState(null);

  const streamList = useSelector((state) => Object.values(state.streamList));
  const userSignIn = useSelector((state) => state.userSignIn);

  useEffect(() => {
    dispatch(getStreams());
    return () => {};
  }, [dispatch]);

  useEffect(() => {
    if (userSignIn.userInfo) {
      setCurrentUser(userSignIn.userInfo.profileObj.googleId);
    } else {
      setCurrentUser(null);
    }
  }, [userSignIn]);

  const renderAdmin = (stream) => {
    if (currentUser === stream.googleId) {
      return (
        <div>
          <Button
            component={Link}
            to={`streams/edit/${stream.id}`}
            size="small"
            className={classes.editBtn}
          >
            Edit
          </Button>
          <Button size="small" className={classes.deleteBtn}>
            Delete
          </Button>
        </div>
      );
    }
  };

  const renderList = () => {
    return (
      <Grid container justify="center">
        {streamList.map((stream, i) => (
          <Grid
            component={Box}
            item
            xs={11}
            key={i}
            border={1}
            className={classes.stream}
          >
            <div style={{ display: "flex" }}>
              <div className={classes.videoIcon}>
                <Videocam />
              </div>
              <div>
                <Typography gutterBottom variant="h5">
                  {stream.title}
                </Typography>
                <Typography>{stream.description}</Typography>
              </div>
            </div>
            {renderAdmin(stream)}
          </Grid>
        ))}
      </Grid>
    );
  };

  const renderCreate = () => {
    if (userSignIn.userInfo) {
      return (
        <Grid container justify="center">
          <Grid item xs={11} className={classes.createStream}>
            <Button
              component={Link}
              to="/streams/new"
              className={classes.createBtn}
            >
              Create Stream
            </Button>
          </Grid>
        </Grid>
      );
    }
  };

  return (
    <div>
      <Typography>Stream Lists</Typography>
      {renderList()}
      {renderCreate()}
    </div>
  );
};

export default Home;
