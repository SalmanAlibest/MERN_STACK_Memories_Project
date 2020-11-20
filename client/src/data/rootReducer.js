import { combineReducers } from "redux";

import fetchPost from "./fetchposts/fetchpostreducers";
import updatePost from "./fetchposts/updatepostreducers";
 
const appReducer = combineReducers({
  fetchPost,
  updatePost
});
const initialState = appReducer({}, {});
const rootReducer = (state, action) => {
  return appReducer(state, action);
};
export default rootReducer;
