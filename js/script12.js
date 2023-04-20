


function generateRandomInteger(min, max) {
    min = Math.ceil(min); 
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

function guessn() {
    let guess=prompt("Введіть число");
let chislo = generateRandomInteger(0,100);
  console.log(chislo);

    do {
    if(chislo>guess)
    {
        alert("Ваше число меньше за загадане");
    }
    else if(chislo<guess)
    {
        alert("Ваше число більше за загадане");

    }

    guess=prompt("Введіть число");
  } while (guess!=chislo); 
   alert("Вітаю ,ви вгадали");
}
  