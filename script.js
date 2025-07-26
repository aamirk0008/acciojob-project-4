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
    showGoodToGoOrRedText();
}

function passwordOnChange() {
    const password = passwordInput.value;

    if (password.length > 8) {
        passwordInput.classList.remove('error');
        passwordInput.classList.add('success');
        passwordIcon.classList.remove('error');
        passwordIcon.classList.add('success');
        passwordIcon.textContent = 'S';
        passwordIcon.classList.add('show');
        passwordError.classList.remove('show');
        passwordSuccess.classList.add('show');
        passwordValid = true;
    } else if (password.length > 0) {
        passwordInput.classList.remove('success');
        passwordInput.classList.add('error');
        passwordIcon.classList.remove('success');
        passwordIcon.classList.add('error');
        passwordIcon.textContent = '✗';
        passwordIcon.classList.add('show');
        passwordSuccess.classList.remove('show');
        passwordError.classList.add('show');
        passwordValid = false;
    } else {
        passwordInput.classList.remove('error', 'success');
        passwordIcon.classList.remove('show', 'error', 'success');
        passwordError.classList.remove('show');
        passwordSuccess.classList.remove('show');
        passwordValid = false;
    }
    showGoodToGoOrRedText();
}

function showGoodToGoOrRedText() {
    if (emailValid && passwordValid) {
        overallSuccess.classList.add('show');
        validationStatus.textContent = '✅ All good to go'
        validationStatus.className = 'validation-status success-state show';
        submitBtn.disabled = false;
    } else if (emailInput.value.length > 0 || passwordInput.value.length > 0) {
        overallSuccess.classList.remove('show');

        if (!emailValid && !passwordValid) {
            validationStatus.textContent = '❌ Both email and password need attention';
        } else if (!emailValid) {
            validationStatus.textContent = '❌ Make sure email is more than 3 characters and has @ and .';
        } else if (!passwordValid) {
            validationStatus.textContent = '❌ Make sure password is more than 8 characters';
        }

        validationStatus.className = 'validation-status error-state show';
        submitBtn.disabled = true;
    } else {
        overallSuccess.classList.remove('show');
        validationStatus.textContent = 'Please fill in the form above';
        validationStatus.className = 'validation-status show';
        submitBtn.disabled = true;
    }
}

function handleSubmit(event) {
    event.preventDefault();

    if (!emailValid || !passwordValid) {
        alert('Please fix the errors before submitting.');
        return;
    } 

    showConfirmationMessage();
}

function showConfirmationMessage() {
    const confirmed = confirm('Are you sure you want to submit the form?');
    if (confirmed) {
       showAlert()
    } else {
        clearAllValues();
    }
}

function showAlert() {
    alert('SignUp! successfully!');
}

function clearAllValues() {
    emailInput.value = '';
    passwordInput.value = '';
    
    emailInput.classList.remove('error', 'success');
    emailIcon.classList.remove('show', 'error', 'success');
    emailError.classList.remove('show');
    emailSuccess.classList.remove('show');
    emailValid = false;

    passwordInput.classList.remove('error', 'success');
    passwordIcon.classList.remove('show', 'error', 'success');
    passwordError.classList.remove('show');
    passwordSuccess.classList.remove('show');
    passwordValid = false;
}