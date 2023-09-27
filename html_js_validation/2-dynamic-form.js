function generateInputFields(numFields) {
    var inputContainer = document.getElementById("inputContainer");
    inputContainer.innerHTML = "";
    
    for (var i = 1; i <= numFields; i++) {
        var inputField = document.createElement("input");
        inputField.type = "text";
        inputField.name = "field" + i;
        inputField.placeholder = "Field " + i;
        inputContainer.appendChild(inputField);
    }
}

function validateForm() {
    var numFieldsDropdown = document.getElementById("numFields");
    var selectedValue = parseInt(numFieldsDropdown.value);
    var inputContainer = document.getElementById("inputContainer").querySelectorAll("input");
    
    for (var i = 0; i < selectedValue; i++) {
        if (inputContainer[i].value.trim() === "") {
            alert("Please fill in all fields.");
            return false; 
        }
    }
    
    return true; 
}

var numFieldsDropdown = document.getElementById("numFields");
numFieldsDropdown.addEventListener("change", function () {
    var selectedValue = parseInt(numFieldsDropdown.value);
    generateInputFields(selectedValue);
});

var dynamicForm = document.getElementById("dynamicForm");
dynamicForm.addEventListener("submit", function (event) {
    if (!validateForm()) {
        event.preventDefault(); 
    }
});

generateInputFields(parseInt(numFieldsDropdown.value));
