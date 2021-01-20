'use strict';
const number = document.querySelector('.number');
const guess = document.querySelector('.guess');
const check = document.querySelector('.check');
const message = document.querySelector('.message');
const score = document.querySelector('.score');
const highScore = document.querySelector('.highscore');
const again = document.querySelector('.again');
var secretNumber = Math.floor(Math.random() * 20) + 1;

check.addEventListener('click', () => {
  var guessedNo = +guess.value;
  if (secretNumber === guessedNo) {
    message.innerText = 'Correct Number!!👏';
    check.disabled = true;
    number.innerText = secretNumber;
    if (highScore.innerText < score) {
      highScore.innerText = score.innerText;
    }
    document.querySelector('body').style.backgroundColor = '#60b347';
  } else {
    if (guessedNo > secretNumber) {
      message.innerText = 'Too High';
    } else {
      message.innerText = 'Too Low';
    }
    score.innerText = score.innerText - 1;
    if (score.innerText < 0) {
      score.innerText = 0;
      message.innerText = 'You Lost The Game!! 😥';
    }
  }
});
again.addEventListener('click', () => {
  message.innerText = 'Start guessing...';
  score.innerText = 20;
  number.innerText = '?';
  guess.value = '';
  document.querySelector('body').style.backgroundColor = '#222';
});
