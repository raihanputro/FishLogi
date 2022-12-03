import { combineReducers } from "redux";
import fishPosts from "./fishPosts";
import auth from "./auth";

export default combineReducers({ fishPosts, auth });

