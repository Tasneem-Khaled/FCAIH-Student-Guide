var usernameInput = document.querySelector('input[type="text"]');
var emailInput = document.querySelector('input[type="email"]');
var passwordInput = document.querySelector('input[type="password"]');
var phoneInput = document.querySelector('input[type="tel"]');
var SignBtn = document.querySelector('.Sign-btn');
var signForm = document.querySelector('form#sign');
var successMessage = document.getElementById("successMessage");
var errorMessage = document.getElementById("errorMessage");

personInfo = [];
if (localStorage.getItem('database') !== null) {
    personInfo = JSON.parse(localStorage.getItem('database'));
}

signForm.addEventListener('submit', function (e) {
    redirectToLogin(e);
});

function validateInput(element) {
    var regex = {
        text: /^[A-Za-z0-9_-]{3,15}$/,
        email: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
        password: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
        tel: /^\d{11}$/
    };
    if (regex[element.type].test(element.value.trim())) {
        element.classList.add('is-valid');
        element.classList.remove('is-invalid');
        return true;
    } else {
        element.classList.add('is-invalid');
        element.classList.remove('is-valid');
        return false;
    }
}

var inputs = document.querySelectorAll('input');
for (var i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('input', function (e) {
        validateInput(e.target);
        errorMessage.classList.add('d-none');
    });
}

function redirectToLogin(e) {
    e.preventDefault();
    if (
        usernameInput.value.trim() == '' &&
        emailInput.value.trim() == '' &&
        passwordInput.value.trim() == '' &&
        phoneInput.value.trim() == ''
    ) {
        validateInput(usernameInput);
        validateInput(emailInput);
        validateInput(passwordInput);
        validateInput(phoneInput);
        return;
    }
    if (usernameInput.value.trim() == '' || !validateInput(usernameInput)) {
        return;
    }
    if (emailInput.value.trim() == '' || !validateInput(emailInput)) {
        return;
    }
    if (passwordInput.value.trim() == '' || !validateInput(passwordInput)) {
        return;
    }
    if (phoneInput.value.trim() == '' || !validateInput(phoneInput)) {
        return;
    }
    if (searchForEmail(errorMessage)) {
        return;
    }

    var person = {
        name: usernameInput.value.trim(),
        email: emailInput.value.trim(),
        phone: phoneInput.value.trim(),
        password: passwordInput.value
    };
    personInfo.push(person);
    localStorage.setItem('database', JSON.stringify(personInfo));
    successMessage.classList.remove('d-none');

    setTimeout(function () {
        window.location.href = 'index.html';
    }, 800);
}

var userIndex = null;
function searchForEmail(message) {
    for (var i = 0; i < personInfo.length; i++) {
        if (personInfo[i].email.toLowerCase() == emailInput.value.trim().toLowerCase()) {
            userIndex = i;
            message.classList.remove('d-none');
            if (message == errorMessage) {
                emailInput.classList.add('is-invalid');
            }
            return true;
        }
    }
    return false;
}