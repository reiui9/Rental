import { SELL_POST, SELL_POST_SUCCESS, SELL_POST_FAILURE } from './ActionTypes';
import axios from 'axios';

export function sellPostRequest({
  category,
  product,
  condition,
  price,
  purchaseDate,
  pictureMain,
  pictureTop,
  pictureBottom,
  pictureFront,
  pictureBack,
  pictureRight,
  pictureLeft,
  writer
}) {
  return dispatch => {
    dispatch(sellPost());

    return axios
      .post('/api/sell/', {
        category,
        product,
        condition,
        price,
        purchaseDate,
        pictureMain,
        pictureTop,
        pictureBottom,
        pictureFront,
        pictureBack,
        pictureRight,
        pictureLeft,
        writer
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
