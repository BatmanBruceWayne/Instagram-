import axios from 'axios';

export function getPhotoToProfile(page_id) {
  return function (dispatch) {
    let token = localStorage.getItem("token");
    let user_id = localStorage.getItem("userid");
    axios.get('http://api.trainingcolorme.tk/page?token='+ token + '&page_id='+ page_id )
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
