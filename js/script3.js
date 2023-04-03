function calculate(num11,num22, opp) {
  let numbers = [];
  if (num11 && num22 && opp) {
    numbers.push(num11, num22);
  }
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
let num11 = Number(document.getElementById("num11").value);
 let num22 = Number(document.getElementById("num22").value);
  let opp = document.getElementById("opp").value;
  let result =calculate(num11,num22,opp);  
  alert(result[0]); 
}
// function arithmeticOperation(a, b, operator) {
//   let result;
//   if (Array.isArray(a) && Array.isArray(b)) {
//     if (a.length !== b.length) {
//       return "Error: arrays must have same length";
//     }
//     result = [];
//     for (let i = 0; i < a.length; i++) {
//       if (isNaN(a[i]) || isNaN(b[i])) {
//         return "Error: input must be a number";
//       }
//       switch (operator) {
//         case "+":
//           result.push(a[i] + b[i]);
//           break;
//         case "-":
//           result.push(a[i] - b[i]);
//           break;
//         case "*":
//           result.push(a[i] * b[i]);
//           break;
//         case "/":
//           if (b[i] === 0) {
//             return "Error: division by zero";
//           }
//           result.push(a[i] / b[i]);
//           break;
//         default:
//           return "Error: invalid operator";
//       }
//     }
//   } else if (typeof a === "number" && typeof b === "number") {
//     if (isNaN(a) || isNaN(b)) {
//       return "Error: input must be a number";
//     }
//     switch (operator) {
//       case "+":
//         result = a + b;
//         break;
//       case "-":
//         result = a - b;
//         break;
//       case "*":
//         result = a * b;
//         break;
//       case "/":
//         if (b === 0) {
//           return "Error: division by zero";
//         }
//         result = a / b;
//         break;
//       default:
//         return "Error: invalid operator";
//     }
//   } else {
//     return "Error: input must be a number or an array of numbers";
//   }
//   if (typeof result === "number") {
//     alert(result);
//   } else {
//     alert(result.join(", "));
//   }
//   return result;
// }

// // Примеры использования функции:
// arithmeticOperation([1, 2, 3], [4, 5, 6], "+"); // [5, 7, 9]
// arithmeticOperation(10, 5, "-"); // 5
// arithmeticOperation([2, 4, 6], [1, 0, 2], "/"); // [2, Infinity, 3]
// arithmeticOperation("hello", [1, 2, 3], "*"); // "Error: input must be a number"
// arithmeticOperation({ a: 5, b: 10 }, { a: 2, b: 4 }, "*"); // "Error: input must be a number or an array of numbers"
// arithmeticOperation({ a: 5, b: 10 }, { a: 2, b: 4 }, "+"); // { result: "Error: input must be a number or an array of numbers" }
