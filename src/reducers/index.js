import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import showReducer from './showReducer';
import getPhotoToProfileReducer from './getPhotoToProfileReducer';

const rootReducer = combineReducers({
  routing: routerReducer,
  showReducer : showReducer,
  getPhotoToProfileReducer: getPhotoToProfileReducer
});

export default rootReducer;
