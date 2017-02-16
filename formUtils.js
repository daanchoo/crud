// argument FormElement
// returns form input values in an Object {}.
function getFormValues(form) {
  var fields = form.querySelectorAll("[name]");
  var values = {};
  
  for (var i = 0; i < fields.length; i++) {
    var fieldName = fields[i].name;
    var fieldValue = fields[i].value;
    values[fieldName] = fieldValue;
  }

  return values;
}


// fieldName är key
// values är obj
// argument Object
function validateForm(values) {
  var errors = {};

  Object.keys(values).forEach(function(fieldName) {
    var fieldValue = values[fieldName];

    if (fieldValue === "") {
      errors[fieldName] = fieldName + " is required.";
    }
  });

  return {
    errors: errors,
    isValid: Object.keys(errors).length === 0
  };
}


// Display form errors.
// arugments: FormElement, error object
function displayFormErrors(form, errors) {
  Object.keys(errors).forEach(function(fieldName) {
    var error = errors[fieldName];
    var fieldElement = form.querySelector("[name="+ fieldName +"]");
    fieldElement.nextElementSibling.innerHTML = "<i>" + error + "</i>";
  });
}


// Clear errors from form.
// argument FormElement
function clearFormErrors(form) {
  var errors = form.querySelectorAll('.error_msg');
  for (var i = 0; i < errors.length; i++) {
    errors[i].innerHTML = "";
  }
}