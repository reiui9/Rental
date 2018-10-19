import { CONFIRM_POST, CONFIRM_POST_SUCCESS, CONFIRM_POST_FAILURE } from './ActionTypes';
import axios from 'axios';

export function confirmPostRequest({
  _id
}) {
  return dispatch => {
    dispatch(confirmPost());
    let url = `/api/memo/${_id}`
    return axios    
      .put(url, {})
      .then(response => {
        dispatch(confirmPostSuccess());
      })
      .catch(error => {
        dispatch(confirmPostFailure());
      });
  };
}

export function confirmPost() {
  return {
    type: CONFIRM_POST
  };
}

export function confirmPostSuccess() {
  return {
    type: CONFIRM_POST_SUCCESS
  };
}

export function confirmPostFailure() {
  return {
    type: CONFIRM_POST_FAILURE
  };
}
