let updatePasswordFormEl = document.getElementById("updatePasswordForm");

let newPasswordEl = document.getElementById("newPassword");
let newPasswordErrMsgEl = document.getElementById("newPasswordErrMsg");

let confirmPasswordEl = document.getElementById("confirmPassword");
let confirmPasswordErrMsgEl = document.getElementById("confirmPasswordErrMsg");

// Validation function for new password
let validateNewPassword = function() {
    if (newPasswordEl.value === "") {
        newPasswordErrMsgEl.textContent = "Required*";
    } else {
        newPasswordErrMsgEl.textContent = "";
    }
}

// Validation function for confirm password
let validateConfirmPassword = function() {
    let newPassword = newPasswordEl.value;
    let confirmPassword = confirmPasswordEl.value;
    
    if (newPassword !== confirmPassword) {
        confirmPasswordErrMsgEl.textContent = "Passwords must be same";
    } else {
        confirmPasswordErrMsgEl.textContent = "";
    }
}

// On blur validations
newPasswordEl.addEventListener("blur", validateNewPassword);
confirmPasswordEl.addEventListener("blur", validateConfirmPassword);

// On form submit
updatePasswordFormEl.addEventListener("submit", function(event) {
    event.preventDefault();
    validateNewPassword();
    validateConfirmPassword();
});
