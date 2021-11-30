const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const form = document.querySelector('#signUp');

// validates that the field is completed
const isRequired = value => value === '' ? false : true;
// validates emails
const isEmailValid = (emails) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(emails);
}
//
const showError = (input, message) => {
    // gets input - this gets parent element which is the div "field"
    const formField = input.parentElement;
    // remove success class and add error class 
    formField.classList.remove('success');
    formField.classList.add('error');

    // show error
    const error = formField.querySelector('small');
    error.textContent = message;
}

const showSuccess = (input) => {
    // gets input - this gets parent element which is the div "field"
    const formField = input.parentElement;
    // remove success class and add error class 
    formField.classList.remove('error');
    formField.classList.add('success');
    // doesnt display the error message
    const error = formField.querySelector('small');
    error.textContent = '';
}

const checkFirstName = () => {
    let valid = false;
    const firstNames = firstName.value.trim();

    if(!isRequired(firstNames)) {
        showError(firstName, 'First Name cannot be blank');
    } else {
        showSuccess(firstName);
        valid = true;
    }
    return valid;
}

const checkLastName = () => {
    let valid = false;
    const lastNames = lastName.value.trim();

    if(!isRequired(lastNames)) {
        showError(lastName, 'Last Name cannot be blank');
    } else {
        showSuccess(lastName);
        valid = true;
    }
    return valid;
}

const checkEmail = () => {
    let valid = false;
    const emails = email.value.trim();
    if (!isRequired(emails)) {
        showError(email, 'Email cannot be blank.');
    } else if (!isEmailValid(emails)) {
        showError(email, 'Email is not valid.')
    } else {
        showSuccess(email);
        valid = true;
    }
    return valid;
}

const checkPassword = () => {
    let valid = false;
    const passwords = password.value.trim();

    if(!isRequired(passwords)) {
        showError(password, 'Password cannot be blank');
    } else {
        showSuccess(password);
        valid = true;
    }
    return valid;
}

form.addEventListener('submit', function(e) {
    // prevents form from submitting 
    e.preventDefault();
    // validate form
    // call each function to validate everything
    let isFirstNameValid = checkFirstName(),
        isLastNameValid = checkLastName(),
        isEmailValid = checkEmail(),
        isPasswordValid = checkPassword();
    // form is valid when all fields are completed accurately
    let isFormValid = isFirstNameValid &&
        isLastNameValid &&
        isEmailValid &&
        isPasswordValid;
    // submit to server
    if (isFormValid) {
        alert('Form submitted');
        return false;
    }
})