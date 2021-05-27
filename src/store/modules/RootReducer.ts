import { combineReducers } from 'redux';
import games from './games/reducers';

import itemCart from './cart/reducers';

export default combineReducers ({
  games,
  itemCart,
})