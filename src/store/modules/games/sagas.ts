import { AxiosResponse } from 'axios';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import api from '../../../services/api';
import { ActionTypes, GamesProps } from './types';
import { loadGames, loadGamesSucess, loadGameFailure } from './actions';

function* checkLoadGames () {
  try {
    const AxiosGamesResponse: AxiosResponse<GamesProps> = yield call(api.get, '/games');
    if(AxiosGamesResponse.data) {
      yield put(loadGamesSucess(AxiosGamesResponse.data))
    } else {
      yield put(loadGameFailure(true));
    }

  } catch(err) {
    yield put(loadGameFailure(true));
  }
}

export default all(
  [ takeLatest(ActionTypes.loadGames, checkLoadGames) ]
);