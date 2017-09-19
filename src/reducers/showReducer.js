import initialState from './initialState';

export default function showReducer(state = initialState, action) {

  switch(action.type){

    case 'LOAD_SUCCESS' :
      return {
        ...state,listPost : [... state.listPost , ... action.listPost ],
  };

    default:
      return state ;
  }
}
