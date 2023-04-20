function getRandomPosition(max) {
    return Math.floor(Math.random() * max) + "px";
  }
  
  function changePositions() {
    var box1 = document.getElementById("box1");
    var box2 = document.getElementById("box2");
    var box3 = document.getElementById("box3");
  
    box1.style.top = getRandomPosition(window.innerHeight - 50); // вычитаем высоту элемента
    box1.style.left = getRandomPosition(window.innerWidth - 50); // вычитаем ширину элемента
  
    box2.style.top = getRandomPosition(window.innerHeight - 50); // вычитаем высоту элемента
    box2.style.left = getRandomPosition(window.innerWidth - 50); // вычитаем ширину элемента
  
    box3.style.top = getRandomPosition(window.innerHeight - 50); // вычитаем высоту элемента
    box3.style.left = getRandomPosition(window.innerWidth - 50); // вычитаем ширину элемента
  }
  
  window.onload = function () {
    changePositions();
    setInterval(changePositions, 1000);
  };
  