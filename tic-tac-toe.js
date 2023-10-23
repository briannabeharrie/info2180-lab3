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
