import {
    UPDATE_POST_LOADING_ACTION,
    UPDATE_POST_SUCCESS_ACTION,
    UPDATE_POST_ERROR_ACTION,
  } from "./fetchpostaction.js";
  import { STATUSES } from "../types";
  const initialState = {
    updateData: [],
    state: STATUSES.NEVER,
  };
  const updatePost = (state = initialState, action) => {
    switch (action.type) {
      case UPDATE_POST_LOADING_ACTION:
        return {
          ...state,
          status: STATUSES.LOADING,
        };
      case UPDATE_POST_SUCCESS_ACTION:
        return {
            updateData: action.payload,
          status: STATUSES.OK,
        };
      case UPDATE_POST_ERROR_ACTION:
        return {
            updateData: null,
          status: STATUSES.ERROR,
        };
      default:
        return {
          ...state,
        };
    }
  };
  export default updatePost;
  