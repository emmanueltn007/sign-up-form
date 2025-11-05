const firstNameInput = document.querySelector('.js-first-name-input');
const firstNameAlert = document.querySelector('.js-first-name');
const lastNameInput = document.querySelector('.js-last-name-input');
const lastNameAlert = document.querySelector('.js-last-name');
const emailInput = document.querySelector('.js-email-input');
const emailAlert = document.querySelector('.js-user-email');
const passwordInput = document.querySelector('.js-password-input');
const passwordAlert = document.querySelector('.js-user-password');
const errorIcon1 = document.querySelector('.js-icon-error-1');
const errorIcon2 = document.querySelector('.js-icon-error-2');
const errorIcon3 = document.querySelector('.js-icon-error-3');
const errorIcon4 = document.querySelector('.js-icon-error-4');
const confirmationMessage = document.querySelector('.js-submit-confirmation');
const submitBtn = document.querySelector('.js-submit-button');

function handleSubmitEvents () {
    if(firstNameInput.value.trim() === '') {
        firstNameAlert.textContent = "First name field cannot be empty";
        errorIcon1.style.display = "inline-block";
        firstNameInput.style.borderColor = "red";
    }
    else {
        firstNameAlert.textContent = "";
        errorIcon1.style.display = "none";
        firstNameInput.style.borderColor = "";
    }

    if (lastNameInput.value.trim() === '') {
        lastNameAlert.textContent = "Last name field cannot be empty";
        errorIcon2.style.display = "inline-block";
        lastNameInput.style.borderColor = "red";
    }
    else {
        lastNameAlert.textContent = "";
        errorIcon2.style.display = "none";
        lastNameInput.style.borderColor = "";
    }

    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailInput.value.trim() === '') {
        emailAlert.textContent = "Email field cannot be empty";
        errorIcon3.style.display = "inline-block";
        emailInput.style.borderColor = "red";
    }
    else if (!validEmail.test(emailInput.value.trim())) {
        emailAlert.textContent = "Looks like this is not an email";
        errorIcon3.style.display = "inline-block";
        emailInput.style.borderColor = "red";
    }
    else {
        emailAlert.textContent = "";
        errorIcon3.style.display = "none";
        emailInput.style.borderColor = "";
    }

    if (passwordInput.value.trim() === '') {
        passwordAlert.textContent = "Password field cannot be empty";
        errorIcon4.style.display = "inline-block";
        passwordInput.style.borderColor = "red";
    }
    else {
        passwordAlert.textContent = "";
        errorIcon4.style.display = "none";
        passwordInput.style.borderColor = "";
    }

    if (firstNameInput.value.trim() !== '' && lastNameInput.value.trim() !== '' && validEmail.test(emailInput.value.trim()) && passwordInput.value.trim() !== '') {
        confirmationMessage.textContent= "Thanks for signing up🎉You'll receive an email confirmation shortly.";
    }
}

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    handleSubmitEvents();
});
