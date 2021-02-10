"use strict";

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

const updateScore = function () {
  document.querySelector(".score").textContent = score;
};

const setBackgroundColor = function (color) {
  document.querySelector("body").style.backgroundColor = color;
};

const createRandomNumber = function () {
  return Math.trunc(Math.random() * 20 + 1);
};

let randomNumber = createRandomNumber();
let score = 20;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (score > 1) {
    if (!guess) {
      displayMessage("⛔ No number!");
    } else {
      score--;
      updateScore();

      if (guess === randomNumber) {
        displayMessage("✔ Correct Number!");
        setBackgroundColor("#60b347");

        document.querySelector(".number").textContent = randomNumber;
        document.querySelector(".number").style.width = "30rem";

        const highscore = document.querySelector(".highscore");

        if (score > highscore.textContent) {
          highscore.textContent = score;
        }
      } else if (guess !== randomNumber) {
        const message = guess > randomNumber ? "📈 Too high!" : "📉 Too low!";

        displayMessage(message);
      }
    }
  } else if (score <= 1) {
    displayMessage("❌ You missed all atempts!");
    setBackgroundColor("#a83232");
  }
});

document.querySelector(".again").addEventListener("click", function () {
  randomNumber = createRandomNumber();
  score = 20;

  updateScore();
  displayMessage("Start guessing...");
  setBackgroundColor("#222");

  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
});
