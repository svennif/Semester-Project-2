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

function updateHistoryOne(rollOne) {
  rollHistoryOne.push(rollOne);
  el.innerHTML = '';
  rollHistoryOne.forEach((record, i) => {
    const playerOneLog = document.createElement('div');
    playerOneLog.className = 'playerOne';
    playerOneLog.innerHTML = `<b>${(i + 1)}:</b> ${record}`;
    el.appendChild(playerOneLog);
  });
}

function updateHistoryTwo(rollTwo) {
  rollHistoryTwo.push(rollTwo);
  le.innerHTML = '';
  rollHistoryTwo.forEach((record, i) => {
    const playerTwoLog = document.createElement('div');
    playerTwoLog.className = 'playerTwo';
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

  const trapOne = 'Trap 1!';
  const trapTwo = 'Trap 2!';
  const trapThree = 'Trap 3!';
  const trapFour = 'Trap 4!';
  const trapFive = 'Trap 5!';

  if (playerOnePos === 7 || playerTwoPos === 7) {
    alert(trapOne); 
  } else if (playerOnePos === 10 || playerTwoPos === 10) {
    alert(trapTwo);
  } else if (playerOnePos === 13 || playerTwoPos === 13) {
    alert(trapThree);
  } else if (playerOnePos === 20 || playerTwoPos === 20) {
    alert(trapFour);
  } else if (playerOnePos === 27 || playerTwoPos === 27) {
    alert(trapFive);
  }

  // if on last, WIN!
  if (playerOnePos === board.length - 1) {
    setTimeout(() => alert('Player one win!'), 1);
  }

  if (playerTwoPos === board.length - 1) {
    setTimeout(() => alert('Player two win!'), 1);
  }
});