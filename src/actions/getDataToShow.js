import axios from 'axios';


export function getPostToShow(value) {

  return function (dispatch) {
    console.log( "ACTION :" , localStorage.getItem("token") , "      VALUE :" , value);
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
        console.log("COMMENT IN ACTION",response.data.data);
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


export function getInfoToShow(user_id) {
  return function (dispatch) {
    axios.get('http://api.trainingcolorme.tk/profile/'+user_id+'?token=')
      .then(function (response) {
        dispatch(loadInfo(response));
      })
      .catch(function (error) {
        throw (error);
      });
  };
}
export function loadInfo(response) {
  return({
    type : "LOAD_INFO",
    info : response.data.data.user
  });
}


export function loadPageId(token) {
  return({
    type: "LOAD_PAGE_ID",
    token : token
  });
}
