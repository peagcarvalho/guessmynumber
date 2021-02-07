"use strict";

let randomNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (score > 0) {
    if (guess) {
      score--;
      document.querySelector(".score").textContent = score;

      if (guess > randomNumber) {
        document.querySelector(".message").textContent = "Too high!";
      } else if (guess < randomNumber) {
        document.querySelector(".message").textContent = "Too low!";
      } else if (guess === randomNumber) {
        document.querySelector(".message").textContent = "✔ Correct Number!";

        document.querySelector(".number").textContent = randomNumber;

        document.querySelector("body").style.backgroundColor = "#60b347";

        document.querySelector(".number").style.width = "30rem";

        const highscore = document.querySelector(".highscore");

        if (score > highscore.textContent) {
          highscore.textContent = score;
        }
      }
    } else {
      document.querySelector(".message").textContent =
        "You didn't type a number!";
    }
  } else {
    document.querySelector(".message").textContent =
      "❌ You missed all atempts!";

    document.querySelector("body").style.backgroundColor = "#a83232";
  }
});

document.querySelector(".again").addEventListener("click", function () {
  document.querySelector("body").style.backgroundColor = "#222";

  document.querySelector(".number").style.width = "15rem";

  document.querySelector(".number").textContent = "?";

  document.querySelector(".message").textContent = "Start guessing...";

  randomNumber = Math.trunc(Math.random() * 20 + 1);
  score = 20;

  document.querySelector(".score").textContent = score;

  document.querySelector(".guess").value = "";
});
