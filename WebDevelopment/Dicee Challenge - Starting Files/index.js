randomNumber1 = Math.random() * 6 + 1;
randomNumber2 = Math.random() * 6 + 1;
randomNumber1 = Math.floor(randomNumber1);
randomNumber2 = Math.floor(randomNumber2);

playerOneImage = document.querySelector(".img1");
playerTwoImage = document.querySelector(".img2");
titleText = document.querySelector("#title");
console.log(playerOneImage);
console.log(randomNumber1);

if (randomNumber1 == 1) {
  playerOneImage.src = "images/dice1.png";
} else if (randomNumber1 == 2) {
  playerOneImage.src = "images/dice2.png";
} else if (randomNumber1 == 3) {
  playerOneImage.src = "images/dice3.png";
} else if (randomNumber1 == 4) {
  playerOneImage.src = "images/dice4.png";
} else if (randomNumber1 == 5) {
  playerOneImage.src = "images/dice5.png";
} else if (randomNumber1 == 6) {
  playerOneImage.src = "images/dice6.png";
}

if (randomNumber2 == 1) {
  playerTwoImage.src = "images/dice1.png";
} else if (randomNumber2 == 2) {
  playerTwoImage.src = "images/dice2.png";
} else if (randomNumber2 == 3) {
  playerTwoImage.src = "images/dice3.png";
} else if (randomNumber2 == 4) {
  playerTwoImage.src = "images/dice4.png";
} else if (randomNumber2 == 5) {
  playerTwoImage.src = "images/dice5.png";
} else if (randomNumber2 == 6) {
  playerTwoImage.src = "images/dice6.png";
}

if (randomNumber1 > randomNumber2) {
  title.innerHTML = "Player 1 WON!";
} else if (randomNumber1 < randomNumber2) {
  title.innerHTML = "Player 2 WON!";
} else {
  title.innerHTML = "There isn't Winner!";
}
