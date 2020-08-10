import * as actions from "../constants/userConstants";
import _ from "lodash";

export const streamReducer = (state = {}, action) => {
  switch (action.type) {
    case actions.FETCH_STREAMS:
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case actions.FETCH_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case actions.CREATE_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case actions.EDIT_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case actions.DELETE_STREAM:
      return _.omit(state, action.payload);
    default:
      return state;
  }
};

// export const streamListReducer = (state = [], action) => {
//   switch (action.type) {
//     case actions.FETCH_STREAMS:
//       return action.payload;
//     default:
//       return state;
//   }
// };
