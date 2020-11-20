export const FETCH_POST_LOADING_ACTION = "FETCH_POST_LOADING_ACTION";
export const FETCH_POST_SUCCESS_ACTION = "FETCH_POST_SUCCESS_ACTION";
export const FETCH_POST_ERROR_ACTION = "FETCH_POST_ERROR_ACTION";

export const UPDATE_POST_LOADING_ACTION = "UPDATE_POST_LOADING_ACTION";
export const UPDATE_POST_SUCCESS_ACTION = "UPDATE_POST_SUCCESS_ACTION";
export const UPDATE_POST_ERROR_ACTION = "UPDATE_POST_ERROR_ACTION";


export const fetchPostLoadingAction = () => ({
  type: FETCH_POST_LOADING_ACTION,
});
export const fetchPostSuccessAction = (data) => ({
  payload: data,
  type: FETCH_POST_SUCCESS_ACTION,
});
export const fetchPostErrorAction = () => ({
  type: FETCH_POST_ERROR_ACTION,
});

export const updatePostLoadingAction = () => ({
  type: UPDATE_POST_LOADING_ACTION,
});
export const updatePostSuccessAction = (updateData) => ({
  payload: updateData,
  type: UPDATE_POST_SUCCESS_ACTION,
});
export const updatePostErrorAction = () => ({
  type: UPDATE_POST_ERROR_ACTION,
});
