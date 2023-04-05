const firstNameError = document.getElementById("error-message-first-name");
const lastNameError = document.getElementById("error-message-last-name");
const emailError = document.getElementById("error-message-email");
const numberError = document.getElementById("error-message-number");
const passwordError = document.getElementById("error-message-password");
const confirmPasswordError = document.getElementById("error-message-confirm-password");
const errorMessages = [firstNameError, lastNameError, emailError, numberError, passwordError, confirmPasswordError];
const registration = document.getElementById("registration");
const thankyou = document.getElementById("thankyou");
const continueBtn = document.getElementById("continue");

let validPassword = false;
const inputs = document.querySelectorAll("input");

const addError = (input, i) => {
    input.classList.add("error");
    errorMessages[i].style.visibility = "visible";
}

const removeError = (input, i) => {
    input.classList.remove("error");
    errorMessages[i].style.visibility = "hidden";
}

const passwordValidation = (password, confirmPassword) => {
    if(password.value !== confirmPassword.value) {
        addError(password, 4);
        addError(confirmPassword, 5);
        passwordError.innerHTML = 'Passwords do not match';
        confirmPasswordError.innerHTML = '';
        validPassword = false;
    } else {
      removeError(password, 4);
      removeError(confirmPassword, 5);
      validPassword = true;
    }
}

document.getElementById("submit").addEventListener("click", (event) => {
    //event.preventDefault();
    for(let i = 0; i < inputs.length; i++) {
        if(inputs[i].value === ''){
            addError(inputs[i], i);
        } 
    }

    for(let i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener("keyup", (event) => {
            if(inputs[i].value !== ''){
                removeError(inputs[i], i);
            } else {
                addError(inputs[i], i);
            }
        })
    }

    if(inputs[4].value !== '' && inputs[5].value !== ''){
        event.preventDefault();
        passwordValidation(inputs[4], inputs[5]);
    }

    if(inputs[0].value !== "" && inputs[1].value !== "" && inputs[2].value !== "" && inputs[3].value !== "" && validPassword === true){
      registration.style.display = "none";
      thankyou.style.display = "flex";
    }
});

continueBtn.addEventListener("click", (event) => {
    for(let i = 0; i < inputs.length; i++){
        inputs[i].value = '';
    }
    registration.style.display = "block";
    thankyou.style.display = "none";
})




