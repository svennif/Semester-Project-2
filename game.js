const board = [
    {left: 0, top: 0},
    {left: 10, top: 0},
    {left: 20, top: 0},
    {left: 30, top: 0},
    {left: 40, top: 0},

    {left: 0, top: 10},
    {left: 10, top: 10},
    {left: 20, top: 10},
    {left: 30, top: 10},
    {left: 40, top: 10},

    {left: 0, top: 20},
    {left: 10, top: 20},
    {left: 20, top: 20},
    {left: 30, top: 20},
    {left: 40, top: 20},

    {left: 0, top: 30},
    {left: 10, top: 30},
    {left: 20, top: 30},
    {left: 30, top: 30},
    {left: 40, top: 30},

    {left: 0, top: 40},
    {left: 10, top: 40},
    {left: 20, top: 40},
    {left: 30, top: 40},
    {left: 40, top: 40},

    {left: 0, top: 50},
    {left: 10, top: 50},
    {left: 20, top: 50},
    {left: 30, top: 50},
    {left: 40, top: 50},
]

var currentPosition = 0;
var rollLog = [];

// Dice
function rollDice() {
  return Math.floor(Math.random()* 6 + 1);
}

let el = document.getElementById('rollLog');

function updatedHistory(roll) {
  rollLog.push(roll);
  el.innerHTML = '';
  rollLog.forEach((record, i) => {
    var logDiv = document.createElement('div');
    logDiv.innerHTML = `${(i + 1)}: ${record}`;
    el.appendChild(logDiv);
  });
}

var tileContainer = document.getElementById('tileContainer');

board.forEach(tile => {
  const tileDiv = document.createElement('div');
  tileDiv.className = 'tile';
  tileDiv.style.left = tile.left + 'px';
  tileDiv.style.top = tile.top + 'px';
  tileContainer.appendChild(tileDiv);
});

let token = document.getElementById('token');
let button = document.getElementById('rollButton');

button.addEventListener('click' , (e) => {
  let roll = rollDice();
  updatedHistory(roll);

  if (currentPosition + roll >= board.length) {
    currentPosition = board.length -1;
  } else {
    currentPosition += roll; 
  }
  token.style.left = board[currentPosition].left + 'px';
  token.style.left = board[currentPosition].top + 'px';

  if (currentPosition === board.length - 1) {
    setTimeout(() => alert('You win!'), 1);
  }
});