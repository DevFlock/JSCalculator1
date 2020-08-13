function Calculate(){
    var input = document.getElementById("inputest").value;
    var splitted = input.split(" ");
    var calc;
    var number1 = Number(splitted[0]);
    var number2 = Number(splitted[2]);

    if (splitted[1] === "+") {
        calc = number1 + number2;
    }

    else if (splitted[1] === "-") {
        calc = number1 - number2;
    }
        
    else if (splitted[1] === "*") {
        calc = number1 * number2;
    }
        
    else if (splitted[1] === "/") {
        calc = number1 / number2;
    }

    document.getElementById("output").innerHTML = calc;
}