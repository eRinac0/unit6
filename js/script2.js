function math(num1,num2,op){
    let result=0;
    switch (op) {
        case '+':
             result= num1+num2;
            break;
        case '-':
            result= num1-num2;
          break;
        case '*':
            result= num1*num2;
        break;
        case '/':
            result= num1/num2;
          break;
        default:
            alert("Ви ввели не доступну дію,спробуйте знову");
         break;
    }
    alert(result);
}
function fun() {
let num1 = Number(document.getElementById("num1").value);
let num2 = Number(document.getElementById("num2").value);
let op = document.getElementById("op").value;
math(num1,num2,op);
}


