import React, { useEffect, createRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStream } from "../../../redux/actions/streamActions";
import { Typography, CircularProgress } from "@material-ui/core";
import flv from "flv.js";
import { useStyles } from "./style";

const StreamShow = (props) => {
  const dispatch = useDispatch();
  const videoRef = createRef();
  const classes = useStyles();

  const stream = useSelector(
    (state) => state.streamList[props.match.params.id]
  );

  let flvPlayer = null;

  const buildPlayer = () => {
    if (flvPlayer || !stream) {
      console.log(flvPlayer);
      return;
    }

    flvPlayer = flv.createPlayer({
      type: "flv",
      url: `http://localhost:8000/live/${props.match.params.id}.flv`,
    });

    flvPlayer.attachMediaElement(videoRef.current);
    flvPlayer.load();
  };

  useEffect(() => {
    dispatch(getStream(props.match.params.id));
  }, []);

  useEffect(() => {
    buildPlayer();
    return () => {
      flvPlayer && flvPlayer.destroy();
    };
  }, [buildPlayer]);

  if (!stream) {
    return (
      <div className={classes.loading}>
        <CircularProgress />
      </div>
    );
  }

  return (
    <div>
      <video ref={videoRef} style={{ width: "100%" }} controls></video>
      <Typography gutterBottom variant="h5">
        {stream.title}
      </Typography>
      <Typography>{stream.description}</Typography>
    </div>
  );
};

export default StreamShow;
