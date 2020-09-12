// meta code
const board = [
  {id: 1, left: 0, top: 100},
  {id: 2,left: 100, top: 100},
  {id: 3,left: 200, top: 100},
  {id: 4,left: 300, top: 100},
  {id: 5,left: 400, top: 100},
  
  {id: 6,left: 0, top: 200},
  {id: 7,left: 100, top: 200},
  {id: 8,left: 200, top: 200},
  {id: 9,left: 300, top: 200},
  {id: 10,left: 400, top: 200},
  
  {id: 11,left: 0, top: 300},
  {id: 12,left: 100, top: 300},
  {id: 13,left: 200, top: 300},
  {id: 14,left: 300, top: 300},
  {id: 15,left: 400, top: 300},
  
  {id: 16,left: 0, top: 400},
  {id: 17,left: 100, top: 400},
  {id: 18,left: 200, top: 400},
  {id: 19,left: 300, top: 400},
  {id: 20,left: 400, top: 400},
  
  {id: 21,left: 0, top: 500},
  {id: 22,left: 100, top: 500},
  {id: 23,left: 200, top: 500},
  {id: 24,left: 300, top: 500},
  {id: 25,left: 400, top: 500},
  
  {id: 26,left: 0, top: 600},
  {id: 27,left: 100, top: 600},
  {id: 28,left: 200, top: 600},
  {id: 29,left: 300, top: 600},
  {id: 30,left: 400, top: 600},
]

var rollHistoryOne = [];
var rollHistoryTwo = [];
var playerOnePos = 0; // Player one starting position
var playerTwoPos = 0; // Player Two starting position

// show roll history
const el = document.getElementById('logOne');
const le = document.getElementById('logTwo');
document.getElementById('playerOne').innerHTML = "<b>" + localStorage.getItem('playerOne') + "</b>";
document.getElementById('playerTwo').innerHTML = "<b>" + localStorage.getItem('playerTwo') + "</b>";

function updateHistoryOne(rollOne) {
  rollHistoryOne.push(rollOne);
  el.innerHTML = '';
  rollHistoryOne.forEach((record, i) => {
    const playerOneLog = document.createElement('div');
    playerOneLog.className = 'playerOneLog';
    playerOneLog.innerHTML = `<b>${(i + 1)}:</b> ${record}`;
    el.appendChild(playerOneLog);
  });
}

function updateHistoryTwo(rollTwo) {
  rollHistoryTwo.push(rollTwo); 
  le.innerHTML = '';
  rollHistoryTwo.forEach((record, i) => {
    const playerTwoLog = document.createElement('div');
    playerTwoLog.className = 'playerTwoLog';
    playerTwoLog.innerHTML = `<b>${(i + 1)}:</b> ${record}`;
    le.appendChild(playerTwoLog);
  });
}

// draw board
const tileContainer = document.getElementById('tileContainer');

board.forEach(tile => {
  const tileDiv = document.createElement('div');
  tileDiv.className = 'tile';
  tileDiv.style.left = tile.left + 'px';
  tileDiv.style.top = tile.top + 'px';
  tileContainer.appendChild(tileDiv);
});

// Dice
function diceOne() {
  return Math.floor(Math.random() * 6 + 1);
}

function diceTwo() {
  return Math.floor(Math.random() * 6 + 1);
}

/*
var can = document.getElementById('canvas1');
var ctx = tokenOne.getContext('2d');

var targaryen = new Image();
targaryen.onload = function() {
ctx.drawImage(targaryen, 0, 0);
}
targaryen.src = "images/targaryen.svg";

var stark = new Image();
stark.onload = function() {
ctx.drawImage(stark, 0, 0);
}
stark.src = "images/stark.svg";
*/

// button and position logic
const button = document.getElementById('rollButton');
const tokenOne = document.getElementById('tokenOne');
const tokenTwo = document.getElementById('tokenTwo');



button.addEventListener('click', (e) => {
  const rollOne = diceOne();
  const rollTwo = diceTwo();
  updateHistoryOne(rollOne);
  updateHistoryTwo(rollTwo);

  if (playerOnePos + rollOne >= board.length) {
    // not enought tiles left, go to last
    playerOnePos = board.length - 1;
  } else {
    playerOnePos += rollOne;
  }

  if (playerTwoPos + rollTwo >= board.length) {
    // not enought tiles left, go to last
    playerTwoPos = board.length - 1;
  } else {
    playerTwoPos += rollTwo;
  }

  tokenOne.style.left = board[playerOnePos].left + 35 + 'px';
  tokenOne.style.top = board[playerOnePos].top + 35 + 'px';
  tokenTwo.style.left = board[playerTwoPos].left + 35 + 'px';
  tokenTwo.style.top = board[playerTwoPos].top + 35 + 'px';

function tokenOnePosition() {
  tokenOne.style.left = board[playerOnePos].left + 35 + 'px';
  tokenOne.style.top = board[playerOnePos].top + 35 + 'px';
}

function tokenTwoPosition() {
  tokenTwo.style.left = board[playerTwoPos].left + 35 + 'px';
  tokenTwo.style.top = board[playerTwoPos].top + 35 + 'px';
}

if (playerOnePos === 7) {
  alert('Player 1 must og back 5');
  playerOnePos = 2;
  tokenOnePosition();
} else if (playerOnePos === 10) {
  alert('Player 1 must go back 2');
  playerOnePos = 8;
  tokenOnePosition();
} else if (playerOnePos === 13) {
  alert('Player 1 must go back 3');
  playerOnePos = 10; 
  tokenOnePosition();
} else if (playerOnePos === 20) {
  alert('Player 1 must og back 5'); 
  playerOnePos = 15;
  tokenOnePosition();
} else if (playerOnePos === 27) {
  alert('player 1 must go back 4')
  playerOnePos = 23;
  tokenOnePosition();
};  

if(playerTwoPos === 7) {
  alert('Player 2 must og back 1');
  playerTwoPos = 6;
  tokenTwoPosition();
} else if (playerTwoPos === 10) {
  alert('Player 2 must go back 2');
  playerTwoPos = 8;
  tokenTwoPosition();
} else if (playerTwoPos === 13) {
  alert('Player 2 must go back 3');
  playerTwoPos = 10; 
  tokenTwoPosition();
} else if (playerTwoPos === 20) {
  alert('Player 2 must og back 5'); 7
  playerTwoPos = 15;
  tokenTwoPosition();
} else if (playerTwoPos === 27) {
  alert('player 2 must go back 4')
  playerTwoPos = 23;
  tokenTwoPosition();
};

  // if on last, WIN!
  if (playerOnePos === board.length - 1) {
    alert(localStorage.getItem('playerOne') + ' is victorious!');
    window.location.replace('victory.html');
  }

  if (playerTwoPos === board.length - 1) {
    alert(localStorage.getItem('playerTwo') + ' is victorious!');
    window.location.replace('victory.html');
  }
});
