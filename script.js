'use strict';
// selecting elements :
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');
const btnNewEl = document.querySelector('.btn--new');
const btnRollEl = document.querySelector('.btn--roll');
const btnHoldEl = document.querySelector('.btn--hold');
const imagDice = document.querySelector('.dice');
let currentscores = 0;
let activePlayer = 0;
let scores = [0, 0];
let playing = true;

const init = function () {
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  scores = [0, 0];
  currentscores = 0;
  activePlayer = 0;
  playing = true;
  imagDice.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};

init();

const switchplayer = function () {
  document.querySelector(`#current--${activePlayer}`).textContent = 0;
  document.querySelector('.player--0').classList.toggle('player--active');
  document.querySelector('.player--1').classList.toggle('player--active');
  currentscores = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
};

score0El.textContent = 0;
score1El.textContent = 0;
imagDice.classList.add('hidden');

btnRollEl.addEventListener('click', function () {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);
    imagDice.classList.remove('hidden');
    imagDice.src = `dice-${dice}.png`;
    if (dice !== 1) {
      currentscores += dice;
      document.querySelector(`#current--${activePlayer}`).textContent = currentscores;
    } else {
      imagDice.src = `dice-${dice}.png`;
      switchplayer();
    }
  }
});

btnHoldEl.addEventListener('click', function () {
  // console.log(currentscores);
  if (playing) {
    scores[activePlayer] += currentscores;
    document.querySelector(`#score--${activePlayer}`).textContent = scores[activePlayer];
    if (scores[activePlayer] >= 100) {
      document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
      playing = false;
    } else {
      switchplayer();
    }
  }
});

btnNewEl.addEventListener('click', init);
