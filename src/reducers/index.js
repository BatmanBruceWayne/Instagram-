import { createStore, combineReducers } from 'redux';
import { reducers as alertsReducer } from 'react-redux-alerts';
import { routerReducer } from 'react-router-redux';
import showReducer from './showReducer';
import getPhotoToProfileReducer from './getPhotoToProfileReducer';

const reducers = {
  alerts: alertsReducer
};


const rootReducer = combineReducers({
  routing: routerReducer,
  showReducer : showReducer,
  getPhotoToProfileReducer: getPhotoToProfileReducer,
  reducers
});

export default rootReducer;
