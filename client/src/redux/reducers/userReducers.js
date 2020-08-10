import * as actions from "../constants/userConstants";

export const userSignInReducer = (state = {}, action) => {
  switch (action.type) {
    case actions.USER_SIGNIN:
      return { userInfo: action.payload };
    case actions.USER_SIGNOUT:
      return {};
    default:
      return state;
  }
};
