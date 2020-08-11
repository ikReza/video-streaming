import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getStream } from "../../../redux/actions/streamActions";
import { Typography } from "@material-ui/core";

const StreamShow = (props) => {
  const dispatch = useDispatch();

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
      <Typography>{stream.title}</Typography>
    </div>
  );
};

export default StreamShow;
