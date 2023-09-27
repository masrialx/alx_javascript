function handleFormSubmit(event) {
    event.preventDefault(); 

    var nameInput = document.getElementById("name");
    var emailInput = document.getElementById("email");

    var errorMessage = document.getElementById("error");

    var name = nameInput.value.trim();
    var email = emailInput.value.trim();

    var validationErrors = [];

    if (name === "") {
        validationErrors.push("Name is required.");
    }

    if (email === "") {
        validationErrors.push("Email is required.");
    } else if (!isValidEmail(email)) {
        validationErrors.push("Please enter a valid email address.");
    }

    if (validationErrors.length > 0) {
        errorMessage.textContent = validationErrors.join(" ");
    } else {
        errorMessage.textContent = "Form submitted successfully!";
    }
}

function isValidEmail(email) {
    var emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
    return emailRegex.test(email);
}

var submitForm = document.getElementById("submitForm");
submitForm.addEventListener("submit", handleFormSubmit);
