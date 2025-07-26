const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const emailIcon = document.getElementById('emailIcon');
const passwordIcon = document.getElementById('passwordIcon');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const emailSuccess = document.getElementById('emailSuccess');
const passwordSuccess = document.getElementById('passwordSuccess');
const overallSuccess = document.getElementById('overallSuccess');
const validationStatus = document.getElementById('validationStatus');
const submitBtn = document.getElementById('submitBtn');
const form = document.getElementById('dynamicForm');

let emailValid = false;
let passwordValid = false;

function emailOnChange() {
    const email = emailInput.value.trim();

    if (email.length > 3 && email.includes('@') && email.includes('.')) {
        emailValid = true;
        emailInput.classList.remove('error');
        emailInput.classList.add('success');
        emailIcon.classList.remove('error')
        emailIcon.classList.add('success');
        emailIcon.textContent = 'S';
        emailIcon.classList.add('show');
        emailError.classList.remove('show');
        emailSuccess.classList.add('show');
    } else if (email.length > 0) {
        emailValid = false;
        emailInput.classList.remove('success');
        emailInput.classList.add('error');
        emailIcon.classList.remove('success');
        emailIcon.classList.add('error');
        emailIcon.textContent = '✗';
        emailIcon.classList.add('show');
        emailSuccess.classList.remove('show');
        emailError.classList.add('show');
    } else {
        emailInput.classList.remove('error', 'success');
        emailIcon.classList.remove('show', 'error', 'success');
        emailError.classList.remove('show');
        emailSuccess.classList.remove('show');
        emailValid = false;
    }
}