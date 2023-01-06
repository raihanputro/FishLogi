import { combineReducers } from "redux";
import fishPosts from "./fishPosts";
import userReducer from "./users";
import auth from "./auth";

export default combineReducers({ fishPosts, userReducer, auth });

