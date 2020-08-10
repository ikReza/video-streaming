import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { userSignInReducer } from "./reducers/userReducers";
import { streamReducer } from "./reducers/streamReducers";

const initialState = {};

const rootReducer = combineReducers({
  userSignIn: userSignInReducer,
  streamList: streamReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
