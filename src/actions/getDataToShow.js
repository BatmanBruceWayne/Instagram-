import axios from 'axios';

export function getDataToShow() {

  return function (dispatch) {
    axios.get('http://api.trainingcolorme.tk/' + 'page?token='  + '&page_id=0' )
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
