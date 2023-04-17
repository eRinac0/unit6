function game() {
    let playerName = prompt("Введіть ваше ім'я:");
  
    let isAdult = confirm("Ця гра призначена для повнолітніх. Ви підтверджуєте, що вам є 18 років чи більше?");
    if (!isAdult) {
      alert("Вибачте, але ця гра для повнолітніх :(");
      return;
    }
  let resultgame=0;
    alert(`Вітаю, ${playerName} у грі \"Помста злого Javascript розробника\"!`);
    alert("Ви у темній кімнаті");
    alert("Перед вами екран на якому людина у масці на якій були 2 букви");
    alert("Js");
    alert(`Привіт, ${playerName} ,я слідкував за тобою давно`);
    alert("І я знаю як ти на форумах писав образливі речі про javascript!");
    alert("Ти думав тобі це зійде з рук?");
    alert("О ні,зараз ти поплатися за це ");
    alert("я буду задавати тобі питання , якщо ти відповіси на 6 з них правильно - я дам тобі другий шанс та відпущу");
    alert("Але якщо менше, то життя твое стане суцільним стражданням");
    let question1 =prompt("Почнемо , Яке ключове слово використовується для оголошення змінної JavaScript? \n1-var\n2-let\n3-const\n4- всі")
if(question1==4)
{
  resultgame++;
}
alert("Що ж,не погано ,але я не скажу чи вірна твоя відповідь,в кінці дізнаєшся....")
let question2 =prompt("Який оператор використовується для порівняння значень та типів JavaScript? \n1-===\n2-=>\n3-<>")
if(question2==1)
{
  resultgame++;
}
let question3 =prompt("Який метод використовується для додавання елемента в кінець масиву JavaScript? \n1-pop()\n2-push()\n3-shift()\n4-unshift()")
if(question3==2)
{
  resultgame++;
}
let question4 =prompt("Який цикл виконується, доки умова не стане хибною в JavaScript? \n1-while\n2-for\n3- do-while\n4-switch")
if(question4==1)
{
  resultgame++;
}
let question5 =prompt("Який метод використовується для видалення елемента з масиву за індексом JavaScript? \n1- remove()\n2-delete()\n3- splice()\n4-slice()")
if(question5==3)
{
  resultgame++;
}
let question6=prompt("Який оператор використовується для об'єднання двох або більше масивів JavaScript? \n1-join()\n2-concat()\n3- slice()\n4-reduce()")
if(question6==2)
{
  resultgame++;
}
let question7 =prompt("Який метод використовується для виклику функції через певний проміжок часу в JavaScript? \n1-setTimeout()\n2-setInterval()\n3-setImmediate()\n4-requestAnimationFrame()")
if(question7==1)
{
  resultgame++;
}
switch (resultgame) {
  case 0,1,2,3:
    alert(`Ти набрав ${resultgame} балів,це дуже погано......для тебе))))`);
    alert("Смерть надто просте покарання,натомість ти залишишся тут і будеш весь залишок свого життя програмувати на javascript УХАХАХАХАХАХАХАХАХ");
    break;
case 4,5:
  alert(`Ти набрав ${resultgame} балів,майже вийшло , я тебе відпускаю та вже розповсюдив про тебе інформіцію,тепер ти можеш стати лише джуном ,вічним джуном.....`);
  break
  case 6,7:
    alert("Хм,а ти не погано впорався,вітаю, ти вільний, але пам'ятай,я слідкую за тобою");
  default:
    break;
}
alert(`${playerName}, дякую за проходження цієї текстової гри)`);
  }