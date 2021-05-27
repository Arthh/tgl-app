import { all } from 'redux-saga/effects';
import games from './games/sagas';
import cart from './cart/sagas';

export default function* rootSaga() {
  yield all(
    [
      games,
      cart
    ]
  )
}