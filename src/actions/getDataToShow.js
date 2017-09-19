import axios from 'axios';

export function getDataToShow() {
  return function (dispatch) {
    axios.get('http://api.trainingcolorme.tk/' + 'page?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjI4LCJpc3MiOiJodHRwOi8vYXBpLnRyYWluaW5nY29sb3JtZS50ay9sb2dpbi11c2VyIiwiaWF0IjoxNTA1ODE0MzA3LCJleHAiOjE1MDU4MTc5MDcsIm5iZiI6MTUwNTgxNDMwNywianRpIjoiaVY2bkJsZlNGNzJJa1BESyJ9.5vfbQgIRT_8C6rhD3H7Z1KRWpylDM3Ct6t4-1-HcJW8' + '&page_id=0' )
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

