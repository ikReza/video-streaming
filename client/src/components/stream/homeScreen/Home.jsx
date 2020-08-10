import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStreams } from "../../../redux/actions/streamActions";
import { Typography, Grid, Box } from "@material-ui/core";

const Home = () => {
  const dispatch = useDispatch();
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    dispatch(getStreams());
    return () => {};
  }, [dispatch]);

  const streamList = useSelector((state) => Object.values(state.streamList));
  const userSignIn = useSelector((state) => state.userSignIn);

  useEffect(() => {
    if (userSignIn.userInfo) {
      setCurrentUser(userSignIn.userInfo.profileObj.googleId);
    }
  }, [userSignIn]);

  const renderAdmin = (stream) => {
    if (currentUser === stream.googleId) {
      console.log("found");
    }
  };

  const renderList = () => {
    return (
      <Grid container justify="center">
        {streamList.map((stream, i) => (
          <Grid component={Box} item xs={11} key={i} border={1}>
            <Typography>{stream.title}</Typography>
            <Typography>{stream.description}</Typography>
            {renderAdmin(stream)}
          </Grid>
        ))}
      </Grid>
    );
  };

  return (
    <div>
      <Typography>Stream Lists</Typography>
      {renderList()}
    </div>
  );
};

export default Home;
