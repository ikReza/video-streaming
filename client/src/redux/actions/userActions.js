import * as actions from "../constants/userConstants";

export const signIn = (response) => async (dispatch) => {
  dispatch({ type: actions.USER_SIGNIN, payload: response });
};

export const signOut = () => async (dispatch) => {
  dispatch({ type: actions.USER_SIGNOUT });
};
