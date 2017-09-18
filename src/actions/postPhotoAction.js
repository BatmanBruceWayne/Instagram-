import axios from 'axios';
export function sendPhotoOnAPI(value) {
  return function (dispatch) {
    axios.post('http://api.colorme.tk',
      {
        photo:value.photo,
        description: value.description
      })
      .then(function (response) {
        console.log(response.status);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
}
