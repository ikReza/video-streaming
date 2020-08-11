import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getStream } from "../../../redux/actions/streamActions";

const StreamEdit = (props) => {
  const [selectedStream, SetSelectedStream] = useState(null);
  const dispatch = useDispatch();

  const streamList = useSelector((state) => state.streamList);

  useEffect(() => {
    dispatch(getStream(props.match.params.id));
    return () => {};
  }, [dispatch]);

  useEffect(() => {
    if (streamList) {
      SetSelectedStream(streamList[props.match.params.id]);
    }
    return () => {};
  }, [selectedStream]);
  console.log(selectedStream);

  if (!selectedStream) {
    return <div>Loading. .. ...</div>;
  }
  return <div>Okay</div>;
};

export default StreamEdit;
