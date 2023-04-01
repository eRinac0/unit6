function calculate(numbers, opp) {
    let result = [];
    switch (opp) {
      case "+":
        result.push(numbers[0] + numbers[1]);
        break;
      case "-":
        result.push(numbers[0] - numbers[1]);
        break;
      case "*":
        result.push(numbers[0] * numbers[1]);
        break;
      case "/":
        result.push(numbers[0] / numbers[1]);
        break;
      default:
        result.push("Invalid operator");
    }
    return result;
  }
  function funn() {
    let numbers=[];
    numbers[0] = Number(document.getElementById("num11").value);
    numbers[1] = Number(document.getElementById("num22").value);
    let opp = document.getElementById("opp").value;
    calculate(numbers, opp); 
    let result = calculate(numbers, opp); 
    alert(result[0]); 
  }
  