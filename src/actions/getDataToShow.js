import axios from 'axios';

export function getDataToShow(value) {

  return function (dispatch) {
    console.log( "ACTION :" , localStorage.getItem("token") , "      VALUE :" , value);
    axios.get('http://api.trainingcolorme.tk/page?token='+localStorage.getItem("token")+'&page_id='+value )
  .then(function (response) {
        dispatch(loadSuccess(response));
      })
      .catch(function (error) {
        throw (error);
      });

  };
}
export function loadSuccess(response) {
  return ({
    type: "LOAD_SUCCESS",
    listPost: response.data.data.img_posts,
  });
}
export function loadPageId(token) {
  return({
    type: "LOAD_PAGE_ID",
    token : token
  });
}
export function getToken(token) {
  console.log(" ACTION" , token);
  return({
    type : "GET_TOKEN",
  });
}
