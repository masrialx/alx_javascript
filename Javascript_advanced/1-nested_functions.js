// Create a variable named globalVariable with value Welcome
var globalVariable = "Welcome";

// Create a function outer that:
function outer() {
    // Alerts the content of the variable globalVariable
    alert(globalVariable);

    // Creates a variable named course with value Holberton
    var course = "Holberton";

    // Creates a function inner that:
    function inner() {
        // Alerts the content of the variable globalVariable and course (concatenated)
        alert(globalVariable + " " + course);

        // Creates a variable named exclamation with value !
        var exclamation = "!";

        // Creates a function inception that alerts the content of the variable globalVariable, course, and exclamation (concatenated)
        function inception() {
            alert(globalVariable + " " + course + exclamation);
        }

        // Calls the function inception
        inception();
    }

    // Calls the function inner
    inner();
}

// Call the function outer
outer();

// Call the function inner within outer
// inner(); // You can optionally call inner within outer again

// Call the function inception within inner
// inner(); // You can optionally call inner again and then inception within inner
