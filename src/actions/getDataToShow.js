import axios from 'axios';


export function getPostToShow(value) {

  return function (dispatch) {
    axios.get('http://api.trainingcolorme.tk/page?token='+localStorage.getItem("token")+'&page_id='+value )
  .then(function (response) {
        dispatch(loadPost(response));
      })
      .catch(function (error) {
        throw (error);
      });
  };
}
export function loadPost(response) {
  return ({
    type: "LOAD_POST",
    listPost: response.data.data.img_posts,
  });
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
export function loadComment(response) {
  return({
    type : "LOAD_COMMENT",
    listComment : response.data.data.img_comments
  });
}

