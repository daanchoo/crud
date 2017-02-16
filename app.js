


function displayUserDetails(user) {
  displayContainer.innerHTML = [
    "<p>name: " + user.name + "<p>",
    "<p>job: " + user.job + "<p>",
    "<p>id: " + user.id + "<p>"
  ].join('');
};

var createUserForm = document.getElementById("create_user_form");
var displayContainer = document.getElementById("display_container");


function onSubmit(e) {
  e.preventDefault();
  var form = e.target;
  clearFormErrors(form);
  var values = getFormValues(form);
  var validatedForm = validateForm(values);

  if (!validatedForm.isValid) {
    return displayFormErrors(form, validatedForm.errors);
  }


  e.target.reset();

  ServerAPI.createUser(values, function(data, status, res) {
    if (res.status === 201) {
      return displayUserDetails(data);
    }

    displayApiError(res);
  });
}

createUserForm.addEventListener("submit", onSubmit);
