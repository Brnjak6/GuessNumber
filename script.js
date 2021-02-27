"strict mod";

//alert('odvezana ti je charapa');
let secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 10;
let highscore = 0;

document.querySelector(".btn__guess").addEventListener("click", function () {
  const guess = Number(document.querySelector(".input").value);

  if (!guess) {
    (document.querySelector(".message").textContent =
      "❌ Insert a number between 1 and 20 ❌"),
      (document.querySelector(".message").style.color = "red");
  } // Score is correct
  else if (guess === secretNumber) {
    (document.querySelector(".message").textContent = "That is correct!"),
      (document.querySelector(".message").style.color = "blue");
    document.querySelector(".secret__number").textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highest__number").textContent = highscore;
    }
  } // Score is too high
  else if (guess > secretNumber) {
    if (score > 1) {
      (document.querySelector(".message").textContent = "Too high..."), score--;
      document.querySelector(".score__number").textContent = score;
      document.querySelector(".message").style.color = "#DA6366";
    } else {
      document.querySelector(".message").textContent = "Game over...";
      document.querySelector(".message").style.color = "red";
      document.querySelector(".score__number").textContent = 0;
      document.body.style.background = "black";
    }
  } //Score is too low
  else if (guess < secretNumber) {
    if (score > 1) {
      (document.querySelector(".message").textContent = "Too low..."), score--;
      document.querySelector(".score__number").textContent = score;
      document.querySelector(".message").style.color = "#DA6366";
    } else {
      document.querySelector(".message").textContent = "Game Over...";
      document.querySelector(".message").style.color = "red";
      document.querySelector(".score__number").textContent = 0;
      document.body.style.background = "black";
    }
  }
});

// Reset button
document.querySelector("#btn__restart").addEventListener("click", function () {
  score = 10;
  secretNumber = Math.floor(Math.random() * 20) + 1;
  document.querySelector(".score__number").textContent = score;
  document.querySelector(".input").value = "";
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".message").style.color = "rgb(194, 223, 194)";
  document.querySelector(".secret__number").textContent = "?";
  document.body.style.background = "url(images/1.jpg)";
});
