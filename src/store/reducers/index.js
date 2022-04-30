import counterReducer from "./counter";
import formReducer from "./form";
import loggedReducer from "./isLogged";
import { combineReducers } from "redux";
import postReducer from "./post";
import authReducer from "./authReducer";

const allReducers = combineReducers({
  counter: counterReducer,
  form: formReducer,
  isLogged: loggedReducer,
  posts: postReducer,
  auth: authReducer
});

export default allReducers;
