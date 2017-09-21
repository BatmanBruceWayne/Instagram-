import axios from 'axios';


export function sendPhotoOnAPI(value) {
  return function () {
    let token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjI5LCJpc3MiOiJodHRwOi8vYXBpLnRyYWluaW5nY29sb3JtZS50ay9sb2dpbi11c2VyIiwiaWF0IjoxNTA1ODQ1NzIyLCJleHAiOjE1MDU4NDkzMjIsIm5iZiI6MTUwNTg0NTcyMiwianRpIjoiZGlTeEcwRkZYQUhWa1JUciJ9.AGHPlIz0yxoTJMkjLUSAcnV-RPYcqYe6XuNdYFDACcI';
    let api = 'http://api.trainingcolorme.tk/upload' + '?token=' + token;
    console.log("batman");
    axios.post(api,
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

