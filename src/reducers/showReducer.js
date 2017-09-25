import initialState from './initialState';

export default function showReducer(state = initialState, action) {

  switch(action.type){

    case 'LOAD_POST' :
      return {
        ...state,listPost : [... state.listPost , ... action.listPost ],
  };
    case 'LOAD_COMMENT':
      return{
        ...state,listComment : [... action.listComment ],
      };

    case 'LOAD_LIKE' :
      return {
        ...state, like : action.like
      };
    case 'IS_ADD_COMMENT':
      return{
        ...state,isAdding : !state.isAdding
      };
    case 'IS_ADD_HEADER' :
      return{
        ...state,addHeader : !state.addHeader
      };
    default:
      return state ;
  }
}
