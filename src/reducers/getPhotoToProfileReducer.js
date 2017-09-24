
import initialState from './initialState';

export default function getPhotoToProfileReducer(state = initialState.user, action) {
  switch (action.type) {
    case 'FILTER_THE_PHOTO': {
      let img = action.value;
      let myPhoto = img.filter(function (val) {
        return val.user_id == action.user_id;
      });

      return {
        ...state, myPhoto : [... state.myPhoto , ... myPhoto ],
      };
    }

    case 'EDIT_PROFILE':
      return{
        ...state,
        ...{
          myProfile: action.value,
        }
      };

    default:
      return state;
  }
}

