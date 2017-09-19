import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import showReducer from './showReducer';

const rootReducer = combineReducers({
  routing: routerReducer,
  showReducer : showReducer
});

export default rootReducer;
