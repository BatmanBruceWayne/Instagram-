import axios from 'axios';

export function getDataToShow() {
  return function (dispatch) {
    axios.get('http://api.trainingcolorme.tk/' + 'page?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjI4LCJpc3MiOiJodHRwOi8vYXBpLnRyYWluaW5nY29sb3JtZS50ay9sb2dpbi11c2VyIiwiaWF0IjoxNTA1Nzg4NjgxLCJleHAiOjE1MDU3OTIyODEsIm5iZiI6MTUwNTc4ODY4MSwianRpIjoidUxVS3JyS3hqOGs0Uk5QeSJ9.-LZwh_k7kfgBRXSZmSLaAnxDB55Ni25wa2Nyv301hp4' + '&page_id=0' )
  .then(function (response) {
        dispatch(loadSuccess(response));
      })
      .catch(function (error) {
        throw (error);
      });

  };
}


export function loadSuccess(response) {
  console.log("ROOT " , response.data.data.img_posts);

  return ({
    type: "LOAD_SUCCESS",
    listPost: response.data.data.img_posts,
  });
}

