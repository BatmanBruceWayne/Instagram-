import axios from 'axios'

export function login(data) {

  console.log("LoginAction -> login(data)");
    axios.post('http://api.trainingcolorme.tk/login-user',data)
      .then((response) => {
        console.log('respone', response);
        return "OK";
      }).catch(function (error) {
        console.log(error);
        return error;
    });

}
