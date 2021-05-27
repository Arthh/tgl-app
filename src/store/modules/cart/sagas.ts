import { AxiosResponse } from 'axios';
import { all, put, call, takeLatest } from 'redux-saga/effects';
import api from '../../../services/api';
import { GamesProps } from '../games/types';
import { ActionTypes } from './types';
import { addGamesSuccess, addGamesFailure,
        addGamesRequest, addProductToCartRequest,
        addProductToCartFailure, addProductToCartSuccess, } from './action';

type checkItemRequest = ReturnType< typeof addProductToCartRequest >;
type checkBetRequest = ReturnType< typeof addGamesRequest >;

function* checkItemCart ({ payload }: checkItemRequest ) {
  const { item } = payload;

  if ( item.numbers ) {
    yield put(addProductToCartSuccess(item))
  } else {
    yield put(addProductToCartFailure('Selecione mais números para completar a aposta'))
  }
}

function* checkBetCart ({ payload }: checkBetRequest ) {
  const { item } = payload;
  const AxiosGamesResponse: AxiosResponse<GamesProps> = yield call(api.get, '/games');

  try {
    if (AxiosGamesResponse.data) {
      yield put(addGamesSuccess(item))
    } else {
      yield put(addGamesFailure(true))
    }
  } catch(error) {
    yield put(addGamesFailure(true))
  }
}

export default all(
  [
    takeLatest(ActionTypes.addProductToCartRequest, checkItemCart),
    takeLatest(ActionTypes.addGamesRequest, checkBetCart),
  ]
)