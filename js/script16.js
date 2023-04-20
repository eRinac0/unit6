var boxes = document.querySelectorAll(".box2");
var changeColorBtn = document.getElementById("changeColorButton");
let currentBoxIndex = 0;

changeColorBtn.addEventListener("click", () => {
  boxes[currentBoxIndex].classList.remove("red");

  if (currentBoxIndex === boxes.length - 1) {
    currentBoxIndex = 0;
  } else {
    currentBoxIndex++;
  }

  boxes[currentBoxIndex].classList.add("red");
});
