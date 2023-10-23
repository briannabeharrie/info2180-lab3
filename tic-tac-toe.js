document.addEventListener('DOMContentLoaded', function () {
    const boardDivs = document.querySelectorAll('#board div');
    const newGameButton = document.querySelector('.btn');
    const players = ['X', 'O'];
    let currentPlayer = 'X';
    let moveCount = 0;
    let gameEnded = false;
  
    function checkWinner() {
      const winPatterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];
      for (const pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (
          boardDivs[a].textContent &&
          boardDivs[a].textContent === boardDivs[b].textContent &&
          boardDivs[a].textContent === boardDivs[c].textContent
        ) {
          document.getElementById('status').textContent = `Congratulations! ${boardDivs[a].textContent} is the Winner!`;
          document.getElementById('status').classList.add('you-won');
          boardDivs.forEach((square) => {
            square.removeEventListener('click', clickHandler);
            square.removeEventListener('mouseenter', hoverInHandler);
            square.removeEventListener('mouseleave', hoverOutHandler);
          });
          gameEnded = true;
          return;
        }
      }
      if (moveCount === 9) {
        document.getElementById('status').textContent = "It's a Draw!";
        document.getElementById('status').classList.add('you-won');
        gameEnded = true;
      }
    }
  
    function clickHandler() {
      if (!gameEnded && !this.textContent) {
        this.textContent = currentPlayer;
        this.classList.add(currentPlayer);
        currentPlayer = players[(players.indexOf(currentPlayer) + 1) % players.length];
        moveCount++;
        if (moveCount >= 5) {
          checkWinner();
        }
      }
    }
  
    function hoverInHandler() {
      if (!this.classList.contains('X') && !this.classList.contains('O')) {
        this.classList.add('hover');
      }
    }
  
    function hoverOutHandler() {
      this.classList.remove('hover');
    }
  
    boardDivs.forEach((square) => {
      square.addEventListener('click', clickHandler);
      square.addEventListener('mouseenter', hoverInHandler);
      square.addEventListener('mouseleave', hoverOutHandler);
    });
  
    newGameButton.addEventListener('click', function () {
      boardDivs.forEach((square) => {
        square.textContent = '';
        square.className = 'square';
        square.classList.remove('hover'); // Remove hover class on reset
      });
  
      document.getElementById('status').textContent = 'Move your mouse over a square and click to play an X or an O.';
      document.getElementById('status').classList.remove('you-won');
      currentPlayer = 'X';
      moveCount = 0;
      gameEnded = false;
  
      boardDivs.forEach((square) => {
        square.addEventListener('click', clickHandler);
        square.addEventListener('mouseenter', hoverInHandler);
        square.addEventListener('mouseleave', hoverOutHandler);
      });
    });
  });
  
