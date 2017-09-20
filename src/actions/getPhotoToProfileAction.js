import axios from 'axios';

export function getPhotoToProfile() {
  return function () {

    axios.get(api,
      {
        photo: value.photo,
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
