import { combineReducers } from 'redux';
import games from './games/reducers';
import cart from './cart/reducers';

export default combineReducers({
  games,
  cart
})