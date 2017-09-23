import initialState from './initialState';

export default function showReducer(state = initialState, action) {
  console.log("LOGIN_REDUCER" , state);
  switch(action.type){
    case 'LOGIN_ACTION' :
      console.log("LOGIN_ACTION_DATA", action.data)
      return {
        ...state,
        loginState : action.data
      };

    default:
      return state ;
  }
}
