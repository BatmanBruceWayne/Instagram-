import axios from 'axios';

export function getDataToShow() {
  return function (dispatch){
    axios.get('http://api.trainingcolorme.tk' + 'page?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjE4LCJpc3MiOiJodHRwOi8vYXBpLnRyYWluaW5nY29sb3JtZS50ay9yZWdpc3Rlci11c2VyIiwiaWF0IjoxNTA1NjMzNTQzLCJleHAiOjE1MDU2MzcxNDMsIm5iZiI6MTUwNTYzMzU0MywianRpIjoiVnZ6QVl6YW93a002RFd4NiJ9.6uUBFfXDLO_dNLh8WD0YX6I7dVqCHw3CLztpGMNA_EA'+'page_id=1')
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
    type : "LOAD_SUCCESS",
    listPost : response.data.data.img_posts ,
  });
}

