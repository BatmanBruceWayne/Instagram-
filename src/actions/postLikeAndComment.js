import axios from 'axios';

export function postLike(post_id) {

  return function (dispatch) {
    axios.post('http://api.trainingcolorme.tk/like/'+post_id +'/'+localStorage.getItem("userid")+'?token='+localStorage.getItem("token"),)
      .then(function (response) {
        dispatch(loadLike(response));
      })
      .catch(function (error) {
        console.log(error);
      });
  };
}
export function loadLike(response) {
  return({
    type : "LOAD_LIKE",
    likes : response.data.data.like_count
  });
}

export function postComment(post_id, value) {
  return function () {
    axios.post('http://api.trainingcolorme.tk/upload/'+post_id+'?token='+localStorage.getItem("token"),
      {
       comment_content : value.content
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
}
export function postDelete(post_id) {
  return function () {
    axios.post('http://api.trainingcolorme.tk/deletepost/'+post_id +'/'+localStorage.getItem("userid") + '?token='+localStorage.getItem("token"),
      )
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
}
