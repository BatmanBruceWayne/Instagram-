import initialState from './initialState';

export default function showReducer(state = initialState, action) {
  switch(action.type){
    case 'LOAD_SUCCESS' :
      return {
        ...state,listPost : action.listPost
      };
  }
}
