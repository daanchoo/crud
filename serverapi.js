var ServerAPI = (function() {
  var BASE_URL = 'https://reqres.in/api';

  function getUser(userId, callback) {
    $.ajax({
      method: 'GET',
      url: BASE_URL + '/users/' + userId,
      complete: callback,
    });
  }

  function createUser(data, callback) {
    $.ajax({
      method: 'POST',
      url: BASE_URL + '/users/',
      success: callback,
      data: data
    });
  }

  return {
    getUser: getUser,
    createUser: createUser
  };
})();

function displayApiError(error) {
  displayContainer.innerHTML = "<p>" + error.status + "<p>";
};
