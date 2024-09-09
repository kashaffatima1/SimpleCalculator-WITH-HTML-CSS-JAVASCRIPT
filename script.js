//TO CALL THE FUNCTION
function calculate() {
    const firstNumber = parseFloat(document.getElementById("first number").value)
    const secondNumber = parseFloat(document.getElementById("second number").value)
    const operator = document.getElementById("operator").value

    let result;
     if(operator === "Addition"){
        result = firstNumber + secondNumber
     } else if (operator === "Subraction") {
        result = firstNumber - secondNumber
     } else if (operator === "Multiplication") {
        result = firstNumber * secondNumber
     } else if (operator === "Division") {
        result = firstNumber / secondNumber
     } else {
        result = "Please select a valid operator"
     }

     document.getElementById("result").innerText = "Result: " + result;
}