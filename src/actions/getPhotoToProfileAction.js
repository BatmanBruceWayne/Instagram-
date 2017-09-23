import axios from 'axios';
var user_id = localStorage.getItem("user_id");

export function getPhotoToProfile(value) {

  return function (dispatch) {
    let token = localStorage.getItem("token");
    axios.get('http://api.trainingcolorme.tk/page?token='+ token + '&page_id='+ value )
      .then(function (response) {
        console.log(response.data.data.img_posts);
        console.log(user_id);

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
