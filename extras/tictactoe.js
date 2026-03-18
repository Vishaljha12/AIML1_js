      const game = document.getElementById('game');
let currentPlayer = 'X';
let board = Array(9).fill(null);

function createBoard() {
  for (let i = 0; i < 3; i++) {
    const row = game.insertRow();
    for (let j = 0; j < 3; j++) {
      const cell = row.insertCell();
      cell.addEventListener('click', () => makeMove(i * 3 + j));
    }
  }
}
function makeMove(index) {
  if (board[index] || checkWin()) return;
  board[index] = currentPlayer;
  game.rows[Math.floor(index / 3)].cells[index % 3].textContent = currentPlayer;
  if (checkWin()) {
    document.getElementById('result').textContent = `${currentPlayer} wins!`;
    return;
  }
  if (board.every(cell => cell)) {
    document.getElementById('result').textContent = 'Draw!';
    return;
  }
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function checkWin() {
  const wins = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];
  for (let win of wins) {
    if (board[win[0]] && board[win[0]] === board[win[1]] && board[win[0]] === board[win[2]]) {
      return true;
    }
  }
  return false;
}

createBoard();