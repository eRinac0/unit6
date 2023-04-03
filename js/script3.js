
function arithmeticOperation(a, b, operator) {
  let result;
  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) {
      return "Error: arrays must have same length";
    }
    result = [];
    for (let i = 0; i < a.length; i++) {
      if (isNaN(a[i]) || isNaN(b[i])) {
        return "Error: input must be a number";
      }
      switch (operator) {
        case "+":
          result.push(a[i] + b[i]);
          break;
        case "-":
          result.push(a[i] - b[i]);
          break;
        case "*":
          result.push(a[i] * b[i]);
          break;
        case "/":
          if (b[i] === 0) {
            return "Error: division by zero";
          }
          result.push(a[i] / b[i]);
          break;
        default:
          return "Error: invalid operator";
      }
    }
  } else if (typeof a === "number" && typeof b === "number") {
    if (isNaN(a) || isNaN(b)) {
      return "Error: input must be a number";
    }
    switch (operator) {
      case "+":
        result = a + b;
        break;
      case "-":
        result = a - b;
        break;
      case "*":
        result = a * b;
        break;
      case "/":
        if (b === 0) {
          return "Error: division by zero";
        }
        result = a / b;
        break;
      default:
        return "Error: invalid operator";
    }
  } else {
    return "Error: input must be a number or an array of numbers";
  }
  if (typeof result === "number") {
    alert(result);
  } else {
    alert(result.join(", "));
  }
  return result;
}
function funn() {
  let numbers=[];
let num11 = Number(document.getElementById("num11").value);
let num22 = Number(document.getElementById("num22").value);
  let opp = document.getElementById("opp").value;
  arithmeticOperation(num11,num22,opp);  

}