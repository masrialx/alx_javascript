function validatePassword() {
    var passwordInput = document.getElementById("password");

    var errorElement = document.getElementById("error");

    var minLength = 8;
    var upperCaseRegex = /[A-Z]/;
    var lowerCaseRegex = /[a-z]/;
    var digitRegex = /[0-9]/;
    var specialCharRegex = /[!@#$%^&*]/;

    var password = passwordInput.value;

    var errorMessage = "";

    if (password.length < minLength) {
        errorMessage += "Password must be at least 8 characters long. ";
    }

    if (!upperCaseRegex.test(password)) {
        errorMessage += "Password must contain at least one uppercase letter. ";
    }

    if (!lowerCaseRegex.test(password)) {
        errorMessage += "Password must contain at least one lowercase letter. ";
    }

    if (!digitRegex.test(password)) {
        errorMessage += "Password must contain at least one numeric digit. ";
    }

    if (!specialCharRegex.test(password)) {
        errorMessage += "Password must contain at least one special character (!@#$%^&*). ";
    }

    if (errorMessage) {
        errorElement.textContent = errorMessage;
        return false; 
    } else {
        errorElement.textContent = ""; 
        return true; 
    }
}

var passwordForm = document.getElementById("passwordForm");
passwordForm.addEventListener("submit", function (event) {
    if (!validatePassword()) {
        event.preventDefault(); 
    }
});
