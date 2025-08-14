function computerMove(){
  const randomNumber = Math.random();

  if(randomNumber >= 0 && randomNumber < 1/3){
    return '✊';
  } else if (randomNumber >= 1/3 && randomNumber < 2/3){
    return '✋';
  } else if (randomNumber >= 2/3 && randomNumber < 1){
    return '✌️';
  }
}

function playGame(move){
  const computer = computerMove();
  let result = '';

  document.getElementById("computerMoveEmoji").innerText = computer;
  document.getElementById()
}