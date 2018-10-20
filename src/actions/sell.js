import { SELL_POST, SELL_POST_SUCCESS, SELL_POST_FAILURE } from './ActionTypes';
import axios from 'axios';

export function sellPostRequest({
  name,
  price,
  category,
  writer,
  contents,
  tumbnail,
  image,
  deliveryMethod
}) {
  return dispatch => {
    dispatch(sellPost());

    return axios
      .post('/api/memo/', {
        name,
        price,
        category,
        contents,
        tumbnail,
        image,
        deliveryMethod
      })
      .then(response => {
        dispatch(sellPostSuccess());
      })
      .catch(error => {
        dispatch(sellPostFailure());
      });
  };
}

export function sellPost() {
  return {
    type: SELL_POST
  };
}

export function sellPostSuccess() {
  return {
    type: SELL_POST_SUCCESS
  };
}

export function sellPostFailure() {
  return {
    type: SELL_POST_FAILURE
  };
}
