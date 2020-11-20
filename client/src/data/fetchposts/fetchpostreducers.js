import {
  FETCH_POST_LOADING_ACTION,
  FETCH_POST_SUCCESS_ACTION,
  FETCH_POST_ERROR_ACTION,
} from "./fetchpostaction.js";
import { STATUSES } from "../types";
const initialState = {
  data: [],
  state: STATUSES.NEVER,
};
const fetchPost = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POST_LOADING_ACTION:
      return {
        ...state,
        status: STATUSES.LOADING,
      };
    case FETCH_POST_SUCCESS_ACTION:
      return {
        data: action.payload,
        status: STATUSES.OK,
      };
    case FETCH_POST_ERROR_ACTION:
      return {
        data: null,
        status: STATUSES.ERROR,
      };
    default:
      return {
        ...state,
      };
  }
};
export default fetchPost;
