import axios from "axios";
import * as actions from "../constants/userConstants";
import history from "../../history";

export const createStream = (formValues) => async (dispatch, getState) => {
  const {
    userSignIn: {
      userInfo: {
        profileObj: { googleId },
      },
    },
  } = getState();
  const { data } = await axios.post("http://localhost:3001/streams", {
    ...formValues,
    googleId,
  });
  dispatch({ type: actions.CREATE_STREAM, payload: data });
  history.push("/");
};

export const getStreams = () => async (dispatch) => {
  const { data } = await axios.get("http://localhost:3001/streams");
  dispatch({ type: actions.FETCH_STREAMS, payload: data });
};

export const getStream = (id) => async (dispatch) => {
  const { data } = await axios.get(`http://localhost:3001/streams/${id}`);
  dispatch({ type: actions.FETCH_STREAM, payload: data });
};

export const editStream = (id, formValues) => async (dispatch) => {
  const { data } = await axios.put(
    `http://localhost:3001/streams/${id}`,
    formValues
  );
  dispatch({ type: actions.EDIT_STREAM, payload: data });
};

export const deleteStream = (id) => async (dispatch) => {
  await axios.delete(`http://localhost:3001/streams/${id}`);
  dispatch({ type: actions.DELETE_STREAM, payload: id });
};
