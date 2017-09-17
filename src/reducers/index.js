import { combineReducers } from 'redux';
import fuelSavings from './fuelSavingsReducer';
import { routerReducer } from 'react-router-redux';
import showReducer from './showReducer';

const rootReducer = combineReducers({
  fuelSavings,
  routing: routerReducer,
  showReducer : showReducer
});

export default rootReducer;
