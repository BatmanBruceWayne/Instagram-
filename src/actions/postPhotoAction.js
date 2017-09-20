import axios from 'axios';
export function sendPhotoOnAPI(value) {
  return function () {
    axios.post('http://api.trainingcolorme.tk/upload',
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
