import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import showReducer from './showReducer';
import getPhotoToProfileReducer from './getPhotoToProfileReducer';
import loginReducer from './loginReducer';
const rootReducer = combineReducers({
  routing: routerReducer,
  showReducer : showReducer,
  getPhotoToProfileReducer: getPhotoToProfileReducer,
  loginReducer : loginReducer
});

export default rootReducer;
