const board = [
    {id: 0, left: 0, top: 0},
    {id: 1,left: 100, top: 0},
    {id: 2,left: 200, top: 0},
    {id: 3,left: 300, top: 0},
    {id: 4,left: 400, top: 0},

    {id: 5,left: 0, top: 100},
    {id: 6,left: 100, top: 100},
    {id: 7,left: 200, top: 100},
    {id: 8,left: 300, top: 100},
    {id: 9,left: 400, top: 100},

    {id: 10,left: 0, top: 200},
    {id: 11,left: 100, top: 200},
    {id: 12,left: 200, top: 200},
    {id: 13,left: 300, top: 200},
    {id: 14,left: 400, top: 200},

    {id: 15,left: 0, top: 300},
    {id: 16,left: 100, top: 300},
    {id: 17,left: 200, top: 300},
    {id: 18,left: 300, top: 300},
    {id: 19,left: 400, top: 300},

    {id: 20,left: 0, top: 400},
    {id: 21,left: 100, top: 400},
    {id: 22,left: 200, top: 400},
    {id: 23,left: 300, top: 400},
    {id: 24,left: 400, top: 400},

    {id: 25,left: 0, top: 500},
    {id: 26,left: 100, top: 500},
    {id: 27,left: 200, top: 500},
    {id: 28,left: 300, top: 500},
    {id: 29,left: 400, top: 500},
]

let i = 0; 
var currentPosition = board[i].id;
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
    logDiv.innerHTML = `<b>Roll${(i + 1)}:</b> ${record}`;
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