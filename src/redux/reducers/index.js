import movies from "./movies";
import user from './user';
import shared from "./shared";
import { combineReducers } from "redux";

export default combineReducers({
  user,
  movies,
  shared
});