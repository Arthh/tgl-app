import { applyMiddleware, createStore } from 'redux';
import { GamesState } from './modules/games/types';
import { CartIState } from './modules/cart/types';
import createSagaMiddleware from 'redux-saga';
import RootReducer from './modules/RootReducer';
import rootSaga from './modules/rootSaga';

export interface IState {
  games: GamesState;
  itemCart: CartIState;
}

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const store = createStore(
  RootReducer,
  applyMiddleware(...middleware),
)

sagaMiddleware.run(rootSaga);

export default store;