import axios from 'axios';

export function sendProfileOnAPI(value) {
  return function () {
    let token = localStorage.getItem("token");
    let userid = localStorage.getItem("userid");
    let api = 'http://api.trainingcolorme.tk/editprofile/' + userid + '?token=' + token;
    let formData = new FormData();
    formData.append('name', value.name);
    formData.append('phonenumber', value.phonenumber);
    formData.append('story', value.story);
    formData.append('gender', value.gender);
    formData.append('photo', value.photo_file);
    let xhr = new XMLHttpRequest();
    xhr.open('POST', api);
    xhr.send(formData);
  };
}

export function getProfile() {
  return function (dispatch) {
    let token = localStorage.getItem("token");
    let user_id = localStorage.getItem("userid");
    axios.get('http://api.trainingcolorme.tk/profile/' + user_id + '?token=' + token)
      .then(function (response) {
        dispatch(editProfile(response.data.data.user));
      })
      .catch(function (error) {
        throw (error);
      });
  };
}

export function editProfile(value) {
  return ({
    type: 'EDIT_PROFILE',
    value: value
  });
}
