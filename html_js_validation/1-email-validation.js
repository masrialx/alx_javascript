// Function to validate email format
function validateEmail() {
    var emailInput = document.getElementById("email");

    var errorElement = document.getElementById("error");

    var emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;

    var email = emailInput.value;

    if (emailRegex.test(email)) {
        errorElement.textContent = ""; 
        return true; 
    } else {
        errorElement.textContent = "Please enter a valid email address.";
        return false; 
    }
}

var emailForm = document.getElementById("emailForm");
emailForm.addEventListener("submit", function (event) {
    if (!validateEmail()) {
        event.preventDefault(); 
    }
});
