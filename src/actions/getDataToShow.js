import axios from 'axios';

export function getPostToShow(value) {

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
export function getCommentToShow() {
  return function (dispatch) {
    axios.get('http://api.trainingcolorme.tk/imgC-data?token='+localStorage.getItem("token") )
      .then(function (response) {
        dispatch(loadComment(response));
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
export function loadComment(response) {
  return({
    type : "LOAD_COMMENT",
    listComment : response.data.data.img_comments
  });
}
