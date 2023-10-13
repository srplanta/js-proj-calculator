let result = 0;

let numString = "";
let operator = "";

function chek(value) {
    if (value === "00" ||
        value === "0" ||
        value === "1" ||
        value === "2" ||
        value === "3" ||
        value === "4" ||
        value === "5" ||
        value === "6" ||
        value === "7" ||
        value === "8" ||
        value === "9" ||
        value === ".") {
        document.getElementById("txtDisplay").value = numString + value;
        numString += value;
    } else if (value === "+" ||
        value === "-" ||
        value === "*" ||
        value === "/" ||
        value === "=") {
        if (operator === "") {
            operator = value;
        }
        if (operator === "+") {
            result += parseFloat(numString);
            document.getElementById("txtDisplay").value = result;

            numString = "";
            operator = value;
        } else if (operator === "-") {
            result -= parseFloat(numString);
            document.getElementById("txtDisplay").value = result;

            numString = "";
            operator = value;
        } else if (operator === "*") {
            result *= parseFloat(numString);
            document.getElementById("txtDisplay").value = result;

            numString = "";
            operator = value;
        } else if (operator === "/") {
            result /= parseFloat(numString);
            document.getElementById("txtDisplay").value = result;

            numString = "";
            operator = value;
        } else if (operator === "=") {
            result = parseFloat(numString);
            document.getElementById("txtDisplay").value = result;

            numString = "";
            operator = "";
        } else {
            result = 0;
            document.getElementById("txtDisplay").value = "WRONG OPERATION";

            numString = "";
            operator = "";
        }
    } else if (value === "AC") {
        result = 0;
        document.getElementById("txtDisplay").value = result;
        numString = "";
        operator = "";
    }
}   
