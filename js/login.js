var usernameInput = document.querySelector('input[type="text"]');
var emailInput = document.querySelector('input[type="email"]');
var passwordInput = document.querySelector('input[type="password"]');
var phoneInput = document.querySelector('input[type="tel"]');
var loginBtn = document.querySelector('.login-btn');
var loginForm = document.querySelector('form#login');
var successMessage = document.getElementById('successMessage');
var errorMessage = document.getElementById('errorMessage');
var warningMessage = document.getElementById('warningMessage');


personInfo = [];
if (localStorage.getItem('database') !== null) {
    personInfo = JSON.parse(localStorage.getItem('database'));
}

loginForm.addEventListener('submit', function (e) {
    redirectToHome(e);
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
        warningMessage.classList.add('d-none');
    });
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

function redirectToHome(e) {
    e.preventDefault();

    if (
        usernameInput.value.trim() == '' &&
        emailInput.value.trim() == '' &&
        passwordInput.value.trim() == ''
    ) {
        validateInput(usernameInput);
        validateInput(emailInput);
        validateInput(passwordInput);
        return;
    }
    if (usernameInput.value.trim() == '' || emailInput.value.trim() == '' || passwordInput.value.trim() == '') {
        validateInput(usernameInput); validateInput(emailInput); validateInput(passwordInput);
        return;
    }
    if (!searchForEmail(successMessage)) {
        errorMessage.classList.remove('d-none');
        usernameInput.classList.replace('is-valid', 'is-invalid');
        emailInput.classList.replace('is-valid', 'is-invalid');
        passwordInput.classList.replace('is-valid', 'is-invalid');
        return;
    }
    if (
        personInfo[userIndex].email.toLowerCase() === emailInput.value.trim().toLowerCase() &&
        personInfo[userIndex].password === passwordInput.value &&
        personInfo[userIndex].name.toLowerCase() === usernameInput.value.trim().toLowerCase()
    ) {
        localStorage.setItem('currentUsername', personInfo[userIndex].name)
        window.location.href = 'index.html';
    } else {
        warningMessage.classList.remove('d-none');
        usernameInput.classList.replace('is-valid', 'is-invalid');
        passwordInput.classList.replace('is-valid', 'is-invalid');
        successMessage.classList.add('d-none');
    }

}