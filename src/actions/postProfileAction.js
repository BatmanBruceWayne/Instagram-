import axios from 'axios';
export function sendProfileOnAPI(value) {
  return function () {
    let user_id = localStorage.getItem("user_id");
    let token = localStorage.getItem("token");
    let api = "http://api.trainingcolorme.tk/editprofile/" + user_id + '?token=' + token;

    axios.post(api,
      {
        name: value.name,
        phonenumber :value.phonenumber,
        story:value.story,
        gender: value.gender
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
}

export function getProfile() {
  return function (dispatch) {
    let token = localStorage.getItem("token");
    let user_id = localStorage.getItem("user_id");
    axios.get('http://api.trainingcolorme.tk/profile' + user_id + '?token='+ token)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        throw (error);
      });

  };
}
