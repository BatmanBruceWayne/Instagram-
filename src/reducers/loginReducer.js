import initialState from './initialState';

export default function showReducer(state = initialState, action) {
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
