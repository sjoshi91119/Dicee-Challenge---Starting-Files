var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

if (randomNumber1 < randomNumber2) {
  document.getElementById("result").textContent = "Player 2 won ! 🚩";
} else if (randomNumber1 > randomNumber2) {
  document.getElementById("result").textContent = "Player 1 won ! 🚩";
} else {
  document.getElementById("result").textContent = "Its a Draw !";
}

document
  .querySelector(".img1")
  .setAttribute("src", "./images/dice" + randomNumber1 + ".png");

document
  .querySelector(".img2")
  .setAttribute("src", "./images/dice" + randomNumber2 + ".png");

document.getElementById("refresh").addEventListener("click", function () {
  location.reload();
});
