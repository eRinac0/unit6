function game() {
    let playerName = prompt("Введіть ваше ім'я:");
  
    let isAdult = confirm("Ця гра призначена для повнолітніх. Ви підтверджуєте, що вам є 18 років чи більше?");
    if (!isAdult) {
      alert("Вибачте, але ця гра для повнолітніх :(");
      return;
    }
  
    alert(`Вітаю, ${playerName} у грі \"Помста злого Javascript розробника\"!`);
  }