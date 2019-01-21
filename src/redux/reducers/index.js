import { combineReducers } from "redux";
import AuthReducer from "./auth";
import UserReducer from "./users";

export default combineReducers({
  auth: AuthReducer,
  user: UserReducer
});
