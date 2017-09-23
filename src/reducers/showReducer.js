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
    case 'LOAD_PAGE_ID' :
      return{
        ...state,page_id: state.page_id + 1
      };
    case 'GET_COMMENT':
      return{
        ...state,listComment : [... state.listComment , ... action.listComment ],
      };
    default:
      return state ;
  }
}
