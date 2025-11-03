const firstNameInput = document.querySelector('.js-first-name-input');
const firstNameAlert = document.querySelector('.js-first-name');
const lastNameInput = document.querySelector('.js-last-name-input')
const lastNameAlert = document.querySelector('.js-last-name');
const emailInput = document.querySelector('.js-email-input');
const emailAlert = document.querySelector('.js-user-email');
const passwordInput = document.querySelector('.js-password-input');
const passwordAlert = document.querySelector('.js-user-password');
const errorIcon = document.querySelector('.js-icon-error');
const submitBtn = document.querySelector('.js-submit-button');

function handleSubmitEvents () {
    if(firstNameInput.value === '') {
        firstNameAlert.textContent = "First name cannot be empty";
        errorIcon.style.display = "inlineblock";
        firstNameInput.style.borderColor = "red";
    }
    else {
        firstNameAlert.textContent = "";
        errorIcon.style.display = "none";
    }
    if (lastNameInput.value === '') {
        lastNameAlert.textContent = "Last name cannot be empty";
        errorIcon.style.display = "inlineblock";
        lastNameInput.style.borderColor = "red";
    }
    else {
        lastNameAlert.textContent = "";
        errorIcon.style.display = "none";
    }
    if (emailInput.value === '') {
        emailAlert.textContent = "Looks like this is not an email";
        errorIcon.style.display = "inlineblock";
        emailInput.style.borderColor = "red";
    }
    else {
        emailAlert.textContent = "";
        errorIcon.style.display = "none";
    }
    if (passwordInput.value === '') {
        passwordAlert.textContent = "Password field cannot be empty";
        errorIcon.style.display = "inlineblock";
        passwordInput.style.borderColor = "red";
    }
    else {
        passwordAlert.textContent = "";
        errorIcon.style.display = "none";
    }
}

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    handleSubmitEvents();
});
