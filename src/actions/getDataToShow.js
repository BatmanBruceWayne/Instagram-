import axios from 'axios';

export function getDataToShow() {
  return function (dispatch) {
    axios.get('http://api.trainingcolorme.tk/' + 'page?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjI4LCJpc3MiOiJodHRwOi8vYXBpLnRyYWluaW5nY29sb3JtZS50ay9sb2dpbi11c2VyIiwiaWF0IjoxNTA1Nzk0NjQ3LCJleHAiOjE1MDU3OTgyNDcsIm5iZiI6MTUwNTc5NDY0NywianRpIjoiNmZNaGVJc0U2Q0dzVlNOMSJ9.17hq4_H-lzYzKfGLHT6NbjpMbkbGASga0pSenwA-CfY' + '&page_id=0' )
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

