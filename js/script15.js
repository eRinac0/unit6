var box = document.getElementById("box");
var upButton = document.getElementById("up");
var downButton = document.getElementById("down");
var leftButton = document.getElementById("left");
var rightButton = document.getElementById("right");

function moveUp() {
  box.style.transform = "translateY(-100px)";
}

function moveDown() {
  box.style.transform = "translateY(100px)";
}

function moveLeft() {
  box.style.transform = "translateX(-100px)";
}

function moveRight() {
  box.style.transform = "translateX(100px)";
}

function resetTransform() {
  box.style.transform = "none";
}

upButton.addEventListener("click", moveUp);
downButton.addEventListener("click", moveDown);
leftButton.addEventListener("click", moveLeft);
rightButton.addEventListener("click", moveRight);
box.addEventListener("transitionend", resetTransform);
