export function sendPhotoOnAPI(value) {
  return function () {
    let token = localStorage.getItem("token");
    let api = 'http://api.trainingcolorme.tk/upload' + '?token=' + token;
    let formData = new FormData();
    formData.append('photo', value.photo_file);
    formData.append('description', value.description);
    let xhr = new XMLHttpRequest();
    xhr.open('POST', api, true);
    xhr.send(formData);
  };
}
