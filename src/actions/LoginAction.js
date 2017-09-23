import axios from 'axios'

export function login(data) {

  return ({
    type : "LOGIN_ACTION",
    data : data
  });
}
