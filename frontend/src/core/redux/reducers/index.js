import { combineReducers } from "redux";
import { authReducer } from "./auth";
import { userReducer } from "./user";
import { topicReducer } from "./topic";
import { blogReducer } from "./blog";

export default combineReducers({
  auth: authReducer,
  user: userReducer,
  topic: topicReducer,
  blog: blogReducer,
});
