import axios from 'axios';

export function getPhotoToProfile(value) {
  return function (dispatch) {
    let token = localStorage.getItem("token");
    let user_id = localStorage.getItem("user_id");
    axios.get('http://api.trainingcolorme.tk/page?token='+ token + '&page_id='+ value )
      .then(function (response) {
      dispatch(filterThePhoto(response.data.data.img_posts, user_id));
      })
      .catch(function (error) {
        throw (error);
      });

  };
}

export function filterThePhoto(value, user_id){
  return({
    type:'FILTER_THE_PHOTO',
    value:value,
    user_id: user_id
  });
}
