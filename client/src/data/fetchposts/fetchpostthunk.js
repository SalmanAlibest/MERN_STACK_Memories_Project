import { reduxThunk } from "redux-thunk";
import { fetchPost as fetchPostApi } from "./fetchpostsapi";
import { updatePost as updatePostApi } from "./fetchpostsapi";
import {
  fetchPostLoadingAction,
  fetchPostSuccessAction,
  fetchPostErrorAction,
  updatePostLoadingAction,
  updatePostSuccessAction,
  updatePostErrorAction,
} from "./fetchpostaction";
export const fetchPostThunk = () => async (dispatch) => {
  try {
    dispatch(fetchPostLoadingAction());
    const response = await fetchPostApi();

    dispatch(fetchPostSuccessAction(response));
  } catch (error) {
    dispatch(fetchPostErrorAction());
  }
};

export const updatePostThunk = (id) => async (dispatch) => {
  try {
    dispatch(updatePostLoadingAction());
    const response = await updatePostApi(id);

    dispatch(updatePostSuccessAction(response));
  } catch (error) {
    dispatch(updatePostErrorAction());
  }
};