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

const tilesWrapper = document.getElementById('game-board');

board.forEach(tile => {
    const tileDiv = document.createElement('div');
    tileDiv.className = 'tile';
    tileDiv.style.left = tile.left + 'px';
    tileDiv.style.top = tile.top + 'px';
    tilesWrapper.appendChild(tileDiv);
  });


  let rollHistory = [];
  let currentPosition = 0; // starting positon
  
  function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
  }
  
  // show roll history
const el = document.getElementById('roll-history');
  
function updateHistory(roll) {
    rollHistory.push(roll);
    el.innerHTML = '';
    rollHistory.forEach((record, i) => {
      const recordDiv = document.createElement('div');
      recordDiv.innerHTML = `${(i + 1)}: ${record}`;
      el.appendChild(recordDiv);
    });
  }

// button and position logic
const button = document.getElementById('roll-button');
const piece = document.getElementById('token');

button.addEventListener('click', (e) => {
  const roll = rollDice();
  updateHistory(roll);

  if (currentPosition + roll >= board.length) {
    // not enought tiles left, go to last
    currentPosition = board.length - 1;
  } else {
    currentPosition += roll;
  }
  
  piece.style.left = board[currentPosition].left + 'px';
  piece.style.top = board[currentPosition].top + 'px';
  
  // if on last, WIN!
  if (currentPosition === board.length - 1) {
    setTimeout(() => alert('You win!'), 1);
  }
});