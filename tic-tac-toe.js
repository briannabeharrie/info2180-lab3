//Exercise 1
document.addEventListener('DOMContentLoaded', function () {
    const squares = document.querySelectorAll('.square');

    squares.forEach((square, index) => {
      square.classList.add('square');
    });
  });
//Exercise 2
let currentPlayer ='X';
const players =['X','O'];
document.addEventListener('DOMContentLoaded',function(){
    const squares =document.querySelectorAll('.square');
    squares.forEach((square,index) => {
        square.addEventListener('click',function(){
            if (!square.textContent){
                square.textContent = currentPlayer;
                square.classList.add(currentPlayer);
                currentPlayer = players[(players.indexOf(currentPlayer) + 1) % players.length];
            }
        });
    });
});
//Exercise 3
document.addEventListener('DOMContentLoaded',function(){
    const squares =document.querySelectorAll('.square');
    squares.forEach((square)=> {
        square.addEventListener('mouseenter',function(){
            square.classList.add('hover');
        });
        square.addEventListener('mouseleave', function () {
            square.classList.remove('hover');
          });
    });
});
//Exercise 4
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
        squares[a].textContent &&
        squares[a].textContent === squares[b].textContent &&
        squares[a].textContent === squares[c].textContent
      ) {
        document.getElementById('status').textContent = `Congratulations! ${squares[a].textContent} is the Winner!`;
        document.getElementById('status').classList.add('you-won');
      }
    }
  }
  document.addEventListener('DOMContentLoaded', function () {
    const squares = document.querySelectorAll('.square');
  
    squares.forEach((square, index) => {
      square.addEventListener('click', function () {
        if (!square.textContent) {
          square.textContent = currentPlayer;
          square.classList.add(currentPlayer);
          checkWinner();
          currentPlayer = players[(players.indexOf(currentPlayer) + 1) % players.length];
        }
      });
    });
  });
//Exercise 5
document.addEventListener('DOMContentLoaded', function () {
    const newGameButton = document.querySelector('.btn');
  
    newGameButton.addEventListener('click', function () {
      squares.forEach((square) => {
        square.textContent = '';
        square.className = 'square';
      });
  
      document.getElementById('status').textContent = 'Move your mouse over a square and click to play an X or an O.';
      document.getElementById('status').classList.remove('you-won');
      currentPlayer = 'X';
    });
  });
//Exercise 6
document.addEventListener('DOMContentLoaded', function () {
    const squares = document.querySelectorAll('.square');
  
    squares.forEach((square) => {
      square.addEventListener('click', function () {
        if (square.textContent === '') {
          square.textContent = currentPlayer;
          square.classList.add(currentPlayer);
          checkWinner();
          currentPlayer = players[(players.indexOf(currentPlayer) + 1) % players.length];
        }
      });
    });
  });
  