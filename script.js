const firstNameInput = document.querySelector('.js-first-name-input');
const firstNameAlert = document.querySelector('.js-first-name');
const lastNameInput = document.querySelector('.js-last-name-input')
const lastNameAlert = document.querySelector('.js-last-name');
const emailInput = document.querySelector('.js-email-input');
const emailAlert = document.querySelector('.js-user-email');
const passwordInput = document.querySelector('.js-password-input');
const passwordAlert = document.querySelector('.js-user-password');
const errorIcon1 = document.querySelector('.js-icon-error-1');
const errorIcon2 = document.querySelector('.js-icon-error-2');
const errorIcon3 = document.querySelector('.js-icon-error-3');
const errorIcon4 = document.querySelector('.js-icon-error-4');
const submitBtn = document.querySelector('.js-submit-button');

function handleSubmitEvents () {
    if(firstNameInput.value === '') {
        firstNameAlert.textContent = "First name cannot be empty";
        errorIcon1.style.display = "inline-block";
        firstNameInput.style.borderColor = "red";
    }
    else {
        firstNameAlert.textContent = "";
        errorIcon1.style.display = "none";
    }
    if (lastNameInput.value === '') {
        lastNameAlert.textContent = "Last name cannot be empty";
        errorIcon2.style.display = "inline-block";
        lastNameInput.style.borderColor = "red";
    }
    else {
        lastNameAlert.textContent = "";
        errorIcon2.style.display = "none";
    }

    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!validEmail.test(emailInput.value)) {
        emailAlert.textContent = "Looks like this is not an email";
        errorIcon3.style.display = "inline-block";
        emailInput.style.borderColor = "red";
    }
    else {
        emailAlert.textContent = "";
        errorIcon3.style.display = "none";
    }
    if (passwordInput.value === '') {
        passwordAlert.textContent = "Password field cannot be empty";
        errorIcon4.style.display = "inline-block";
        passwordInput.style.borderColor = "red";
    }
    else {
        passwordAlert.textContent = "";
        errorIcon4.style.display = "none";
    }
}

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    handleSubmitEvents();
});
