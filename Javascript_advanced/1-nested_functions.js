var globalVariable = "Welcome";

function outer() {
    var course = "Holberton";
    alert(globalVariable);

    function inner() {
        alert(globalVariable + " " + course);

        var exclamation = "!";

        function inception() {
            alert(globalVariable + " " + course + exclamation);
        }

        inception();
    }

    inner();
}


outer();

