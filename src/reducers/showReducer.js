import initialState from './initialState';

export default function showReducer(state = initialState, action) {
console.log("REDUCER" , state);
  switch(action.type){

    case 'LOAD_SUCCESS' :
      return {
        ...state,listPost : [... state.listPost , ... action.listPost ],
  };
    case 'IS_ADD_COMMENT':
      return{
        ...state,isAdding : !state.isAdding
      };

    default:
      return state ;
  }
}
